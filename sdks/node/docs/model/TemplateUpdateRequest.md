# # TemplateUpdateRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `ccRoles` | ```Array<string>``` |  The CC roles that must be assigned when using the template to send a signature request.  |  |
| `title` | ```string``` |  The title you want to assign to the SignatureRequest.  |  |
| `subject` | ```string``` |  The new default template email subject.  |  |
| `message` | ```string``` |  The new default template email message.  |  |
| `formFields` | [```Array<SubUpdateFormField>```](SubUpdateFormField.md) |  A list of document form fields to update. The endpoint will not create or remove any fields. Every field must be identified by `api_id`, and the only supported change is renaming the field.  |  |
| `signerExperience` | [```SubSignerExperience```](SubSignerExperience.md) |    |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
