require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

begin
    response = Dropbox::Sign::BulkSendJobApi.new.bulk_send_job_get(
        "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174", # bulk_send_job_id
        {
            page: 1,
            page_size: 20,
        },
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling BulkSendJobApi#bulk_send_job_get: #{e}"
end
