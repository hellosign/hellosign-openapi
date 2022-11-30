curl -X POST 'https://app.hellosign.com/oauth/token' \
  -u 'YOUR_API_KEY:' \
  -F 'client_id=YOUR_CLIENT_ID' \
  -F 'state=900e06e2' \
  -F 'code=1b0d28d90c86c141' \
  -F 'grant_type=authorization_code' \
  -F 'client_secret=1d14434088507ffa390e6f5528465'
