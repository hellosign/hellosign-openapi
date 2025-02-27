require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

template_add_user_request = Dropbox::Sign::TemplateAddUserRequest.new
template_add_user_request.email_address = "george@dropboxsign.com"

begin
    response = Dropbox::Sign::TemplateApi.new.template_add_user(
        "f57db65d3f933b5316d398057a36176831451a35", # template_id
        template_add_user_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling TemplateApi#template_add_user: #{e}"
end
