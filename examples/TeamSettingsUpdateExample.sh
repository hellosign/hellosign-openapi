curl -X POST 'https://api.hellosign.com/v3/team/settings' \
  -u 'YOUR_API_KEY:' \
  -H 'Content-Type: application/json' \
  -d '{
    "data_residency": {
      "value": "eu"
    },
    "company": {
      "value": "Northwind",
      "lock_mode": "organization_admins"
    }
  }'
