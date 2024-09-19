require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"
end

fax_api = Dropbox::Sign::FaxApi.new

begin
  fax_api.delete_fax("[FAX_NUMBER]")
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
