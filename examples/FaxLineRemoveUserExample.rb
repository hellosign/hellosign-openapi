require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
end

fax_line_remove_user_request = Dropbox::Sign::FaxLineRemoveUserRequest.new
fax_line_remove_user_request.number = "[FAX_NUMBER]"
fax_line_remove_user_request.email_address = "member@dropboxsign.com"

begin
    response = Dropbox::Sign::FaxLineApi.new.fax_line_remove_user(
        fax_line_remove_user_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling FaxLineApi#fax_line_remove_user: #{e}"
end
