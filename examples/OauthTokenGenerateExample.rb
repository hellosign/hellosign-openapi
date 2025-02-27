require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

o_auth_token_generate_request = Dropbox::Sign::OAuthTokenGenerateRequest.new
o_auth_token_generate_request.client_id = "cc91c61d00f8bb2ece1428035716b"
o_auth_token_generate_request.client_secret = "1d14434088507ffa390e6f5528465"
o_auth_token_generate_request.code = "1b0d28d90c86c141"
o_auth_token_generate_request.state = "900e06e2"
o_auth_token_generate_request.grant_type = "authorization_code"

begin
    response = Dropbox::Sign::OAuthApi.new.oauth_token_generate(
        o_auth_token_generate_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling OAuthApi#oauth_token_generate: #{e}"
end
