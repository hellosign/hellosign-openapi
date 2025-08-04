require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

form_fields_1 = Dropbox::Sign::SubUpdateFormField.new
form_fields_1.api_id = "uniqueIdHere_1"
form_fields_1.name = "New name 1"

form_fields_2 = Dropbox::Sign::SubUpdateFormField.new
form_fields_2.api_id = "uniqueIdHere_2"
form_fields_2.name = "New name 2"

form_fields = [
    form_fields_1,
    form_fields_2,
]

template_update_request = Dropbox::Sign::TemplateUpdateRequest.new
template_update_request.allow_form_view = false
template_update_request.title = "Test Title"
template_update_request.subject = "Test Subject"
template_update_request.message = "Test Message"
template_update_request.cc_roles = [
    "CC Role 1",
    "CC Role 2",
]
template_update_request.form_fields = form_fields

begin
    response = Dropbox::Sign::TemplateApi.new.template_update(
        "f57db65d3f933b5316d398057a36176831451a35", # template_id
        template_update_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling TemplateApi#template_update: #{e}"
end
