

# DocumentFieldDetectionRequest



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `detectionMode`<sup>*_required_</sup> | [```String```](String.md) |  The field detection method to use. Set to `annotations` to detect PDF form annotations or `text_tags` to detect Dropbox Sign text tags.  |  |
| `_file` | ```File``` |  The PDF file to analyze.<br><br>This endpoint requires either `file` or `file_url`, but not both.  |  |
| `fileUrl` | ```URI``` |  The URL of the PDF file to analyze.<br><br>This endpoint requires either `file` or `file_url`, but not both.  |  |
| `pageRange` | ```String``` |  The zero-based page indexes to analyze. Accepts `all`, individual pages, inclusive ranges, or comma-separated combinations, such as `0-2,5,7-9`. Defaults to `all`.  |  |



