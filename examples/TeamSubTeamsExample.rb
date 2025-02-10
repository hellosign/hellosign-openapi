require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY";
    # config.access_token = "YOUR_ACCESS_TOKEN";
end

begin
    response = Dropbox::Sign::TeamApi.new.team_sub_teams(
        "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c",
        {
            page: 1,
            page_size: 20,
        },
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling Team#team_sub_teams: #{e}"
end
