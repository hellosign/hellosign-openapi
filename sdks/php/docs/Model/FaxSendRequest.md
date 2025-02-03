# # FaxSendRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `recipient`<sup>*_required_</sup> | ```string``` |  Recipient of the fax  Can be a phone number in E.164 format or email address  |  |
| `sender` | ```string``` |  Fax Send From Sender (used only with fax number)  |  |
| `files` | ```\SplFileObject[]``` |  Use `files[]` to indicate the uploaded file(s) to fax<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  |  |
| `file_urls` | ```string[]``` |  Use `file_urls[]` to have Dropbox Fax download the file(s) to fax<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  |  |
| `test_mode` | ```bool``` |  API Test Mode Setting  |  [default to false] |
| `cover_page_to` | ```string``` |  Fax cover page recipient information  |  |
| `cover_page_from` | ```string``` |  Fax cover page sender information  |  |
| `cover_page_message` | ```string``` |  Fax Cover Page Message  |  |
| `title` | ```string``` |  Fax Title  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
