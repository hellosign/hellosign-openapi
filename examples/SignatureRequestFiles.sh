curl -X GET 'https://api.hellosign.com/v3/signature_request/files/{signature_request_id}?file_type=pdf' \
  -u 'YOUR_API_KEY:' \
  --output downloaded_document.pdf
