require "json"
require "dropbox-sign"

Dropbox::Sign.configure do |config|
    config.username = "YOUR_API_KEY"
    # config.access_token = "YOUR_ACCESS_TOKEN"
end

ccs_1 = Dropbox::Sign::SubCC.new
ccs_1.role = "Accounting"
ccs_1.email_address = "accounting@dropboxsign.com"

ccs = [
    ccs_1,
]

signers_1 = Dropbox::Sign::SubUnclaimedDraftTemplateSigner.new
signers_1.role = "Client"
signers_1.name = "George"
signers_1.email_address = "george@example.com"

signers = [
    signers_1,
]

unclaimed_draft_create_embedded_with_template_request = Dropbox::Sign::UnclaimedDraftCreateEmbeddedWithTemplateRequest.new
unclaimed_draft_create_embedded_with_template_request.client_id = "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a"
unclaimed_draft_create_embedded_with_template_request.requester_email_address = "jack@dropboxsign.com"
unclaimed_draft_create_embedded_with_template_request.template_ids = [
    "61a832ff0d8423f91d503e76bfbcc750f7417c78",
]
unclaimed_draft_create_embedded_with_template_request.test_mode = false
unclaimed_draft_create_embedded_with_template_request.ccs = ccs
unclaimed_draft_create_embedded_with_template_request.signers = signers

begin
    response = Dropbox::Sign::UnclaimedDraftApi.new.unclaimed_draft_create_embedded_with_template(
        unclaimed_draft_create_embedded_with_template_request,
    )

    p response
rescue Dropbox::Sign::ApiError => e
    puts "Exception when calling UnclaimedDraftApi#unclaimed_draft_create_embedded_with_template: #{e}"
end
