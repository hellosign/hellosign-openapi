require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
    response = Dropbox::Sign::ApiAppApi.new.api_app_get(
        "0dd3b823a682527788c4e40cb7b6f7e9", # client_id
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling ApiAppApi#api_app_get: #{e}"
end
