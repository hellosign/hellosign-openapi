# # TeamSettingsUpdateRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `company` | [```StringSettingUpdate```](StringSettingUpdate.md) |  Company name associated with this account or team.  |  |
| `customSigningRedirectEnabled` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether signers are redirected to a custom URL after completing a signature request.  |  |
| `customSigningRedirectUrl` | [```StringSettingUpdate```](StringSettingUpdate.md) |  URL where signers are redirected after completing a signature request when custom redirects are enabled.  |  |
| `customTagline` | [```StringSettingUpdate```](StringSettingUpdate.md) |  Custom tagline displayed with the account or team branding.  |  |
| `dateFormat` | [```DateFormatSettingUpdate```](DateFormatSettingUpdate.md) |  Date format used to display dates. List the setting in `unset` to inherit the default.  |  |
| `isSignatureRemindersEnabled` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether automatic reminder emails are enabled for incomplete signature requests.  |  |
| `requestEmailFrom` | [```StringSettingUpdate```](StringSettingUpdate.md) |  Sender name shown on signature request emails.  |  |
| `requestEmailSignature` | [```StringSettingUpdate```](StringSettingUpdate.md) |  Signature appended to signature request emails.  |  |
| `requiredSignatureTypes` | [```RequiredSignatureTypesSettingUpdate```](RequiredSignatureTypesSettingUpdate.md) |  Signature creation methods signers may use.  |  |
| `shouldEnableTamperProof` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether completed documents include a digital tamper-proof seal.  |  |
| `shouldIncludeDistinctPdfs` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether completed documents remain as separate PDF files instead of being merged into one PDF.  |  |
| `shouldOfferSignerAccessCode` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether senders can require an access code to verify a signer.  |  |
| `shouldOfferSignerSmsAuthentication` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether senders can require SMS authentication to verify a signer.  |  |
| `shouldRemoveDocumentId` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether the Dropbox Sign document ID is hidden on sent documents.  |  |
| `dataResidency` | [```DataResidencySettingUpdate```](DataResidencySettingUpdate.md) |  Storage region for team documents.  |  |
| `allowTeamDeleteDocumentForEveryone` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether team members can delete a document for all participants.  |  |
| `allowTeamDownloadCsv` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether team members can download CSV files.  |  |
| `lockTeamTemplateCreation` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether team members are prevented from creating templates.  |  |
| `lockTeamTemplateGallery` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether team members are prevented from using the template gallery.  |  |
| `selfSignMessage` | [```StringSettingUpdate```](StringSettingUpdate.md) |  Default message enforced for team members when they create self-signed documents.  |  |
| `selfSignTitle` | [```StringSettingUpdate```](StringSettingUpdate.md) |  Default title enforced for team members when they create self-signed documents.  |  |
| `signatureRequestMessage` | [```StringSettingUpdate```](StringSettingUpdate.md) |  Default message enforced for team members when they create signature requests.  |  |
| `signatureRequestTitle` | [```StringSettingUpdate```](StringSettingUpdate.md) |  Default title enforced for team members when they create signature requests.  |  |
| `multifactorAuthApp` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether authenticator-app multifactor authentication is enabled for the team.  |  |
| `multifactorAuthSms` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether SMS multifactor authentication is enabled for the team.  |  |
| `unset` | ```Set<string>``` |  Setting names to clear so their values are inherited. A listed name cannot also be set or locked in the same request.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
