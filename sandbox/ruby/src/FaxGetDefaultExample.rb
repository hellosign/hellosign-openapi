require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

begin
    response = Dropbox::Sign::FaxApi.new.fax_get(
        "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling Fax#fax_get: #{e}"
end
