# # TemplateUpdateFilesRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `client_id` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Client id of the app you&#39;re using to update this template. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `files` | ```\SplFileObject[]``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Use &#x60;files[]&#x60; to indicate the uploaded file(s) to use for the template.

This endpoint requires either **files** or **file_urls[]**, but not both. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `file_urls` | ```string[]``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Use &#x60;file_urls[]&#x60; to have Dropbox Sign download the file(s) to use for the template.

This endpoint requires either **files** or **file_urls[]**, but not both. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `message` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The new default template email message. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `subject` | ```string``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The new default template email subject. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `test_mode` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Whether this is a test, the signature request created from this draft will not be legally binding if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;. REPLACE_ME_WITH_DESCRIPTION_END |  [default to false] |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
