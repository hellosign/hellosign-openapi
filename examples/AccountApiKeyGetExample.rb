require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
end

begin
    response = Dropbox::Sign::ApiKeyApi.new.api_key_get(
        "c3d4e5f6a7b8490c1d2e3f4a5b6c7d8e", # api_key_id
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling ApiKeyApi#api_key_get: #{e}"
end
