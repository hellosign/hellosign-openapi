require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

signature_request_update_request = Dropbox::Sign::SignatureRequestUpdateRequest.new
signature_request_update_request.signature_id = "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f"
signature_request_update_request.email_address = "john@example.com"

begin
    response = Dropbox::Sign::SignatureRequestApi.new.signature_request_update(
        "fa5c8a0b0f492d768749333ad6fcc214c111e967", # signature_request_id
        signature_request_update_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling SignatureRequestApi#signature_request_update: #{e}"
end
