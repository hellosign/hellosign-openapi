require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

team_settings_update_request = Dropbox::Sign::TeamSettingsUpdateRequest.new
team_settings_update_request.data_residency = Dropbox::Sign::DataResidency::EU
team_settings_update_request.company = "Northwind"
team_settings_update_request.company_lock = Dropbox::Sign::TeamSettingLock::ORGANIZATION_ADMINS

begin
    response = Dropbox::Sign::TeamApi.new.team_settings_update(
        team_settings_update_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling TeamApi#team_settings_update: #{e}"
end
