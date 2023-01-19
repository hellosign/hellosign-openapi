require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

account_api = Dropbox::Sign::AccountApi.new

data = Dropbox::Sign::AccountCreateRequest.new
data.email_address = "newuser@dropboxsign.com"

begin
  result = account_api.account_create(data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
