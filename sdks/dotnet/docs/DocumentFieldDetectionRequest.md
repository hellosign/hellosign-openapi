# Dropbox.Sign.Model.DocumentFieldDetectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetectionMode** | **string** |  The field detection method to use. Set to `annotations` to detect PDF form annotations or `text_tags` to detect Dropbox Sign text tags.  | **File** | **System.IO.Stream** |  The PDF file to analyze.<br><br>This endpoint requires either `file` or `file_url`, but not both.  | [optional] **FileUrl** | **string** |  The URL of the PDF file to analyze.<br><br>This endpoint requires either `file` or `file_url`, but not both.  | [optional] **PageRange** | **string** |  The zero-based page indexes to analyze. Accepts `all`, individual pages, inclusive ranges, or comma-separated combinations, such as `0-2,5,7-9`. Defaults to `all`.  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
