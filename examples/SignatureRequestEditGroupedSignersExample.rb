require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

grouped_signers_2_signers_1 = Dropbox::Sign::SubSignatureRequestSigner.new
grouped_signers_2_signers_1.name = "Bob"
grouped_signers_2_signers_1.email_address = "bob@example.com"

grouped_signers_2_signers_2 = Dropbox::Sign::SubSignatureRequestSigner.new
grouped_signers_2_signers_2.name = "Charlie"
grouped_signers_2_signers_2.email_address = "charlie@example.com"

grouped_signers_2_signers = [
    grouped_signers_2_signers_1,
    grouped_signers_2_signers_2,
]

grouped_signers_1_signers_1 = Dropbox::Sign::SubSignatureRequestSigner.new
grouped_signers_1_signers_1.name = "Jack"
grouped_signers_1_signers_1.email_address = "jack@example.com"

grouped_signers_1_signers_2 = Dropbox::Sign::SubSignatureRequestSigner.new
grouped_signers_1_signers_2.name = "Jill"
grouped_signers_1_signers_2.email_address = "jill@example.com"

grouped_signers_1_signers = [
    grouped_signers_1_signers_1,
    grouped_signers_1_signers_2,
]

field_options = Dropbox::Sign::SubFieldOptions.new
field_options.date_format = "DD - MM - YYYY"

signing_options = Dropbox::Sign::SubSigningOptions.new
signing_options.default_type = "draw"
signing_options.draw = true
signing_options.phone = false
signing_options.type = true
signing_options.upload = true

grouped_signers_1 = Dropbox::Sign::SubSignatureRequestGroupedSigners.new
grouped_signers_1.group = "Group #1"
grouped_signers_1.order = 0
grouped_signers_1.signers = grouped_signers_1_signers

grouped_signers_2 = Dropbox::Sign::SubSignatureRequestGroupedSigners.new
grouped_signers_2.group = "Group #2"
grouped_signers_2.order = 1
grouped_signers_2.signers = grouped_signers_2_signers

grouped_signers = [
    grouped_signers_1,
    grouped_signers_2,
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
signature_request_edit_request.metadata = JSON.parse(<<-EOD
    {
        "custom_id": 1234,
        "custom_text": "NDA #9"
    }
    EOD
)
signature_request_edit_request.field_options = field_options
signature_request_edit_request.signing_options = signing_options
signature_request_edit_request.grouped_signers = grouped_signers

begin
    response = Dropbox::Sign::SignatureRequestApi.new.signature_request_edit(
        "fa5c8a0b0f492d768749333ad6fcc214c111e967", # signature_request_id
        signature_request_edit_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling SignatureRequestApi#signature_request_edit: #{e}"
end
