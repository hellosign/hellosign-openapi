curl -X PUT 'https://api.hellosign.com/v3/api_app/{client_id}' \
  -u 'YOUR_API_KEY:' \
  -F 'name=New Name' \
  -F 'callback_url=http://example.com/hellosign' \
  -F 'white_labeling_options[primary_button_color]=#00b3e6' \
  -F 'white_labeling_options[primary_button_text_color]=#ffffff'
