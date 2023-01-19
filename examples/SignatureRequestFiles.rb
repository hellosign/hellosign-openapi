require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

signature_request_api = Dropbox::Sign::SignatureRequestApi.new

signature_request_id = "fa5c8a0b0f492d768749333ad6fcc214c111e967"

begin
  file_bin = signature_request_api.signature_request_files(signature_request_id)
  FileUtils.cp(file_bin.path, "path/to/file.pdf")
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
