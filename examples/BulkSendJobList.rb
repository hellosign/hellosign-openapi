require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

bulk_send_job_api = Dropbox::Sign::BulkSendJobApi.new

page = 1
page_size = 20

begin
  result = bulk_send_job_api.bulk_send_job_list({page: page, page_size: page_size})
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
