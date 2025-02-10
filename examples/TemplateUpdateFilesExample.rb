require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

template_api = Dropbox::Sign::TemplateApi.new

data = Dropbox::Sign::TemplateUpdateFilesRequest.new
data.files = [File.new("example_signature_request.pdf", "r")]

template_id = "5de8179668f2033afac48da1868d0093bf133266"

begin
  result = template_api.template_update_files(template_id, data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
