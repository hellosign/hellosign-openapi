curl -X POST 'https://api.hellosign.com/v3/report/create' \
  -u 'YOUR_API_KEY:' \
  -F 'start_date=09/01/2020' \
  -F 'end_date=09/01/2020' \
  -F 'report_type[]=user_activity' \
  -F 'report_type[]=document_status'
