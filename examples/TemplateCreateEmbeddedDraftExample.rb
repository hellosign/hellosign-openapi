require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

template_api = Dropbox::Sign::TemplateApi.new

role_1 = Dropbox::Sign::SubTemplateRole.new
role_1.name = "Client"
role_1.order = 0

role_2 = Dropbox::Sign::SubTemplateRole.new
role_2.name = "Witness"
role_2.order = 1

merge_field_1 = Dropbox::Sign::SubMergeField.new
merge_field_1.name = "Full Name"
merge_field_1.type = "text"

merge_field_2 = Dropbox::Sign::SubMergeField.new
merge_field_2.name = "Is Registered?"
merge_field_2.type = "checkbox"

field_options = Dropbox::Sign::SubFieldOptions.new
field_options.date_format = "DD - MM - YYYY"

data = Dropbox::Sign::TemplateCreateEmbeddedDraftRequest.new
data.client_id = "37dee8d8440c66d54cfa05d92c160882"
data.files = [File.new("example_signature_request.pdf", "r")]
data.title = "Test Template"
data.subject = "Please sign this document"
data.message = "For your approval"
data.signer_roles = [role_1, role_2]
data.cc_roles = ["Manager"]
data.merge_fields = [merge_field_1, merge_field_2]
data.field_options = field_options
data.test_mode = true

begin
  result = template_api.template_create_embedded_draft(data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
