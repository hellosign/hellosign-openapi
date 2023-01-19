require "dropbox-sign"

Dropbox::Sign.configure do |config|
  # Configure HTTP basic authorization: api_key
  config.username = "YOUR_API_KEY"

  # or, configure Bearer (JWT) authorization: oauth2
  # config.access_token = "YOUR_ACCESS_TOKEN"
end

unclaimed_draft_api = Dropbox::Sign::UnclaimedDraftApi.new

data = Dropbox::Sign::UnclaimedDraftCreateEmbeddedRequest.new
data.client_id = "ec64a202072370a737edf4a0eb7f4437"
data.files = [File.new("example_signature_request.pdf", "r")]
data.requester_email_address = "jack@dropboxsign.com"
data.test_mode = true

begin
  result = unclaimed_draft_api.unclaimed_draft_create_embedded(data)
  p result
rescue Dropbox::Sign::ApiError => e
  puts "Exception when calling Dropbox Sign API: #{e}"
end
