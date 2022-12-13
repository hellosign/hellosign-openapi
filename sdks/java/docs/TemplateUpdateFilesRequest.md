

# TemplateUpdateFilesRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `clientId` | ```String``` |  Client id of the app you&#39;re using to update this template.  |  |
| `files` | ```List<File>``` |  Use `files[]` to indicate the uploaded file(s) to use for the template.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  |  |
| `fileUrls` | ```List<String>``` |  Use `file_urls[]` to have Dropbox Sign download the file(s) to use for the template.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  |  |
| `message` | ```String``` |  The new default template email message.  |  |
| `subject` | ```String``` |  The new default template email subject.  |  |
| `testMode` | ```Boolean``` |  Whether this is a test, the signature request created from this draft will not be legally binding if set to `true`. Defaults to `false`.  |  |



