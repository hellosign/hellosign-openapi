require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

begin
    response = Dropbox::Sign::EmbeddedApi.new.embedded_sign_url(
        "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b",
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling Embedded#embedded_sign_url: #{e}"
end
