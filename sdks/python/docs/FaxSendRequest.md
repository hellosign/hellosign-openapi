# FaxSendRequest



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `recipient`<sup>*_required_</sup> | ```str``` |  Recipient of the fax  Can be a phone number in E.164 format or email address  |  |
| `sender` | ```str``` |  Fax Send From Sender (used only with fax number)  |  |
| `files` | ```List[io.IOBase]``` |  Use `files[]` to indicate the uploaded file(s) to fax<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  |  |
| `file_urls` | ```List[str]``` |  Use `file_urls[]` to have Dropbox Fax download the file(s) to fax<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  |  |
| `test_mode` | ```bool``` |  API Test Mode Setting  |  [default to False] |
| `cover_page_to` | ```str``` |  Fax cover page recipient information  |  |
| `cover_page_from` | ```str``` |  Fax cover page sender information  |  |
| `cover_page_message` | ```str``` |  Fax Cover Page Message  |  |
| `title` | ```str``` |  Fax Title  |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


