require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
    response = Dropbox::Sign::AccountApi.new.account_get

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling AccountApi#account_get: #{e}"
end
