require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

field_options = Dropbox::Sign::SubFieldOptions.new
field_options.date_format = "DD - MM - YYYY"

merge_fields_1 = Dropbox::Sign::SubMergeField.new
merge_fields_1.name = "Full Name"
merge_fields_1.type = "text"

merge_fields_2 = Dropbox::Sign::SubMergeField.new
merge_fields_2.name = "Is Registered?"
merge_fields_2.type = "checkbox"

merge_fields = [
    merge_fields_1,
    merge_fields_2,
]

signer_roles_1 = Dropbox::Sign::SubTemplateRole.new
signer_roles_1.name = "Client"
signer_roles_1.order = 0

signer_roles_2 = Dropbox::Sign::SubTemplateRole.new
signer_roles_2.name = "Witness"
signer_roles_2.order = 1

signer_roles = [
    signer_roles_1,
    signer_roles_2,
]

template_create_embedded_draft_request = Dropbox::Sign::TemplateCreateEmbeddedDraftRequest.new
template_create_embedded_draft_request.client_id = "37dee8d8440c66d54cfa05d92c160882"
template_create_embedded_draft_request.message = "For your approval"
template_create_embedded_draft_request.subject = "Please sign this document"
template_create_embedded_draft_request.test_mode = true
template_create_embedded_draft_request.title = "Test Template"
template_create_embedded_draft_request.cc_roles = [
    "Manager",
]
template_create_embedded_draft_request.files = [
    File.new("./example_signature_request.pdf", "r"),
]
template_create_embedded_draft_request.field_options = field_options
template_create_embedded_draft_request.merge_fields = merge_fields
template_create_embedded_draft_request.signer_roles = signer_roles

begin
    response = Dropbox::Sign::TemplateApi.new.template_create_embedded_draft(
        template_create_embedded_draft_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling TemplateApi#template_create_embedded_draft: #{e}"
end
