require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
    response = Dropbox::Sign::TeamApi.new.team_settings_get
    company = response.settings.company
    data_residency = response.settings.data_residency

    p response
    p({
        team_id: response.team_id,
        company: {
            value: company.value,
            is_inherited: company.is_inherited,
            source: company.source,
            type: company.type,
            writable: company.writable,
            lock: {
                mode: company.lock.mode,
                source: company.lock.source,
            },
        },
        data_residency: {
            value: data_residency.value,
            is_inherited: data_residency.is_inherited,
            source: data_residency.source,
            type: data_residency.type,
            writable: data_residency.writable,
            lock: {
                mode: data_residency.lock.mode,
                source: data_residency.lock.source,
            },
        },
        warnings: response.warnings,
    })
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling TeamApi#team_settings_get: #{e}"
end
