require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
end

begin
    Dropbox::Sign::ApiKeyApi.new.api_key_delete(
        "c3d4e5f6a7b8490c1d2e3f4a5b6c7d8e9f012345", # api_key_id
    )
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling ApiKeyApi#api_key_delete: #{e}"
end
