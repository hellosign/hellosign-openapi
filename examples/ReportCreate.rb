require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

report_api = Dropbox::Sign::ReportApi.new

data = Dropbox::Sign::ReportCreateRequest.new
data.start_date = "09/01/2020"
data.end_date = "09/01/2020"
data.report_type = %w[user_activity document_status]

begin
  result = report_api.report_create(data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
