

# TeamSettingsUpdateRequest



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
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
| `unset` | [```Set&lt;UnsetEnum&gt;```](#Set&lt;UnsetEnum&gt;) |  Setting names to clear so their values are inherited. A listed name cannot also be set or locked in the same request.  |  |



## Enum: Set&lt;UnsetEnum&gt;

| Name | Value |
---- | -----
| COMPANY | &quot;company&quot; |
| CUSTOM_SIGNING_REDIRECT_ENABLED | &quot;custom_signing_redirect_enabled&quot; |
| CUSTOM_SIGNING_REDIRECT_URL | &quot;custom_signing_redirect_url&quot; |
| CUSTOM_TAGLINE | &quot;custom_tagline&quot; |
| DATE_FORMAT | &quot;date_format&quot; |
| IS_SIGNATURE_REMINDERS_ENABLED | &quot;is_signature_reminders_enabled&quot; |
| REQUEST_EMAIL_FROM | &quot;request_email_from&quot; |
| REQUEST_EMAIL_SIGNATURE | &quot;request_email_signature&quot; |
| REQUIRED_SIGNATURE_TYPES | &quot;required_signature_types&quot; |
| SHOULD_ENABLE_TAMPER_PROOF | &quot;should_enable_tamper_proof&quot; |
| SHOULD_INCLUDE_DISTINCT_PDFS | &quot;should_include_distinct_pdfs&quot; |
| SHOULD_OFFER_SIGNER_ACCESS_CODE | &quot;should_offer_signer_access_code&quot; |
| SHOULD_OFFER_SIGNER_SMS_AUTHENTICATION | &quot;should_offer_signer_sms_authentication&quot; |
| SHOULD_REMOVE_DOCUMENT_ID | &quot;should_remove_document_id&quot; |
| DATA_RESIDENCY | &quot;data_residency&quot; |
| ALLOW_TEAM_DELETE_DOCUMENT_FOR_EVERYONE | &quot;allow_team_delete_document_for_everyone&quot; |
| ALLOW_TEAM_DOWNLOAD_CSV | &quot;allow_team_download_csv&quot; |
| LOCK_TEAM_TEMPLATE_CREATION | &quot;lock_team_template_creation&quot; |
| LOCK_TEAM_TEMPLATE_GALLERY | &quot;lock_team_template_gallery&quot; |
| SELF_SIGN_MESSAGE | &quot;self_sign_message&quot; |
| SELF_SIGN_TITLE | &quot;self_sign_title&quot; |
| SIGNATURE_REQUEST_MESSAGE | &quot;signature_request_message&quot; |
| SIGNATURE_REQUEST_TITLE | &quot;signature_request_title&quot; |
| MULTIFACTOR_AUTH_APP | &quot;multifactor_auth_app&quot; |
| MULTIFACTOR_AUTH_SMS | &quot;multifactor_auth_sms&quot; |



