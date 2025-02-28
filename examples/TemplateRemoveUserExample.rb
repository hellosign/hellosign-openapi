require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

template_remove_user_request = Dropbox::Sign::TemplateRemoveUserRequest.new
template_remove_user_request.email_address = "george@dropboxsign.com"

begin
    response = Dropbox::Sign::TemplateApi.new.template_remove_user(
        "f57db65d3f933b5316d398057a36176831451a35", # template_id
        template_remove_user_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling TemplateApi#template_remove_user: #{e}"
end
