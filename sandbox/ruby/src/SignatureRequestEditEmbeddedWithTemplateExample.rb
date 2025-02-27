require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

signing_options = Dropbox::Sign::SubSigningOptions.new
signing_options.default_type = "draw"
signing_options.draw = true
signing_options.phone = false
signing_options.type = true
signing_options.upload = true

signers_1 = Dropbox::Sign::SubSignatureRequestTemplateSigner.new
signers_1.role = "Client"
signers_1.name = "George"
signers_1.email_address = "george@example.com"

signers = [
    signers_1,
]

signature_request_edit_embedded_with_template_request = Dropbox::Sign::SignatureRequestEditEmbeddedWithTemplateRequest.new
signature_request_edit_embedded_with_template_request.client_id = "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a"
signature_request_edit_embedded_with_template_request.template_ids = [
    "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
]
signature_request_edit_embedded_with_template_request.message = "Glad we could come to an agreement."
signature_request_edit_embedded_with_template_request.subject = "Purchase Order"
signature_request_edit_embedded_with_template_request.test_mode = true
signature_request_edit_embedded_with_template_request.signing_options = signing_options
signature_request_edit_embedded_with_template_request.signers = signers

begin
    response = Dropbox::Sign::SignatureRequestApi.new.signature_request_edit_embedded_with_template(
        "fa5c8a0b0f492d768749333ad6fcc214c111e967", # signature_request_id
        signature_request_edit_embedded_with_template_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling SignatureRequestApi#signature_request_edit_embedded_with_template: #{e}"
end
