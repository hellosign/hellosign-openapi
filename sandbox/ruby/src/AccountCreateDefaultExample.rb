require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

account_create_request = Dropbox::Sign::AccountCreateRequest.new
account_create_request.email_address = "newuser@dropboxsign.com"

begin
    response = Dropbox::Sign::AccountApi.new.account_create(
        account_create_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling Account#account_create: #{e}"
end
