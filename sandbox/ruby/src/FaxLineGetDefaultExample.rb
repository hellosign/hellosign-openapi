require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

begin
    response = Dropbox::Sign::FaxLineApi.new.fax_line_get(
        "[FAX_NUMBER]",
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling FaxLine#fax_line_get: #{e}"
end
