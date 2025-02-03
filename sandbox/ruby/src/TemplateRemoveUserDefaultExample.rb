require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

template_remove_user_request = Dropbox::Sign::TemplateRemoveUserRequest.new
template_remove_user_request.email_address = "george@dropboxsign.com"

begin
    response = Dropbox::Sign::TemplateApi.new.template_remove_user(
        "f57db65d3f933b5316d398057a36176831451a35",
        template_remove_user_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling Template#template_remove_user: #{e}"
end
