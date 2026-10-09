

# TeamSettingsResponseSettings



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `company`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Company name associated with this account or team.  |  |
| `customSigningRedirectEnabled`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether signers are redirected to a custom URL after completing a signature request.  |  |
| `customSigningRedirectUrl`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  URL where signers are redirected after completing a signature request when custom redirects are enabled.  |  |
| `customTagline`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Custom tagline displayed with the account or team branding.  |  |
| `dateFormat`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Date format used to display dates. List the setting in `unset` to inherit the default.  |  |
| `isSignatureRemindersEnabled`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether automatic reminder emails are enabled for incomplete signature requests.  |  |
| `requestEmailFrom`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Sender name shown on signature request emails.  |  |
| `requestEmailSignature`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Signature appended to signature request emails.  |  |
| `requiredSignatureTypes`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Signature creation methods signers may use.  |  |
| `shouldEnableTamperProof`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether completed documents include a digital tamper-proof seal.  |  |
| `shouldIncludeDistinctPdfs`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether completed documents remain as separate PDF files instead of being merged into one PDF.  |  |
| `shouldOfferSignerAccessCode`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether senders can require an access code to verify a signer.  |  |
| `shouldOfferSignerSmsAuthentication`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether senders can require SMS authentication to verify a signer.  |  |
| `shouldRemoveDocumentId`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether the Dropbox Sign document ID is hidden on sent documents.  |  |
| `dataResidency`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Storage region for team documents.  |  |
| `allowTeamDeleteDocumentForEveryone`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether team members can delete a document for all participants.  |  |
| `allowTeamDownloadCsv`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether team members can download CSV files.  |  |
| `lockTeamTemplateCreation`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether team members are prevented from creating templates.  |  |
| `lockTeamTemplateGallery`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether team members are prevented from using the template gallery.  |  |
| `selfSignMessage`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Default message enforced for team members when they create self-signed documents.  |  |
| `selfSignTitle`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Default title enforced for team members when they create self-signed documents.  |  |
| `signatureRequestMessage`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Default message enforced for team members when they create signature requests.  |  |
| `signatureRequestTitle`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Default title enforced for team members when they create signature requests.  |  |
| `multifactorAuthApp`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether authenticator-app multifactor authentication is enabled for the team.  |  |
| `multifactorAuthSms`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether SMS multifactor authentication is enabled for the team.  |  |



