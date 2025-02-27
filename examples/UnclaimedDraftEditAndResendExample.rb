require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

unclaimed_draft_edit_and_resend_request = Dropbox::Sign::UnclaimedDraftEditAndResendRequest.new
unclaimed_draft_edit_and_resend_request.client_id = "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a"
unclaimed_draft_edit_and_resend_request.test_mode = false

begin
    response = Dropbox::Sign::UnclaimedDraftApi.new.unclaimed_draft_edit_and_resend(
        "fa5c8a0b0f492d768749333ad6fcc214c111e967", # signature_request_id
        unclaimed_draft_edit_and_resend_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling UnclaimedDraftApi#unclaimed_draft_edit_and_resend: #{e}"
end
