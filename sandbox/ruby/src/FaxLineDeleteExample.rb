require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
end

fax_line_delete_request = Dropbox::Sign::FaxLineDeleteRequest.new
fax_line_delete_request.number = "[FAX_NUMBER]"

begin
    Dropbox::Sign::FaxLineApi.new.fax_line_delete(
        fax_line_delete_request,
    )
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling FaxLineApi#fax_line_delete: #{e}"
end
