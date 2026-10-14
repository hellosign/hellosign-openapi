curl -X GET 'https://api.hellosign.com/v3/team/settings' \
  -u 'YOUR_API_KEY:'

# {
#   "team_id": "ab55cd14a97219e36b5ff5fe23f2f9329b0c1e97",
#   "settings": {
#     "company": {
#       "value": "Northwind",
#       "is_inherited": false,
#       "source": "team",
#       "type": "string",
#       "writable": true,
#       "lock": {
#         "mode": "organization_admins",
#         "source": "team"
#       }
#     },
#     "data_residency": {
#       "value": "eu",
#       "is_inherited": false,
#       "source": "team",
#       "type": "string",
#       "writable": true,
#       "lock": {
#         "mode": "team_admins",
#         "source": "team"
#       }
#     }
#   },
#   "warnings": []
# }
