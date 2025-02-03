require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

begin
    response = Dropbox::Sign::BulkSendJobApi.new.bulk_send_job_list(
        {
            page: 1,
            page_size: 20,
        },
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling BulkSendJob#bulk_send_job_list: #{e}"
end
