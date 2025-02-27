require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

team_create_request = Dropbox::Sign::TeamCreateRequest.new
team_create_request.name = "New Team Name"

begin
    response = Dropbox::Sign::TeamApi.new.team_create(
        team_create_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling TeamApi#team_create: #{e}"
end
