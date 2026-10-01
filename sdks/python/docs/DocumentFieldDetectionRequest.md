# DocumentFieldDetectionRequest



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `detection_mode`<sup>*_required_</sup> | ```str``` |  The field detection method to use. Set to `annotations` to detect PDF form annotations or `text_tags` to detect Dropbox Sign text tags.  |  |
| `file` | ```io.IOBase``` |  The PDF file to analyze.<br><br>This endpoint requires either `file` or `file_url`, but not both.  |  |
| `file_url` | ```str``` |  The URL of the PDF file to analyze.<br><br>This endpoint requires either `file` or `file_url`, but not both.  |  |
| `page_range` | ```str``` |  The zero-based page indexes to analyze. Accepts `all`, individual pages, inclusive ranges, or comma-separated combinations, such as `0-2,5,7-9`. Defaults to `all`.  |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
