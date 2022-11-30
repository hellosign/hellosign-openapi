curl -X POST 'https://api.hellosign.com/v3/api_app' \
  -u 'YOUR_API_KEY:' \
  -F 'name=My Production App' \
  -F 'domains[]=example.com' \
  -F 'oauth[callback_url]=https://example.com/oauth' \
  -F 'oauth[scopes][]=basic_account_info' \
  -F 'oauth[scopes][]=request_signature' \
  -F 'white_labeling_options[primary_button_color]=#00b3e6' \
  -F 'white_labeling_options[primary_button_text_color]=#ffffff'
