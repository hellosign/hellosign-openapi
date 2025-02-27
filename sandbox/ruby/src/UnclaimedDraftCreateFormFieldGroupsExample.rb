require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

form_field_groups_1 = Dropbox::Sign::SubFormFieldGroup.new
form_field_groups_1.group_id = "RadioItemGroup1"
form_field_groups_1.group_label = "Radio Item Group 1"
form_field_groups_1.requirement = "require_0-1"

form_field_groups = [
    form_field_groups_1,
]

form_fields_per_document_1 = Dropbox::Sign::SubFormFieldsPerDocumentRadio.new
form_fields_per_document_1.document_index = 0
form_fields_per_document_1.api_id = "uniqueIdHere_1"
form_fields_per_document_1.type = "radio"
form_fields_per_document_1.required = false
form_fields_per_document_1.signer = "0"
form_fields_per_document_1.width = 18
form_fields_per_document_1.height = 18
form_fields_per_document_1.x = 112
form_fields_per_document_1.y = 328
form_fields_per_document_1.group = "RadioItemGroup1"
form_fields_per_document_1.is_checked = true
form_fields_per_document_1.name = ""
form_fields_per_document_1.page = 1

form_fields_per_document_2 = Dropbox::Sign::SubFormFieldsPerDocumentRadio.new
form_fields_per_document_2.document_index = 0
form_fields_per_document_2.api_id = "uniqueIdHere_2"
form_fields_per_document_2.type = "radio"
form_fields_per_document_2.required = false
form_fields_per_document_2.signer = "0"
form_fields_per_document_2.width = 18
form_fields_per_document_2.height = 18
form_fields_per_document_2.x = 112
form_fields_per_document_2.y = 370
form_fields_per_document_2.group = "RadioItemGroup1"
form_fields_per_document_2.is_checked = false
form_fields_per_document_2.name = ""
form_fields_per_document_2.page = 1

form_fields_per_document = [
    form_fields_per_document_1,
    form_fields_per_document_2,
]

unclaimed_draft_create_request = Dropbox::Sign::UnclaimedDraftCreateRequest.new
unclaimed_draft_create_request.type = "request_signature"
unclaimed_draft_create_request.test_mode = false
unclaimed_draft_create_request.file_urls = [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
]
unclaimed_draft_create_request.form_field_groups = form_field_groups
unclaimed_draft_create_request.form_fields_per_document = form_fields_per_document

begin
    response = Dropbox::Sign::UnclaimedDraftApi.new.unclaimed_draft_create(
        unclaimed_draft_create_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling UnclaimedDraftApi#unclaimed_draft_create: #{e}"
end
