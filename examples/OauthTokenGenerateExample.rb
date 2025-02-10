require "dropbox-sign"

oauth_api = Dropbox::Sign::OAuthApi.new

data = Dropbox::Sign::OAuthTokenGenerateRequest.new
data.state = "900e06e2"
data.code = "1b0d28d90c86c141"
data.client_id = "cc91c61d00f8bb2ece1428035716b"
data.client_secret = "1d14434088507ffa390e6f5528465"

begin
  result = oauth_api.oauth_token_generate(data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
