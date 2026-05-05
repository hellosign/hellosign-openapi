# Dropbox::Sign::TemplateUpdateRequest



## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `cc_roles` | ```Array<String>``` |  The CC roles that must be assigned when using the template to send a signature request.  |  |
| `title` | ```String``` |  The title you want to assign to the SignatureRequest.  |  |
| `subject` | ```String``` |  The new default template email subject.  |  |
| `message` | ```String``` |  The new default template email message.  |  |
| `form_fields` | [```Array<SubUpdateFormField>```](SubUpdateFormField.md) |  A list of document form fields to update. The endpoint will not create or remove any fields. Every field must be identified by `api_id`, and the only supported change is renaming the field.  |  |
| `signer_experience` | [```SubSignerExperience```](SubSignerExperience.md) |    |  |

