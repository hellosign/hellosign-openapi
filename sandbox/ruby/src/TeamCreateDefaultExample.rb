require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

team_create_request = Dropbox::Sign::TeamCreateRequest.new
team_create_request.name = "New Team Name"

begin
    response = Dropbox::Sign::TeamApi.new.team_create(
        team_create_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling Team#team_create: #{e}"
end
