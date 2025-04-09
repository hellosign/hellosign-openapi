require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
    response = Dropbox::Sign::TeamApi.new.team_invites

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling TeamApi#team_invites: #{e}"
end
