# Dropbox::Sign::FaxSendRequest



## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `recipient`<sup>*_required_</sup> | ```String``` |  Fax Send To Recipient  |  |
| `sender` | ```String``` |  Fax Send From Sender (used only with fax number)  |  |
| `files` | ```Array<File>``` |  Fax File to Send  |  |
| `file_urls` | ```Array<String>``` |  Fax File URL to Send  |  |
| `test_mode` | ```Boolean``` |  API Test Mode Setting  |  [default to false] |
| `cover_page_to` | ```String``` |  Fax Cover Page for Recipient  |  |
| `cover_page_from` | ```String``` |  Fax Cover Page for Sender  |  |
| `cover_page_message` | ```String``` |  Fax Cover Page Message  |  |
| `title` | ```String``` |  Fax Title  |  |

