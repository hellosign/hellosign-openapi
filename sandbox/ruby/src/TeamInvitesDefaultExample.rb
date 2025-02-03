require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

begin
    response = Dropbox::Sign::TeamApi.new.team_invites(
        {
            email_address: nil,
        },
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling Team#team_invites: #{e}"
end
