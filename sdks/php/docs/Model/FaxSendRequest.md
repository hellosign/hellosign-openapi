# # FaxSendRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `recipient`<sup>*_required_</sup> | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Recipient of the fax 
Can be a phone number in E.164 format or email address REPLACE_ME_WITH_DESCRIPTION_END |  |
| `sender` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Fax Send From Sender (used only with fax number) REPLACE_ME_WITH_DESCRIPTION_END |  |
| `files` | ```\SplFileObject[]``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Use &#x60;files[]&#x60; to indicate the uploaded file(s) to fax

This endpoint requires either **files** or **file_urls[]**, but not both. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `file_urls` | ```string[]``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Use &#x60;file_urls[]&#x60; to have Dropbox Fax download the file(s) to fax

This endpoint requires either **files** or **file_urls[]**, but not both. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `test_mode` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN API Test Mode Setting REPLACE_ME_WITH_DESCRIPTION_END |  [default to false] |
| `cover_page_to` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Fax cover page recipient information REPLACE_ME_WITH_DESCRIPTION_END |  |
| `cover_page_from` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Fax cover page sender information REPLACE_ME_WITH_DESCRIPTION_END |  |
| `cover_page_message` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Fax Cover Page Message REPLACE_ME_WITH_DESCRIPTION_END |  |
| `title` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Fax Title REPLACE_ME_WITH_DESCRIPTION_END |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
