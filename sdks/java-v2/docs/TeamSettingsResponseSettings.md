

# TeamSettingsResponseSettings



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `company`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Company name associated with this account or team.  |  |
| `customSigningRedirectEnabled`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether signers are redirected to a custom webpage after they sign.  |  |
| `customSigningRedirectUrl`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Webpage where signers are redirected after they sign, when custom redirects are enabled.  |  |
| `customTagline`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Company tagline shown with the account or team branding.  |  |
| `dateFormat`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Default date format in the editor and in the audit trail. Senders can still choose a different format for an individual date field.  |  |
| `isSignatureRemindersEnabled`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether reminder emails are sent to signers 3 days and 7 days after a signature request is sent.  |  |
| `requestEmailFrom`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Name shown in the From field of signature request emails. When unset, each user&#39;s first and last name is shown.  |  |
| `requestEmailSignature`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Text appended to the end of signature request emails.  |  |
| `requiredSignatureTypes`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Signature creation methods a signer is allowed to use.  |  |
| `shouldEnableTamperProof`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether a tamper-proof seal is applied to sent signature requests.  |  |
| `shouldIncludeDistinctPdfs`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether completed documents remain as separate PDF files instead of being merged into one PDF.  |  |
| `shouldOfferSignerAccessCode`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether senders can require a custom access code before a signer can open a document.  |  |
| `shouldOfferSignerSmsAuthentication`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether senders can require a text-message verification code before a signer can open a document.  |  |
| `shouldRemoveDocumentId`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether the document ID is removed from all pages of sent documents.  |  |
| `dataResidency`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Region where the team&#39;s documents are stored at rest.  |  |
| `allowTeamDeleteDocumentForEveryone`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether the sender, in addition to admins, can permanently delete a document from Dropbox Sign and from every participant account.  |  |
| `allowTeamDownloadCsv`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether the sender, in addition to admins, can download document data as a CSV.  |  |
| `lockTeamTemplateCreation`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  When enabled, only admins can create and edit templates and template links.  |  |
| `lockTeamTemplateGallery`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  When enabled, only admins can access and use the template gallery.  |  |
| `selfSignMessage`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Default message for self-signed documents created by team members. Lock this setting to prevent members from changing it.  |  |
| `selfSignTitle`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Default document title for self-signed documents created by team members. Lock this setting to prevent members from changing it.  |  |
| `signatureRequestMessage`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Default email message for signature requests created by team members. Lock this setting to prevent members from changing it.  |  |
| `signatureRequestTitle`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Default document title for signature requests created by team members. Lock this setting to prevent members from changing it.  |  |
| `multifactorAuthApp`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether an authenticator app is an allowed multifactor authentication method for the team. Enabling either method requires members to set it up at their next sign-in.  |  |
| `multifactorAuthSms`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether SMS verification is an allowed multifactor authentication method for the team. Enabling either method requires members to set it up at their next sign-in. SMS is the fallback when an authenticator app is also enabled.  |  |



