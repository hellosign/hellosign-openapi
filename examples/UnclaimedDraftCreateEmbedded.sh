curl -X POST 'https://api.hellosign.com/v3/unclaimed_draft/create_embedded' \
  -u 'YOUR_API_KEY:' \
  -F 'client_id=YOUR_CLIENT_ID' \
  -F 'files[0]=@mutual-NDA-example.pdf' \
  -F 'requester_email_address=jack@dropboxsign.com' \
  -F 'test_mode=1'
