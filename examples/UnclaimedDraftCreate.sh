curl -X POST 'https://api.hellosign.com/v3/unclaimed_draft/create' \
  -u 'YOUR_API_KEY:' \
  -F 'type=request_signature' \
  -F 'file[0]=@mutual-NDA-example.pdf' \
  -F 'signers[0][email_address]=jack@example.com' \
  -F 'signers[0][name]=Jack' \
  -F 'signers[0][order]=0' \
  -F 'test_mode=1'
