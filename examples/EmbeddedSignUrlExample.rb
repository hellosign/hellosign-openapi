require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
    response = Dropbox::Sign::EmbeddedApi.new.embedded_sign_url(
        "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b", # signature_id
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling EmbeddedApi#embedded_sign_url: #{e}"
end
