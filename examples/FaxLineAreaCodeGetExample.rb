require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
end

begin
    response = Dropbox::Sign::FaxLineApi.new.fax_line_area_code_get(
        "US", # country
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling FaxLineApi#fax_line_area_code_get: #{e}"
end
