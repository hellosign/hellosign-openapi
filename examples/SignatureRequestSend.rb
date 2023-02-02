require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

signature_request_api = Dropbox::Sign::SignatureRequestApi.new

signer_1 = Dropbox::Sign::SubSignatureRequestSigner.new
signer_1.email_address = "jack@example.com"
signer_1.name = "Jack"
signer_1.order = 0

signer_2 = Dropbox::Sign::SubSignatureRequestSigner.new
signer_2.email_address = "jill@example.com"
signer_2.name = "Jill"
signer_2.order = 1

signing_options = Dropbox::Sign::SubSigningOptions.new
signing_options.draw = true
signing_options.type = true
signing_options.upload = true
signing_options.phone = true
signing_options.default_type = "draw"

field_options = Dropbox::Sign::SubFieldOptions.new
field_options.date_format = "DD - MM - YYYY"

data = Dropbox::Sign::SignatureRequestSendRequest.new
data.title = "NDA with Acme Co."
data.subject = "The NDA we talked about"
data.message = "Please sign this NDA and then we can discuss more. Let me know if you have any questions."
data.signers = [signer_1, signer_2]
data.cc_email_addresses = [
  "lawyer1@dropboxsign.com",
  "lawyer2@dropboxsign.com",
]
data.files = [File.new("example_signature_request.pdf", "r")]
data.metadata = {
  custom_id: 1234,
  custom_text: "NDA #9",
}
data.signing_options = signing_options
data.field_options = field_options
data.test_mode = true

begin
  result = signature_request_api.signature_request_send(data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
