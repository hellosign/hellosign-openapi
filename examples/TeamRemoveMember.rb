require "hello_sign"

HelloSign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

api = HelloSign::TeamApi.new

data = HelloSign::TeamRemoveMemberRequest.new
data.email_address = "teammate@hellosign.com"
data.new_owner_email_address = "new_teammate@hellosign.com"

begin
  result = api.team_remove_member(data)
  p result
rescue HelloSign::ApiError => e
  puts "Exception when calling HelloSign API: #{e}"
end
