# # TemplateUpdateFilesRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `clientId` | ```string``` |  Client id of the app you&#39;re using to update this template.  |  |
| `files` | ```Array<RequestFile>``` |  Use `files[]` to indicate the uploaded file(s) to use for the template.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  |  |
| `fileUrls` | ```Array<string>``` |  Use `file_urls[]` to have Dropbox Sign download the file(s) to use for the template.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  |  |
| `message` | ```string``` |  The new default template email message.  |  |
| `subject` | ```string``` |  The new default template email subject.  |  |
| `testMode` | ```boolean``` |  Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.  |  [default to false] |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
