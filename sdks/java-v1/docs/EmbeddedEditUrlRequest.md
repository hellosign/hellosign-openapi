

# EmbeddedEditUrlRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `allowEditCcs` | ```Boolean``` |  This allows the requester to enable/disable to add or change CC roles when editing the template.  |  |
| `ccRoles` | ```List<String>``` |  The CC roles that must be assigned when using the template to send a signature request. To remove all CC roles, pass in a single role with no name. For use in a POST request.  |  |
| `editorOptions` | [```SubEditorOptions```](SubEditorOptions.md) |    |  |
| `forceSignerRoles` | ```Boolean``` |  Provide users the ability to review/edit the template signer roles.  |  |
| `forceSubjectMessage` | ```Boolean``` |  Provide users the ability to review/edit the template subject and message.  |  |
| `mergeFields` | [```List<SubMergeField>```](SubMergeField.md) |  Add additional merge fields to the template, which can be used used to pre-fill data by passing values into signature requests made with that template.<br><br>Remove all merge fields on the template by passing an empty array `[]`.  |  |
| `previewOnly` | ```Boolean``` |  This allows the requester to enable the preview experience (i.e. does not allow the requester&#39;s end user to add any additional fields via the editor).<br><br>**Note**: This parameter overwrites `show_preview&#x3D;true` (if set).  |  |
| `showPreview` | ```Boolean``` |  This allows the requester to enable the editor/preview experience.  |  |
| `showProgressStepper` | ```Boolean``` |  When only one step remains in the signature request process and this parameter is set to `false` then the progress stepper will be hidden.  |  |
| `testMode` | ```Boolean``` |  Whether this is a test, locked templates will only be available for editing if this is set to `true`. Defaults to `false`.  |  |



