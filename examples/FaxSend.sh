curl -X POST 'https://api.hellosign.com/v3/fax/send' \
  -u 'YOUR_API_KEY:' \
  -F 'files[0]=@mutual-NDA-example.pdf' \
  -F 'test_mode=1' \
  -F 'to=16690000001' \
  -F 'from=16690000000' \
  -F 'cover_page_to=Jill Fax' \
  -F 'cover_page_message=I sent you a fax!' \
  -F 'cover_page_from=Faxer Faxerson' \
  -F 'title=This is what the fax is about!'