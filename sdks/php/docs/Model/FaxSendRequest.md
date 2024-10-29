# # FaxSendRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `recipient`<sup>*_required_</sup> | ```string``` |  Fax Send To Recipient  |  |
| `sender` | ```string``` |  Fax Send From Sender (used only with fax number)  |  |
| `files` | ```\SplFileObject[]``` |  Fax File to Send  |  |
| `file_urls` | ```string[]``` |  Fax File URL to Send  |  |
| `test_mode` | ```bool``` |  API Test Mode Setting  |  [default to false] |
| `cover_page_to` | ```string``` |  Fax Cover Page for Recipient  |  |
| `cover_page_from` | ```string``` |  Fax Cover Page for Sender  |  |
| `cover_page_message` | ```string``` |  Fax Cover Page Message  |  |
| `title` | ```string``` |  Fax Title  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
