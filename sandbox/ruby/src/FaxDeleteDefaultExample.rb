require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

begin
    Dropbox::Sign::FaxApi.new.fax_delete(
        "fa5c8a0b0f492d768749333ad6fcc214c111e967",
    )
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling Fax#fax_delete: #{e}"
end
