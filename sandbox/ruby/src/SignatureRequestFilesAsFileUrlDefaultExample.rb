require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

begin
    response = Dropbox::Sign::SignatureRequestApi.new.signature_request_files_as_file_url(
        "fa5c8a0b0f492d768749333ad6fcc214c111e967",
        {
            force_download: 1,
        },
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling SignatureRequest#signature_request_files_as_file_url: #{e}"
end
