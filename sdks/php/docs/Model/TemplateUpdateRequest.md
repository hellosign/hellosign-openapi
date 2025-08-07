# # TemplateUpdateRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `cc_roles` | ```string[]``` |  The CC roles that must be assigned when using the template to send a signature request.  |  |
| `allow_form_view` | ```bool``` |  The CC roles that must be assigned when using the template to send a signature request. If set to `true` all the form fields on template document must have non-empty names.  |  |
| `title` | ```string``` |  The title you want to assign to the SignatureRequest.  |  |
| `subject` | ```string``` |  The new default template email subject.  |  |
| `message` | ```string``` |  The new default template email message.  |  |
| `form_fields` | [```\Dropbox\Sign\Model\SubUpdateFormField[]```](SubUpdateFormField.md) |  A list of document form fields to update. The endpoint will not create or remove any fields. Every field must be identified by `api_id`, and the only supported change is renaming the field.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
