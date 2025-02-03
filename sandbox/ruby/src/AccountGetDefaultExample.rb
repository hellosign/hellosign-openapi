require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

begin
    response = Dropbox::Sign::AccountApi.new.account_get(
        {
            account_id: nil,
            email_address: nil,
        },
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling Account#account_get: #{e}"
end
