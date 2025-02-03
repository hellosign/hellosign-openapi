# # FaxSendRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `recipient`<sup>*_required_</sup> | ```string``` |  Recipient of the fax  Can be a phone number in E.164 format or email address  |  |
| `sender` | ```string``` |  Fax Send From Sender (used only with fax number)  |  |
| `files` | ```Array<RequestFile>``` |  Use `files[]` to indicate the uploaded file(s) to fax<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  |  |
| `fileUrls` | ```Array<string>``` |  Use `file_urls[]` to have Dropbox Fax download the file(s) to fax<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  |  |
| `testMode` | ```boolean``` |  API Test Mode Setting  |  [default to false] |
| `coverPageTo` | ```string``` |  Fax cover page recipient information  |  |
| `coverPageFrom` | ```string``` |  Fax cover page sender information  |  |
| `coverPageMessage` | ```string``` |  Fax Cover Page Message  |  |
| `title` | ```string``` |  Fax Title  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
