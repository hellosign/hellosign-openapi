require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

signature_request_api = Dropbox::Sign::SignatureRequestApi.new

signer_1 = Dropbox::Sign::SubSignatureRequestTemplateSigner.new
signer_1.role = "Client"
signer_1.email_address = "george@example.com"
signer_1.name = "George"

cc_1 = Dropbox::Sign::SubCC.new
cc_1.role = "Accounting"
cc_1.email_address = "accounting@example.com"

custom_field_1 = Dropbox::Sign::SubCustomField.new
custom_field_1.name = "Cost"
custom_field_1.value = "$20,000"
custom_field_1.editor = "Client"
custom_field_1.required = true

signing_options = Dropbox::Sign::SubSigningOptions.new
signing_options.draw = true
signing_options.type = true
signing_options.upload = true
signing_options.phone = false
signing_options.default_type = "draw"

data = Dropbox::Sign::SignatureRequestSendWithTemplateRequest.new
data.template_ids = ["c26b8a16784a872da37ea946b9ddec7c1e11dff6"]
data.subject = "Purchase Order"
data.message = "Glad we could come to an agreement."
data.signers = [signer_1]
data.ccs = [cc_1]
data.custom_fields = [custom_field_1]
data.signing_options = signing_options
data.test_mode = true

signature_request_id = "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f"

begin
  result = signature_request_api.signature_request_edit_with_template(signature_request_id, data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
