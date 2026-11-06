curl -X GET 'https://api.hellosign.com/v3/account/settings' \
  -u 'YOUR_API_KEY:'

# {
#   "account_id": "ab55cd14a97219e36b5ff5fe23f2f9329b0c1e97",
#   "settings": {
#     "company": {
#       "value": "Northwind",
#       "is_inherited": false,
#       "source": "account",
#       "type": "string",
#       "writable": true,
#       "lock": {
#         "mode": "members",
#         "source": "default"
#       }
#     }
#   },
#   "warnings": []
# }
