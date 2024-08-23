require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"
end

fax_line_api = Dropbox::Sign::FaxLineApi.new

data = Dropbox::Sign::FaxLineDeleteRequest.new
data.number = "[FAX_NUMBER]"

begin
  fax_line_api.fax_line_delete(data)
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
