require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

o_auth_token_refresh_request = Dropbox::Sign::OAuthTokenRefreshRequest.new
o_auth_token_refresh_request.grant_type = "refresh_token"
o_auth_token_refresh_request.refresh_token = "hNTI2MTFmM2VmZDQxZTZjOWRmZmFjZmVmMGMyNGFjMzI2MGI5YzgzNmE3"

begin
    response = Dropbox::Sign::OAuthApi.new.oauth_token_refresh(
        o_auth_token_refresh_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling OAuthApi#oauth_token_refresh: #{e}"
end
