require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

begin
    response = Dropbox::Sign::TeamApi.new.team_invites

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling Team#team_invites: #{e}"
end
