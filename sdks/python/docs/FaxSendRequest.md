# FaxSendRequest



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `recipient`<sup>*_required_</sup> | ```str``` |  Fax Send To Recipient  |  |
| `sender` | ```str``` |  Fax Send From Sender (used only with fax number)  |  |
| `files` | ```List[io.IOBase]``` |  Fax File to Send  |  |
| `file_urls` | ```List[str]``` |  Fax File URL to Send  |  |
| `test_mode` | ```bool``` |  API Test Mode Setting  |  [default to False] |
| `cover_page_to` | ```str``` |  Fax Cover Page for Recipient  |  |
| `cover_page_from` | ```str``` |  Fax Cover Page for Sender  |  |
| `cover_page_message` | ```str``` |  Fax Cover Page Message  |  |
| `title` | ```str``` |  Fax Title  |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

