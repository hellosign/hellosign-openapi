require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

begin
    response = Dropbox::Sign::ApiAppApi.new.api_app_list(
        {
            page: 1,
            page_size: 20,
        },
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling ApiApp#api_app_list: #{e}"
end
