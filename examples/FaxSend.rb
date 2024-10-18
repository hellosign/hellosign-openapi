require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"
end

fax_api = Dropbox::Sign::FaxApi.new

data = Dropbox::Sign::FaxSendRequest.new
data.files = [File.new("example_signature_request.pdf", "r")]
data.test_mode = true
data.recipient = "16690000001"
data.sender = "16690000000"
data.cover_page_to = "Jill Fax"
data.cover_page_message = "I'm sending you a fax!"
data.cover_page_from = "Faxer Faxerson"
data.title = "This is what the fax is about!"

begin
  result = fax_api.fax_send(data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
