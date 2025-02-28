require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
end

begin
    Dropbox::Sign::FaxApi.new.fax_delete(
        "fa5c8a0b0f492d768749333ad6fcc214c111e967", # fax_id
    )
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling FaxApi#fax_delete: #{e}"
end
