require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

signers_1 = Dropbox::Sign::SubUnclaimedDraftSigner.new
signers_1.name = "Jack"
signers_1.email_address = "jack@example.com"
signers_1.order = 0

signers = [
    signers_1,
]

unclaimed_draft_create_request = Dropbox::Sign::UnclaimedDraftCreateRequest.new
unclaimed_draft_create_request.type = "request_signature"
unclaimed_draft_create_request.test_mode = true
unclaimed_draft_create_request.files = [
    File.new("./example_signature_request.pdf", "r"),
]
unclaimed_draft_create_request.signers = signers

begin
    response = Dropbox::Sign::UnclaimedDraftApi.new.unclaimed_draft_create(
        unclaimed_draft_create_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling UnclaimedDraftApi#unclaimed_draft_create: #{e}"
end
