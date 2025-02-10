require "dropbox-sign"

oauth_api = Dropbox::Sign::OAuthApi.new

data = Dropbox::Sign::OAuthTokenRefreshRequest.new
data.refresh_token = "hNTI2MTFmM2VmZDQxZTZjOWRmZmFjZmVmMGMyNGFjMzI2MGI5YzgzNmE3"

begin
  result = oauth_api.oauth_token_refresh(data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
