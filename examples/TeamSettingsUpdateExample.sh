curl -X POST 'https://api.hellosign.com/v3/team/settings' \
  -u 'YOUR_API_KEY:' \
  -H 'Content-Type: application/json' \
  -d '{
    "set": {
      "data_residency": "eu",
      "company": "Northwind"
    },
    "lock": {
      "company": "organization_admins"
    }
  }'
