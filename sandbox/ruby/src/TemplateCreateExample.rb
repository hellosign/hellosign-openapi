require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

field_options = Dropbox::Sign::SubFieldOptions.new
field_options.date_format = "DD - MM - YYYY"

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

form_fields_per_document_1 = Dropbox::Sign::SubFormFieldsPerDocumentText.new
form_fields_per_document_1.document_index = 0
form_fields_per_document_1.api_id = "uniqueIdHere_1"
form_fields_per_document_1.type = "text"
form_fields_per_document_1.required = true
form_fields_per_document_1.signer = "1"
form_fields_per_document_1.width = 100
form_fields_per_document_1.height = 16
form_fields_per_document_1.x = 112
form_fields_per_document_1.y = 328
form_fields_per_document_1.name = ""
form_fields_per_document_1.page = 1
form_fields_per_document_1.placeholder = ""
form_fields_per_document_1.validation_type = "numbers_only"

form_fields_per_document_2 = Dropbox::Sign::SubFormFieldsPerDocumentSignature.new
form_fields_per_document_2.document_index = 0
form_fields_per_document_2.api_id = "uniqueIdHere_2"
form_fields_per_document_2.type = "signature"
form_fields_per_document_2.required = true
form_fields_per_document_2.signer = "0"
form_fields_per_document_2.width = 120
form_fields_per_document_2.height = 30
form_fields_per_document_2.x = 530
form_fields_per_document_2.y = 415
form_fields_per_document_2.name = ""
form_fields_per_document_2.page = 1

form_fields_per_document = [
    form_fields_per_document_1,
    form_fields_per_document_2,
]

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

template_create_request = Dropbox::Sign::TemplateCreateRequest.new
template_create_request.client_id = "37dee8d8440c66d54cfa05d92c160882"
template_create_request.message = "For your approval"
template_create_request.subject = "Please sign this document"
template_create_request.test_mode = true
template_create_request.title = "Test Template"
template_create_request.cc_roles = [
    "Manager",
]
template_create_request.files = [
    File.new("./example_signature_request.pdf", "r"),
]
template_create_request.field_options = field_options
template_create_request.signer_roles = signer_roles
template_create_request.form_fields_per_document = form_fields_per_document
template_create_request.merge_fields = merge_fields

begin
    response = Dropbox::Sign::TemplateApi.new.template_create(
        template_create_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling TemplateApi#template_create: #{e}"
end
