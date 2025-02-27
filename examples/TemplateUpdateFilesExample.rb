require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

template_update_files_request = Dropbox::Sign::TemplateUpdateFilesRequest.new
template_update_files_request.files = [
    File.new("./example_signature_request.pdf", "r"),
]

begin
    response = Dropbox::Sign::TemplateApi.new.template_update_files(
        "f57db65d3f933b5316d398057a36176831451a35", # template_id
        template_update_files_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling TemplateApi#template_update_files: #{e}"
end
