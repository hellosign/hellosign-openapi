require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

template_edit_request = Dropbox::Sign::TemplateEditRequest.new
template_edit_request.cc_roles = [
    "Role 1",
    "Role 2",
]

begin
    response = Dropbox::Sign::TemplateApi.new.template_edit(
        "f57db65d3f933b5316d398057a36176831451a35", # template_id
        template_edit_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling TemplateApi#template_edit: #{e}"
end
