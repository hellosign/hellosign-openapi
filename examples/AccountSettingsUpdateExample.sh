curl -X POST 'https://api.hellosign.com/v3/account/settings' \
  -u 'YOUR_API_KEY:' \
  -H 'Content-Type: application/json' \
  -d '{
    "date_format": "MM/DD/YYYY",
    "required_signature_types": ["draw", "type"],
    "should_enable_tamper_proof": false,
    "unset": ["company"]
  }'
