require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
end

editor_options = Dropbox::Sign::SubEditorPageOptions.new
editor_options.force_upload_page = false
editor_options.force_editor_page = true
editor_options.force_review_page = true

fax_draft_create_request = Dropbox::Sign::FaxDraftCreateRequest.new
fax_draft_create_request.client_id = "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a"
fax_draft_create_request.file_urls = [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
]
fax_draft_create_request.recipients = ["+14155552671"]
fax_draft_create_request.editor_options = editor_options
fax_draft_create_request.test_mode = true

begin
    response = Dropbox::Sign::FaxApi.new.fax_draft_create(
        fax_draft_create_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling FaxApi#fax_draft_create: #{e}"
end
