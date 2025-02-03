require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

begin
    response = Dropbox::Sign::ApiAppApi.new.api_app_get(
        "0dd3b823a682527788c4e40cb7b6f7e9",
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling ApiApp#api_app_get: #{e}"
end
