# # DocumentFieldDetectionRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `detectionMode`<sup>*_required_</sup> | [```DocumentFieldDetectionRequestDetectionMode```](DocumentFieldDetectionRequestDetectionMode.md) |    |  |
| `file` | ```RequestFile``` |  The PDF file to analyze.<br><br>This endpoint requires either `file` or `file_url`, but not both.  |  |
| `fileUrl` | ```string``` |  The URL of the PDF file to analyze.<br><br>This endpoint requires either `file` or `file_url`, but not both.  |  |
| `pageRange` | ```string``` |  The zero-based page indexes to analyze. Accepts `all`, individual pages, inclusive ranges, or comma-separated combinations, such as `0-2,5,7-9`. Defaults to `all`.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
