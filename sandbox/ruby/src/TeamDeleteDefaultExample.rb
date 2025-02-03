require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

begin
    Dropbox::Sign::TeamApi.new.team_delete
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling Team#team_delete: #{e}"
end
