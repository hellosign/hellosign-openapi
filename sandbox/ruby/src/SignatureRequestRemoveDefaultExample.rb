require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

begin
    Dropbox::Sign::SignatureRequestApi.new.signature_request_remove(
        "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    )
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling SignatureRequest#signature_request_remove: #{e}"
end
