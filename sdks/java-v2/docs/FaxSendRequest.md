

# FaxSendRequest



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `recipient`<sup>*_required_</sup> | ```String``` |  Recipient of the fax  Can be a phone number in E.164 format or email address  |  |
| `sender` | ```String``` |  Fax Send From Sender (used only with fax number)  |  |
| `files` | ```List<File>``` |  Use `files[]` to indicate the uploaded file(s) to fax<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  |  |
| `fileUrls` | ```List<String>``` |  Use `file_urls[]` to have Dropbox Fax download the file(s) to fax<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  |  |
| `testMode` | ```Boolean``` |  API Test Mode Setting  |  |
| `coverPageTo` | ```String``` |  Fax cover page recipient information  |  |
| `coverPageFrom` | ```String``` |  Fax cover page sender information  |  |
| `coverPageMessage` | ```String``` |  Fax Cover Page Message  |  |
| `title` | ```String``` |  Fax Title  |  |



