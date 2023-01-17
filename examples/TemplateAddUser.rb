require "hellosign-ruby-sdk"

HelloSign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

template_api = HelloSign::TemplateApi.new

data = HelloSign::TemplateAddUserRequest.new
data.email_address = "george@dropboxsign.com"

template_id = "f57db65d3f933b5316d398057a36176831451a35"

begin
  result = template_api.template_add_user(template_id, data)
  p result
rescue HelloSign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
