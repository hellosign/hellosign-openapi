

# FaxDraftCreateRequest



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `files` | ```List<File>``` |  Use `files[]` to upload the file(s) for the Fax draft.<br><br>This endpoint accepts either **files** or **file_urls[]**, but not both. Files can be added later when neither is provided.  |  |
| `fileUrls` | ```List<String>``` |  Use `file_urls[]` to have Dropbox Fax download the file(s) for the Fax draft.<br><br>This endpoint accepts either **files** or **file_urls[]**, but not both. Files can be added later when neither is provided.  |  |
| `clientId` | ```String``` |  Optional client ID of the API app that owns the embedded Fax draft. When omitted, a normal non-embedded Fax draft is created.  |  |
| `editorOptions` | [```SubEditorPageOptions```](SubEditorPageOptions.md) |    |  |
| `recipients` | ```Set<String>``` |  For embedded Fax drafts only. Fax numbers to prefill in the embedded flow. Each fax number must be in a supported international format. A maximum of 20 unique fax numbers can be provided.  |  |
| `testMode` | ```Boolean``` |  When set to `true`, the completed draft will not send a Fax or consume Fax pages. Defaults to `false`.  |  |



