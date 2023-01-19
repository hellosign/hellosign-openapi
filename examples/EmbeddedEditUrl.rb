require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

api = Dropbox::Sign::EmbeddedApi.new

data = Dropbox::Sign::EmbeddedEditUrlRequest.new
data.cc_roles = [""]
data.merge_fields = []

template_id = "5de8179668f2033afac48da1868d0093bf133266"

begin
  result = embedded_api.embedded_edit_url(template_id, data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
