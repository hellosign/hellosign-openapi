curl -X POST 'https://api.hellosign.com/v3/template/edit/{template_id}' \
  -u 'YOUR_API_KEY:' \
  -F 'cc_roles[]=Role 1' \
  -F 'cc_roles[]=Role 2'
