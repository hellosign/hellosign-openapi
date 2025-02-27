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

ccs_1 = Dropbox::Sign::SubCC.new
ccs_1.role = "Accounting"
ccs_1.email_address = "accounting@example.com"

ccs = [
    ccs_1,
]

custom_fields_1 = Dropbox::Sign::SubCustomField.new
custom_fields_1.name = "Cost"
custom_fields_1.editor = "Client"
custom_fields_1.required = true
custom_fields_1.value = "$20,000"

custom_fields = [
    custom_fields_1,
]

signature_request_edit_with_template_request = Dropbox::Sign::SignatureRequestEditWithTemplateRequest.new
signature_request_edit_with_template_request.template_ids = [
    "61a832ff0d8423f91d503e76bfbcc750f7417c78",
]
signature_request_edit_with_template_request.message = "Glad we could come to an agreement."
signature_request_edit_with_template_request.subject = "Purchase Order"
signature_request_edit_with_template_request.test_mode = true
signature_request_edit_with_template_request.signing_options = signing_options
signature_request_edit_with_template_request.signers = signers
signature_request_edit_with_template_request.ccs = ccs
signature_request_edit_with_template_request.custom_fields = custom_fields

begin
    response = Dropbox::Sign::SignatureRequestApi.new.signature_request_edit_with_template(
        "fa5c8a0b0f492d768749333ad6fcc214c111e967", # signature_request_id
        signature_request_edit_with_template_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling SignatureRequestApi#signature_request_edit_with_template: #{e}"
end
