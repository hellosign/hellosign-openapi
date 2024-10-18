# # FaxSendRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `recipient`<sup>*_required_</sup> | ```string``` |  Fax Send To Recipient  |  |
| `sender` | ```string``` |  Fax Send From Sender (used only with fax number)  |  |
| `files` | ```Array<RequestFile>``` |  Fax File to Send  |  |
| `fileUrls` | ```Array<string>``` |  Fax File URL to Send  |  |
| `testMode` | ```boolean``` |  API Test Mode Setting  |  [default to false] |
| `coverPageTo` | ```string``` |  Fax Cover Page for Recipient  |  |
| `coverPageFrom` | ```string``` |  Fax Cover Page for Sender  |  |
| `coverPageMessage` | ```string``` |  Fax Cover Page Message  |  |
| `title` | ```string``` |  Fax Title  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
