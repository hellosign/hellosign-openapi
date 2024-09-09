require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"
end

fax_line_api = Dropbox::Sign::FaxLineApi.new

data = Dropbox::Sign::FaxLineRemoveUserRequest.new
data.number = "[FAX_NUMBER]"
data.email_address = "member@dropboxsign.com"

begin
  result = fax_line_api.fax_line_remove_user(data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
