

# AccountSettingsResponseSettings



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
| `isNotifyOnSignEnabled`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to notify the account when someone signs a document it sent.  |  |
| `isNotifyOnViewEnabled`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to notify the account when someone opens a document it sent.  |  |
| `shouldAutocomplete`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether values entered in text fields are saved and suggested for future signature requests.  |  |
| `shouldIncludeRequestedPdfs`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to email the account a PDF copy when a signature request it sent is completed.  |  |
| `shouldIncludeRequestedPdfsForOthers`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to email a PDF copy to the other signers and CC recipients when a signature request is completed.  |  |
| `shouldIncludeSentDocPdfs`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to email the account a PDF copy when it sends a document.  |  |
| `shouldIncludeSentDocPdfsForOthers`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to email recipients a PDF copy, instead of only a link, when the account sends a document.  |  |
| `shouldSendDailySummary`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to send the account a daily email summarizing outstanding signature requests.  |  |
| `shouldSendEmbeddedSignatureConfEmails`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to notify the account when it signs a document on a third-party site.  |  |
| `shouldSendOrderedSrEmail`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to notify all parties when an ordered signature request starts.  |  |
| `shouldSendOutboundConfEmails`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to notify the account when it signs and sends a document.  |  |
| `templateLinkSignatureEmailsEnabled`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to notify the account when someone signs a document sent by its team through a template link.  |  |



