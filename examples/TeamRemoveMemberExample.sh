curl -X POST 'https://api.hellosign.com/v3/team/remove_member' \
  -u 'YOUR_API_KEY:' \
  -F 'email_address=teammate@dropboxsign.com' \
  -F 'new_owner_email_address=new_teammate@dropboxsign.com'
