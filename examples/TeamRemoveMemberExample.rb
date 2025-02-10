require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

team_api = Dropbox::Sign::TeamApi.new

data = Dropbox::Sign::TeamRemoveMemberRequest.new
data.email_address = "teammate@dropboxsign.com"
data.new_owner_email_address = "new_teammate@dropboxsign.com"

begin
  result = team_api.team_remove_member(data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
