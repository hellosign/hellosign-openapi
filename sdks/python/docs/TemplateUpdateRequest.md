# TemplateUpdateRequest



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `cc_roles` | ```List[str]``` |  The CC roles that must be assigned when using the template to send a signature request.  |  |
| `title` | ```str``` |  The title you want to assign to the SignatureRequest.  |  |
| `subject` | ```str``` |  The new default template email subject.  |  |
| `message` | ```str``` |  The new default template email message.  |  |
| `form_fields` | [```List[SubUpdateFormField]```](SubUpdateFormField.md) |  A list of document form fields to update. The endpoint will not create or remove any fields. Every field must be identified by `api_id`, and the only supported change is renaming the field.  |  |
| `signer_experience` | [```SubSignerExperience```](SubSignerExperience.md) |    |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


