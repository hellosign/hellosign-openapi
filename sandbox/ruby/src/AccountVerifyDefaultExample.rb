require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

account_verify_request = Dropbox::Sign::AccountVerifyRequest.new
account_verify_request.email_address = "some_user@dropboxsign.com"

begin
    response = Dropbox::Sign::AccountApi.new.account_verify(
        account_verify_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling Account#account_verify: #{e}"
end
