require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

begin
    response = Dropbox::Sign::SignatureRequestApi.new.signature_request_list(
        {
            account_id: nil,
            page: 1,
            page_size: 20,
            query: nil,
        },
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling SignatureRequest#signature_request_list: #{e}"
end
