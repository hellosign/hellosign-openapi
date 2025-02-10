require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

signature_request_api = Dropbox::Sign::SignatureRequestApi.new

signer_list_1_signer = Dropbox::Sign::SubSignatureRequestTemplateSigner.new
signer_list_1_signer.role = "Client"
signer_list_1_signer.name = "George"
signer_list_1_signer.email_address = "george@example.com"
signer_list_1_signer.pin = "d79a3td"

signer_list_1_custom_fields = Dropbox::Sign::SubBulkSignerListCustomField.new
signer_list_1_custom_fields.name = "company"
signer_list_1_custom_fields.value = "ABC Corp"

signer_list_1 = Dropbox::Sign::SubBulkSignerList.new
signer_list_1.signers = [signer_list_1_signer]
signer_list_1.custom_fields = [signer_list_1_custom_fields]

signer_list_2_signer = Dropbox::Sign::SubSignatureRequestTemplateSigner.new
signer_list_2_signer.role = "Client"
signer_list_2_signer.name = "Mary"
signer_list_2_signer.email_address = "mary@example.com"
signer_list_2_signer.pin = "gd9as5b"

signer_list_2_custom_fields = Dropbox::Sign::SubBulkSignerListCustomField.new
signer_list_2_custom_fields.name = "company"
signer_list_2_custom_fields.value = "123 LLC"

signer_list_2 = Dropbox::Sign::SubBulkSignerList.new
signer_list_2.signers = [signer_list_2_signer]
signer_list_2.custom_fields = [signer_list_2_custom_fields]

cc_1 = Dropbox::Sign::SubCC.new
cc_1.role = "Accounting"
cc_1.email_address = "accounting@example.com"

data = Dropbox::Sign::SignatureRequestBulkCreateEmbeddedWithTemplateRequest.new
data.client_id = "1a659d9ad95bccd307ecad78d72192f8"
data.template_ids = ["c26b8a16784a872da37ea946b9ddec7c1e11dff6"]
data.subject = "Purchase Order"
data.message = "Glad we could come to an agreement."
data.signer_list = [signer_list_1, signer_list_2]
data.ccs = [cc_1]
data.test_mode = true

begin
  result = signature_request_api.signature_request_bulk_create_embedded_with_template(data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
