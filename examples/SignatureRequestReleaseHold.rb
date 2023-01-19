require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

signature_request_api = Dropbox::Sign::SignatureRequestApi.new

signature_request_id = "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f"

begin
  result = signature_request_api.signature_request_release_hold(signature_request_id)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
