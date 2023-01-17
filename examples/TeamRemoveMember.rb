require "hellosign-ruby-sdk"

HelloSign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

team_api = HelloSign::TeamApi.new

data = HelloSign::TeamRemoveMemberRequest.new
data.email_address = "teammate@dropboxsign.com"
data.new_owner_email_address = "new_teammate@dropboxsign.com"

begin
  result = team_api.team_remove_member(data)
  p result
rescue HelloSign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
