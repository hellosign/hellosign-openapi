# # TemplateResponse

Contains information about the templates you and your team have created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `templateId` | ```string``` |  The id of the Template.  |  |
| `title` | ```string``` |  The title of the Template. This will also be the default subject of the message sent to signers when using this Template to send a SignatureRequest. This can be overridden when sending the SignatureRequest.  |  |
| `message` | ```string``` |  The default message that will be sent to signers when using this Template to send a SignatureRequest. This can be overridden when sending the SignatureRequest.  |  |
| `updatedAt` | ```number``` |  Time the template was last updated.  |  |
| `isEmbedded` | ```boolean``` |  `true` if this template was created using an embedded flow, `false` if it was created on our website. Will be `null` when you are not the creator of the Template.  |  |
| `isCreator` | ```boolean``` |  `true` if you are the owner of this template, `false` if it&#39;s been shared with you by a team member.  |  |
| `canEdit` | ```boolean``` |  Indicates whether edit rights have been granted to you by the owner (always `true` if that&#39;s you).  |  |
| `isLocked` | ```boolean``` |  Indicates whether the template is locked. If `true`, then the template was created outside your quota and can only be used in `test_mode`. If `false`, then the template is within your quota and can be used to create signature requests.  |  |
| `metadata` | ```{ [key: string]: any; }``` |  The metadata attached to the template.  |  |
| `signerRoles` | [```Array<TemplateResponseSignerRole>```](TemplateResponseSignerRole.md) |  An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template.  |  |
| `ccRoles` | [```Array<TemplateResponseCCRole>```](TemplateResponseCCRole.md) |  An array of the designated CC roles that must be specified when sending a SignatureRequest using this Template.  |  |
| `documents` | [```Array<TemplateResponseDocument>```](TemplateResponseDocument.md) |  An array describing each document associated with this Template. Includes form field data for each document.  |  |
| `customFields` | [```Array<TemplateResponseDocumentCustomFieldBase>```](TemplateResponseDocumentCustomFieldBase.md) |  Deprecated. Use `custom_fields` inside the [documents](https://developers.hellosign.com/api/reference/operation/templateGet/#!c&#x3D;200&amp;path&#x3D;template/documents&amp;t&#x3D;response) array instead.  |  |
| `namedFormFields` | [```Array<TemplateResponseDocumentFormFieldBase>```](TemplateResponseDocumentFormFieldBase.md) |  Deprecated. Use `form_fields` inside the [documents](https://developers.hellosign.com/api/reference/operation/templateGet/#!c&#x3D;200&amp;path&#x3D;template/documents&amp;t&#x3D;response) array instead.  |  |
| `accounts` | [```Array<TemplateResponseAccount>```](TemplateResponseAccount.md) |  An array of the Accounts that can use this Template.  |  |
| `attachments` | [```Array<SignatureRequestResponseAttachment>```](SignatureRequestResponseAttachment.md) |  Signer attachments.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
