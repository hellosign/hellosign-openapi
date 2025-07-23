require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

template_update_request = Dropbox::Sign::TemplateUpdateRequest.new
template_update_request.allow_form_view = false
template_update_request.title = "Test Title"
template_update_request.subject = "Test Subject"
template_update_request.message = "Test Message"
template_update_request.cc_roles = [
    "CC Role 1",
    "CC Role 2",
]

begin
    response = Dropbox::Sign::TemplateApi.new.template_update(
        "f57db65d3f933b5316d398057a36176831451a35", # template_id
        template_update_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling TemplateApi#template_update: #{e}"
end
