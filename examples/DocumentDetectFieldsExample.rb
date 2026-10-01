require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

document_field_detection_request = Dropbox::Sign::DocumentFieldDetectionRequest.new
document_field_detection_request.detection_mode = "annotations"
document_field_detection_request.file = File.new("./example_document.pdf", "r")
document_field_detection_request.page_range = "all"

begin
    response = Dropbox::Sign::DocumentApi.new.document_detect_fields(
        document_field_detection_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling DocumentApi#document_detect_fields: #{e}"
end
