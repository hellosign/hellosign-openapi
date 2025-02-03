require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

begin
    response = Dropbox::Sign::BulkSendJobApi.new.bulk_send_job_get(
        "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174",
        {
            page: 1,
            page_size: 20,
        },
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling BulkSendJob#bulk_send_job_get: #{e}"
end
