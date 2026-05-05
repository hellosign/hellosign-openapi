# Dropbox.Sign.Model.TemplateUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CcRoles** | **List&lt;string&gt;** |  The CC roles that must be assigned when using the template to send a signature request.  | [optional] **Title** | **string** |  The title you want to assign to the SignatureRequest.  | [optional] **Subject** | **string** |  The new default template email subject.  | [optional] **Message** | **string** |  The new default template email message.  | [optional] **FormFields** | [**List&lt;SubUpdateFormField&gt;**](SubUpdateFormField.md) |  A list of document form fields to update. The endpoint will not create or remove any fields. Every field must be identified by `api_id`, and the only supported change is renaming the field.  | [optional] **SignerExperience** | [**SubSignerExperience**](SubSignerExperience.md) |    | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

