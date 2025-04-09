require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
end

report_create_request = Dropbox::Sign::ReportCreateRequest.new
report_create_request.start_date = "09/01/2020"
report_create_request.end_date = "09/01/2020"
report_create_request.report_type = [
    "user_activity",
    "document_status",
]

begin
    response = Dropbox::Sign::ReportApi.new.report_create(
        report_create_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling ReportApi#report_create: #{e}"
end
