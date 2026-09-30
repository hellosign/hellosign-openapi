curl -X POST 'https://api.hellosign.com/v3/fax/draft/create' \
  -u 'YOUR_API_KEY:' \
  -F 'client_id=YOUR_CLIENT_ID' \
  -F 'file_urls[0]=https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1' \
  -F 'recipients[0]=+14155552671' \
  -F 'editor_options[force_editor_page]=1' \
  -F 'editor_options[force_review_page]=1' \
  -F 'test_mode=1'
