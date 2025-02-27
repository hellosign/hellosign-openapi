require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
end

fax_send_request = Dropbox::Sign::FaxSendRequest.new
fax_send_request.recipient = "16690000001"
fax_send_request.sender = "16690000000"
fax_send_request.test_mode = true
fax_send_request.cover_page_to = "Jill Fax"
fax_send_request.cover_page_from = "Faxer Faxerson"
fax_send_request.cover_page_message = "I'm sending you a fax!"
fax_send_request.title = "This is what the fax is about!"
fax_send_request.files = [
    File.new("./example_fax.pdf", "r"),
]

begin
    response = Dropbox::Sign::FaxApi.new.fax_send(
        fax_send_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling FaxApi#fax_send: #{e}"
end
