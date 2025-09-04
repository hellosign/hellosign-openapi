

# TemplateUpdateRequest



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `ccRoles` | ```List<String>``` |  The CC roles that must be assigned when using the template to send a signature request.  |  |
| `title` | ```String``` |  The title you want to assign to the SignatureRequest.  |  |
| `subject` | ```String``` |  The new default template email subject.  |  |
| `message` | ```String``` |  The new default template email message.  |  |
| `formFields` | [```List<SubUpdateFormField>```](SubUpdateFormField.md) |  A list of document form fields to update. The endpoint will not create or remove any fields. Every field must be identified by `api_id`, and the only supported change is renaming the field.  |  |
| `signerExperience` | [```SubSignerExperience```](SubSignerExperience.md) |    |  |



