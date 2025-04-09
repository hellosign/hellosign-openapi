require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

team_remove_member_request = Dropbox::Sign::TeamRemoveMemberRequest.new
team_remove_member_request.account_id = "f57db65d3f933b5316d398057a36176831451a35"

begin
    response = Dropbox::Sign::TeamApi.new.team_remove_member(
        team_remove_member_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling TeamApi#team_remove_member: #{e}"
end
