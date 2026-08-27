# Dropbox::Sign::FaxDraftCreateRequest



## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `client_id`<sup>*_required_</sup> | ```String``` |  Client ID of the API app that owns the embedded Fax draft.  |  |
| `files` | ```Array<File>``` |  Use `files[]` to upload the file(s) for the embedded Fax draft.<br><br>This endpoint accepts either **files** or **file_urls[]**, but not both. Files can be added later in the embedded flow when neither is provided.  |  |
| `file_urls` | ```Array<String>``` |  Use `file_urls[]` to have Dropbox Fax download the file(s) for the embedded Fax draft.<br><br>This endpoint accepts either **files** or **file_urls[]**, but not both. Files can be added later in the embedded flow when neither is provided.  |  |
| `editor_options` | [```SubEditorPageOptions```](SubEditorPageOptions.md) |    |  |
| `recipients` | ```Array<String>``` |  Fax numbers to prefill in the embedded flow. Each fax number must be in a supported international format. A maximum of 20 unique fax numbers can be provided.  |  |
| `test_mode` | ```Boolean``` |  When set to `true`, the completed draft will not send a Fax or consume Fax pages. Defaults to `false`.  |  [default to false] |
