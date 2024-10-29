require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"
end

fax_api = Dropbox::Sign::FaxApi.new

faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967"

begin
  file_bin = fax_api.fax_files(data)
  FileUtils.cp(file_bin.path, "path/to/file.pdf")
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
