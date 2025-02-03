require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

begin
    Dropbox::Sign::ApiAppApi.new.api_app_delete(
        "0dd3b823a682527788c4e40cb7b6f7e9",
    )
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling ApiApp#api_app_delete: #{e}"
end
