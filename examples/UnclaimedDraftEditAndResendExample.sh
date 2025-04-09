curl -X POST 'https://api.hellosign.com/v3/unclaimed_draft/edit_and_resend/{signature_request_id}' \
  -u 'YOUR_API_KEY:' \
  -F 'client_id=YOUR_CLIENT_ID' \
  -F 'test_mode=1'
