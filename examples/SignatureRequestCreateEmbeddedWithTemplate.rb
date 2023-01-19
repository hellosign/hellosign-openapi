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
signer_1.email_address = "jack@example.com"
signer_1.name = "Jack"

signing_options = Dropbox::Sign::SubSigningOptions.new
signing_options.draw = true
signing_options.type = true
signing_options.upload = true
signing_options.phone = true
signing_options.default_type = "draw"

data = Dropbox::Sign::SignatureRequestCreateEmbeddedWithTemplateRequest.new
data.client_id = "ec64a202072370a737edf4a0eb7f4437"
data.template_ids = ["c26b8a16784a872da37ea946b9ddec7c1e11dff6"]
data.subject = "Purchase Order"
data.message = "Glad we could come to an agreement."
data.signers = [signer_1]
data.signing_options = signing_options
data.test_mode = true

begin
  result = signature_request_api.signature_request_create_embedded_with_template(data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
