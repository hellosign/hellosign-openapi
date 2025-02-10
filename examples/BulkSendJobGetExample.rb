require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

bulk_send_job_api = Dropbox::Sign::BulkSendJobApi.new

bulk_send_job_id = "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174"

begin
  result = bulk_send_job_api.bulk_send_job_get(bulk_send_job_id)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
