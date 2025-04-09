require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
end

fax_line_create_request = Dropbox::Sign::FaxLineCreateRequest.new
fax_line_create_request.area_code = 209
fax_line_create_request.country = "US"

begin
    response = Dropbox::Sign::FaxLineApi.new.fax_line_create(
        fax_line_create_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling FaxLineApi#fax_line_create: #{e}"
end
