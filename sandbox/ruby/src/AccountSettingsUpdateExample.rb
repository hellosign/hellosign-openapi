require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

account_settings_update_request = Dropbox::Sign::AccountSettingsUpdateRequest.new
account_settings_update_request.date_format = Dropbox::Sign::DateFormat::MM_DD_YYYY
account_settings_update_request.required_signature_types = [
    Dropbox::Sign::RequiredSignatureType::DRAW,
    Dropbox::Sign::RequiredSignatureType::TYPE,
]
account_settings_update_request.should_enable_tamper_proof = false
account_settings_update_request.unset = ["company"]

begin
    response = Dropbox::Sign::AccountApi.new.account_settings_update(
        account_settings_update_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling AccountApi#account_settings_update: #{e}"
end
