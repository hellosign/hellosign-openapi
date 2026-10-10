require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
    response = Dropbox::Sign::AccountApi.new.account_settings_get
    company = response.settings.company

    p response
    p({
        account_id: response.account_id,
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
        warnings: response.warnings,
    })
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling AccountApi#account_settings_get: #{e}"
end
