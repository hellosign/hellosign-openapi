require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

begin
    response = Dropbox::Sign::FaxLineApi.new.fax_line_area_code_get(
        "US",
        {
            state: nil,
            province: nil,
            city: nil,
        },
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling FaxLine#fax_line_area_code_get: #{e}"
end
