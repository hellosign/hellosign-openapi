require "dropbox-sign"

Dropbox::Sign.configure do |config|
end

field_options = Dropbox::Sign::SubFieldOptions.new
field_options.date_format = "DD - MM - YYYY"

signing_options = Dropbox::Sign::SubSigningOptions.new
signing_options.default_type = "draw"
signing_options.draw = true
signing_options.phone = false
signing_options.type = true
signing_options.upload = true

signers_1 = Dropbox::Sign::SubSignatureRequestSigner.new
signers_1.name = "Jack"
signers_1.email_address = "jack@example.com"
signers_1.order = 0

signers_2 = Dropbox::Sign::SubSignatureRequestSigner.new
signers_2.name = "Jill"
signers_2.email_address = "jill@example.com"
signers_2.order = 1

signers = [
    signers_1,
    signers_2,
]

signature_request_edit_request = Dropbox::Sign::SignatureRequestEditRequest.new
signature_request_edit_request.message = "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions."
signature_request_edit_request.subject = "The NDA we talked about"
signature_request_edit_request.test_mode = true
signature_request_edit_request.title = "NDA with Acme Co."
signature_request_edit_request.file_urls = [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
]
signature_request_edit_request.cc_email_addresses = [
    "lawyer1@dropboxsign.com",
    "lawyer2@dropboxsign.com",
]
signature_request_edit_request.metadata = {
    "custom_id": 1234,
    "custom_text": "NDA #9",
}
signature_request_edit_request.field_options = field_options
signature_request_edit_request.signing_options = signing_options
signature_request_edit_request.signers = signers

begin
    response = Dropbox::Sign::SignatureRequestApi.new.signature_request_edit(
        "fa5c8a0b0f492d768749333ad6fcc214c111e967",
        signature_request_edit_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling SignatureRequest#signature_request_edit: #{e}"
end
