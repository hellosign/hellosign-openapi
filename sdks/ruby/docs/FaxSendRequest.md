# Dropbox::Sign::FaxSendRequest



## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `recipient`<sup>*_required_</sup> | ```String``` |  Recipient of the fax  Can be a phone number in E.164 format or email address  |  |
| `sender` | ```String``` |  Fax Send From Sender (used only with fax number)  |  |
| `files` | ```Array<File>``` |  Use `files[]` to indicate the uploaded file(s) to fax<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  |  |
| `file_urls` | ```Array<String>``` |  Use `file_urls[]` to have Dropbox Fax download the file(s) to fax<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  |  |
| `test_mode` | ```Boolean``` |  API Test Mode Setting  |  [default to false] |
| `cover_page_to` | ```String``` |  Fax cover page recipient information  |  |
| `cover_page_from` | ```String``` |  Fax cover page sender information  |  |
| `cover_page_message` | ```String``` |  Fax Cover Page Message  |  |
| `title` | ```String``` |  Fax Title  |  |

