require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

signature_request_remind_request = Dropbox::Sign::SignatureRequestRemindRequest.new
signature_request_remind_request.email_address = "john@example.com"

begin
    response = Dropbox::Sign::SignatureRequestApi.new.signature_request_remind(
        "fa5c8a0b0f492d768749333ad6fcc214c111e967",
        signature_request_remind_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling SignatureRequest#signature_request_remind: #{e}"
end
