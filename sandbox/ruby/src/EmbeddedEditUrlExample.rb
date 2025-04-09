require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

merge_fields = [
]

embedded_edit_url_request = Dropbox::Sign::EmbeddedEditUrlRequest.new
embedded_edit_url_request.cc_roles = [
    "",
]
embedded_edit_url_request.merge_fields = merge_fields

begin
    response = Dropbox::Sign::EmbeddedApi.new.embedded_edit_url(
        "f57db65d3f933b5316d398057a36176831451a35", # template_id
        embedded_edit_url_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling EmbeddedApi#embedded_edit_url: #{e}"
end
