require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
    Dropbox::Sign::TeamApi.new.team_delete
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling TeamApi#team_delete: #{e}"
end
