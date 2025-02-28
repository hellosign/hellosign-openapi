require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

signer_list_2_custom_fields_1 = Dropbox::Sign::SubBulkSignerListCustomField.new
signer_list_2_custom_fields_1.name = "company"
signer_list_2_custom_fields_1.value = "123 LLC"

signer_list_2_custom_fields = [
    signer_list_2_custom_fields_1,
]

signer_list_2_signers_1 = Dropbox::Sign::SubSignatureRequestTemplateSigner.new
signer_list_2_signers_1.role = "Client"
signer_list_2_signers_1.name = "Mary"
signer_list_2_signers_1.email_address = "mary@example.com"
signer_list_2_signers_1.pin = "gd9as5b"

signer_list_2_signers = [
    signer_list_2_signers_1,
]

signer_list_1_custom_fields_1 = Dropbox::Sign::SubBulkSignerListCustomField.new
signer_list_1_custom_fields_1.name = "company"
signer_list_1_custom_fields_1.value = "ABC Corp"

signer_list_1_custom_fields = [
    signer_list_1_custom_fields_1,
]

signer_list_1_signers_1 = Dropbox::Sign::SubSignatureRequestTemplateSigner.new
signer_list_1_signers_1.role = "Client"
signer_list_1_signers_1.name = "George"
signer_list_1_signers_1.email_address = "george@example.com"
signer_list_1_signers_1.pin = "d79a3td"

signer_list_1_signers = [
    signer_list_1_signers_1,
]

signer_list_1 = Dropbox::Sign::SubBulkSignerList.new
signer_list_1.custom_fields = signer_list_1_custom_fields
signer_list_1.signers = signer_list_1_signers

signer_list_2 = Dropbox::Sign::SubBulkSignerList.new
signer_list_2.custom_fields = signer_list_2_custom_fields
signer_list_2.signers = signer_list_2_signers

signer_list = [
    signer_list_1,
    signer_list_2,
]

ccs_1 = Dropbox::Sign::SubCC.new
ccs_1.role = "Accounting"
ccs_1.email_address = "accounting@example.com"

ccs = [
    ccs_1,
]

signature_request_bulk_send_with_template_request = Dropbox::Sign::SignatureRequestBulkSendWithTemplateRequest.new
signature_request_bulk_send_with_template_request.template_ids = [
    "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
]
signature_request_bulk_send_with_template_request.message = "Glad we could come to an agreement."
signature_request_bulk_send_with_template_request.subject = "Purchase Order"
signature_request_bulk_send_with_template_request.test_mode = true
signature_request_bulk_send_with_template_request.signer_list = signer_list
signature_request_bulk_send_with_template_request.ccs = ccs

begin
    response = Dropbox::Sign::SignatureRequestApi.new.signature_request_bulk_send_with_template(
        signature_request_bulk_send_with_template_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling SignatureRequestApi#signature_request_bulk_send_with_template: #{e}"
end
