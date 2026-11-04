require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
end

begin
    request = Dropbox::Sign::AccountApiKeyUpdateRequest.new
    request.name = "Billing"
    request.is_primary = true

    response = Dropbox::Sign::ApiKeyApi.new.api_key_update(
        "c3d4e5f6a7b8490c1d2e3f4a5b6c7d8e", # api_key_id
        request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling ApiKeyApi#api_key_update: #{e}"
end
