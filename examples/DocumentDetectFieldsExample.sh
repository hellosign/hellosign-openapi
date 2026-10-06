curl -X POST 'https://api.hellosign.com/v3/document/detect_fields' \
  -u 'YOUR_API_KEY:' \
  -F 'file=@example_document.pdf' \
  -F 'detection_mode=annotations' \
  -F 'page_range=all'
