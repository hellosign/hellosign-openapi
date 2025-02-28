require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

team_update_request = Dropbox::Sign::TeamUpdateRequest.new
team_update_request.name = "New Team Name"

begin
    response = Dropbox::Sign::TeamApi.new.team_update(
        team_update_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling TeamApi#team_update: #{e}"
end
