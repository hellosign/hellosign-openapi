require "spec_helper"
require "dropbox-sign"

# This test suite is intended solely as a stopgap while we setup automated
# internal tests from github actions.
#
# For now it requires running manually
describe "SignatureRequestSpec" do
  config_custom = JSON.parse(File.read(__dir__ + "/.config.json"), :symbolize_names => false)
  config_dist = JSON.parse(File.read(__dir__ + "/.config.dist.json"), :symbolize_names => false)
  config_merged = config_dist.merge(config_custom)
  opts = {}

  if config_merged["USE_XDEBUG"]
    opts[:header_params] = {"Cookie" => "XDEBUG_SESSION=xdebug"}
  end

  Dropbox::Sign.configure do |config|
    config.username = config_merged["API_KEY"]
    config.host = config_merged["BASE_URL"]
  end

  it "testSend" do
    signature_request_api = Dropbox::Sign::SignatureRequestApi.new

    data = JSON.parse(
      File.read(__dir__ + "/../test_fixtures/SignatureRequestSendRequest.json"),
      :symbolize_names => true,
    )

    send_request = Dropbox::Sign::SignatureRequestSendRequest.init(data)
    send_request.files = [File.new(__dir__ + "/../test_fixtures/pdf-sample.pdf", "r")]

    begin
      send_response = signature_request_api.signature_request_send(send_request, opts)
    rescue Dropbox::Sign::ApiError => e
      puts "Exception when calling Dropbox Sign API: #{e}"
      exit
    end

    signature_request = send_response.signature_request

    expect(signature_request.custom_fields[0].api_id)
      .to eq(send_request.form_fields_per_document[0].api_id)

    expect(signature_request.signatures[0].signer_email_address)
      .to eq(send_request.signers[0].email_address)
    expect(signature_request.signatures[1].signer_email_address)
      .to eq(send_request.signers[1].email_address)
    expect(signature_request.signatures[2].signer_email_address)
      .to eq(send_request.signers[2].email_address)

    begin
      get_response = signature_request_api.signature_request_get(
        signature_request.signature_request_id,
        opts,
      )
    rescue Dropbox::Sign::ApiError => e
      puts "Exception when calling Dropbox Sign API: #{e}"
      exit
    end

    expect(signature_request.signature_request_id)
      .to eq(get_response.signature_request.signature_request_id)
  end

  it "testCreateEmbedded" do
    signature_request_api = Dropbox::Sign::SignatureRequestApi.new

    data = JSON.parse(
      File.read(__dir__ + "/../test_fixtures/SignatureRequestCreateEmbeddedRequest.json"),
      :symbolize_names => true,
    )

    send_request = Dropbox::Sign::SignatureRequestCreateEmbeddedRequest.init(data)
    send_request.files = [File.new(__dir__ + "/../test_fixtures/pdf-sample.pdf", "r")]
    send_request.client_id = config_merged["CLIENT_ID"]

    begin
      send_response = signature_request_api.signature_request_create_embedded(
        send_request,
        opts,
      )
    rescue Dropbox::Sign::ApiError => e
      puts "Exception when calling Dropbox Sign API: #{e}"
      exit
    end

    signature_request = send_response.signature_request

    expect(signature_request.signatures[0].signer_email_address)
      .to eq(send_request.signers[0].email_address)
    expect(signature_request.signatures[1].signer_email_address)
      .to eq(send_request.signers[1].email_address)
    expect(signature_request.signatures[2].signer_email_address)
      .to eq(send_request.signers[2].email_address)

    embedded_api = Dropbox::Sign::EmbeddedApi.new

    begin
      get_response = embedded_api.embedded_sign_url(
        signature_request.signatures[0].signature_id,
        opts,
      )

      expect(get_response.embedded.sign_url).to be_truthy
    rescue Dropbox::Sign::ApiError => e
      puts "Exception when calling Dropbox Sign API: #{e}"
      exit
    end
  end

  it "testSendWithoutFileError" do
    signature_request_api = Dropbox::Sign::SignatureRequestApi.new

    data = JSON.parse(
      File.read(__dir__ + "/../test_fixtures/SignatureRequestSendRequest.json"),
      :symbolize_names => true,
      )

    send_request = Dropbox::Sign::SignatureRequestSendRequest.init(data)

    begin
      send_response = signature_request_api.signature_request_send(send_request, opts)

      puts "Should have thrown: #{send_response}"
      exit
    rescue Dropbox::Sign::ApiError => e
      expect(e.response_body.error.error_path)
        .to eq("file")
    end
  end
end
