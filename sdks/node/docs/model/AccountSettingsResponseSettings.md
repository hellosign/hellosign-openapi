# # AccountSettingsResponseSettings



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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
| `isNotifyOnSignEnabled`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to notify the account when someone signs a document it sent.  |  |
| `isNotifyOnViewEnabled`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to notify the account when someone opens a document it sent.  |  |
| `shouldAutocomplete`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether values entered in text fields are saved and suggested for future signature requests.  |  |
| `shouldIncludeRequestedPdfs`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether completed signature requests include PDF copies in emails sent to the account.  |  |
| `shouldIncludeRequestedPdfsForOthers`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether completed signature requests include PDF copies in emails sent to signers and CC recipients.  |  |
| `shouldIncludeSentDocPdfs`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether emails sent to the account include PDF copies of documents it sends.  |  |
| `shouldIncludeSentDocPdfsForOthers`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether emails sent to recipients include PDF copies of documents the account sends.  |  |
| `shouldSendDailySummary`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to send the account a daily email summarizing outstanding signature requests.  |  |
| `shouldSendEmbeddedSignatureConfEmails`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to notify the account when it signs a document on a third-party site.  |  |
| `shouldSendOrderedSrEmail`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to notify all parties when an ordered signature request starts.  |  |
| `shouldSendOutboundConfEmails`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to notify the account when it signs and sends a document.  |  |
| `templateLinkSignatureEmailsEnabled`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to notify the account when someone signs a document sent by its team through a template link.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
