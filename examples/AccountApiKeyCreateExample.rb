require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
end

begin
    request = Dropbox::Sign::AccountApiKeyCreateRequest.new
    request.name = "Production"

    response = Dropbox::Sign::ApiKeyApi.new.api_key_create(request)

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling ApiKeyApi#api_key_create: #{e}"
end
