require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

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

unclaimed_draft_create_request = Dropbox::Sign::UnclaimedDraftCreateRequest.new
unclaimed_draft_create_request.type = "request_signature"
unclaimed_draft_create_request.test_mode = false
unclaimed_draft_create_request.file_urls = [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
]
unclaimed_draft_create_request.form_fields_per_document = form_fields_per_document

begin
    response = Dropbox::Sign::UnclaimedDraftApi.new.unclaimed_draft_create(
        unclaimed_draft_create_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling UnclaimedDraftApi#unclaimed_draft_create: #{e}"
end
