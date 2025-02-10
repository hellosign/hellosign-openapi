require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY";
    # config.access_token = "YOUR_ACCESS_TOKEN";
end

unclaimed_draft_create_embedded_request = Dropbox::Sign::UnclaimedDraftCreateEmbeddedRequest.new
unclaimed_draft_create_embedded_request.client_id = "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a"
unclaimed_draft_create_embedded_request.requester_email_address = "jack@dropboxsign.com"
unclaimed_draft_create_embedded_request.test_mode = true
unclaimed_draft_create_embedded_request.file_urls = [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
]

begin
    response = Dropbox::Sign::UnclaimedDraftApi.new.unclaimed_draft_create_embedded(
        unclaimed_draft_create_embedded_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling UnclaimedDraft#unclaimed_draft_create_embedded: #{e}"
end
