require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
end

begin
    response = Dropbox::Sign::FaxApi.new.fax_list(
        {
            page: 1,
            page_size: 20,
        },
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling FaxApi#fax_list: #{e}"
end
