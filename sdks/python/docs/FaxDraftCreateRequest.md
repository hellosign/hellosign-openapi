# FaxDraftCreateRequest



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `files` | ```List[io.IOBase]``` |  Use `files[]` to upload the file(s) for the Fax draft.<br><br>This endpoint accepts either **files** or **file_urls[]**, but not both. Files can be added later when neither is provided.  |  |
| `file_urls` | ```List[str]``` |  Use `file_urls[]` to have Dropbox Fax download the file(s) for the Fax draft.<br><br>This endpoint accepts either **files** or **file_urls[]**, but not both. Files can be added later when neither is provided.  |  |
| `client_id` | ```str``` |  Optional client ID of the API app that owns the embedded Fax draft. When omitted, a normal non-embedded Fax draft is created.  |  |
| `editor_options` | [```SubEditorPageOptions```](SubEditorPageOptions.md) |    |  |
| `recipients` | ```List[str]``` |  For embedded Fax drafts only. Fax numbers to prefill in the embedded flow. Each fax number must be in a supported international format. A maximum of 20 unique fax numbers can be provided.  |  |
| `test_mode` | ```bool``` |  When set to `true`, the completed draft will not send a Fax or consume Fax pages. Defaults to `false`.  |  [default to False] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


