require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
end

begin
    response = Dropbox::Sign::FaxLineApi.new.fax_line_list(
        {
            account_id: "ab55cd14a97219e36b5ff5fe23f2f9329b0c1e97",
            page: 1,
            page_size: 20,
            show_team_lines: nil,
        },
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling FaxLineApi#fax_line_list: #{e}"
end
