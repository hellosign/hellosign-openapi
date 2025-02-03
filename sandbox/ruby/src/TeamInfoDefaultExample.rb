require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

begin
    response = Dropbox::Sign::TeamApi.new.team_info(
        {
            team_id: "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c",
        },
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling Team#team_info: #{e}"
end
