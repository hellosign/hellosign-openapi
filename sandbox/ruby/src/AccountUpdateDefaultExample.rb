require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

account_update_request = Dropbox::Sign::AccountUpdateRequest.new
account_update_request.callback_url = "https://www.example.com/callback"
account_update_request.locale = "en-US"

begin
    response = Dropbox::Sign::AccountApi.new.account_update(
        account_update_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling Account#account_update: #{e}"
end
