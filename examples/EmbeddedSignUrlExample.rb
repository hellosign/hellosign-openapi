require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

api = Dropbox::Sign::EmbeddedApi.new

signature_id = "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b"

begin
  result = embedded_api.embedded_sign_url(signature_id)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
