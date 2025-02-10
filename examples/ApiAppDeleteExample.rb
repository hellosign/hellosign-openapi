require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

api_app_api = Dropbox::Sign::ApiAppApi.new

client_id = "0dd3b823a682527788c4e40cb7b6f7e9"

begin
  result = api_app_api.api_app_delete(client_id)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
