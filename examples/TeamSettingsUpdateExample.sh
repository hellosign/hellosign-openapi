curl -X POST 'https://api.hellosign.com/v3/team/settings' \
  -u 'YOUR_API_KEY:' \
  -H 'Content-Type: application/json' \
  -d '{
    "data_residency": "eu",
    "company": "Northwind",
    "company_lock": "organization_admins"
  }'
