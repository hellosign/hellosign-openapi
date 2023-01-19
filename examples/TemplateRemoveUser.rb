require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

template_api = Dropbox::Sign::TemplateApi.new

data = Dropbox::Sign::TemplateRemoveUserRequest.new
data.email_address = "george@dropboxsign.com"

template_id = "21f920ec2b7f4b6bb64d3ed79f26303843046536"

begin
  result = template_api.template_remove_user(template_id, data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
