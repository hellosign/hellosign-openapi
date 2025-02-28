require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

team_add_member_request = Dropbox::Sign::TeamAddMemberRequest.new
team_add_member_request.email_address = "george@example.com"

begin
    response = Dropbox::Sign::TeamApi.new.team_add_member(
        team_add_member_request,
        {
            team_id: "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c",
        },
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling TeamApi#team_add_member: #{e}"
end
