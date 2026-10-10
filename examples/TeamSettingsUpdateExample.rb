require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

team_settings_update_request = Dropbox::Sign::TeamSettingsUpdateRequest.new
team_settings_update_request.data_residency = Dropbox::Sign::DataResidencySettingUpdate.new
team_settings_update_request.data_residency.value = Dropbox::Sign::DataResidency::EU
team_settings_update_request.company = Dropbox::Sign::StringSettingUpdate.new
team_settings_update_request.company.value = "Northwind"
team_settings_update_request.company.lock_mode = Dropbox::Sign::TeamSettingLock::ORGANIZATION_ADMINS

begin
    response = Dropbox::Sign::TeamApi.new.team_settings_update(
        team_settings_update_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling TeamApi#team_settings_update: #{e}"
end
