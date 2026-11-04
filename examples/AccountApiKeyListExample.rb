require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
end

begin
    response = Dropbox::Sign::ApiKeyApi.new.api_key_list

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling ApiKeyApi#api_key_list: #{e}"
end
