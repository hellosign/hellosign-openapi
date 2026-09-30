require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
    response = Dropbox::Sign::SignatureRequestApi.new.document_detect_fields(
        "annotations", # detection_mode
        {
            file: File.new("./example_document.pdf", "r"),
            file_url: nil,
            page_range: "all",
        },
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling SignatureRequestApi#document_detect_fields: #{e}"
end
