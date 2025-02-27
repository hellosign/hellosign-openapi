require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
end

begin
    Dropbox::Sign::SignatureRequestApi.new.signature_request_remove(
        "fa5c8a0b0f492d768749333ad6fcc214c111e967", # signature_request_id
    )
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling SignatureRequestApi#signature_request_remove: #{e}"
end
