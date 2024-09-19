require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"
end

fax_api = Dropbox::Sign::FaxApi.new

faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

begin
  result = fax_api.get_fax_files(data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
