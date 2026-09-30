# Dropbox.Sign.Model.FaxDraftCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Files** | **List&lt;System.IO.Stream&gt;** |  Use `files[]` to upload the file(s) for the Fax draft.<br><br>This endpoint accepts either **files** or **file_urls[]**, but not both. Files can be added later when neither is provided.  | [optional] **FileUrls** | **List&lt;string&gt;** |  Use `file_urls[]` to have Dropbox Fax download the file(s) for the Fax draft.<br><br>This endpoint accepts either **files** or **file_urls[]**, but not both. Files can be added later when neither is provided.  | [optional] **ClientId** | **string** |  Optional client ID of the API app that owns the embedded Fax draft. When omitted, a normal non-embedded Fax draft is created.  | [optional] **EditorOptions** | [**SubEditorPageOptions**](SubEditorPageOptions.md) |    | [optional] **Recipients** | **List&lt;string&gt;** |  For embedded Fax drafts only. Fax numbers to prefill in the embedded flow. Each fax number must be in a supported international format. A maximum of 20 unique fax numbers can be provided.  | [optional] **TestMode** | **bool** |  When set to `true`, the completed draft will not send a Fax or consume Fax pages. Defaults to `false`.  | [optional] [default to false]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

