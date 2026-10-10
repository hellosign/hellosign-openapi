# # AccountSettingsUpdateRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `company` | ```string``` |  Company name associated with this account or team.  |  |
| `customSigningRedirectEnabled` | ```boolean``` |  Whether signers are redirected to a custom URL after completing a signature request.  |  |
| `customSigningRedirectUrl` | ```string``` |  URL where signers are redirected after completing a signature request when custom redirects are enabled.  |  |
| `customTagline` | ```string``` |  Custom tagline displayed with the account or team branding.  |  |
| `dateFormat` | [```DateFormat```](DateFormat.md) |    |  |
| `isSignatureRemindersEnabled` | ```boolean``` |  Whether automatic reminder emails are enabled for incomplete signature requests.  |  |
| `requestEmailFrom` | ```string``` |  Sender name shown on signature request emails.  |  |
| `requestEmailSignature` | ```string``` |  Signature appended to signature request emails.  |  |
| `requiredSignatureTypes` | [```Set<RequiredSignatureType>```](RequiredSignatureType.md) |  Signature creation methods signers may use.  |  |
| `shouldEnableTamperProof` | ```boolean``` |  Whether completed documents include a digital tamper-proof seal.  |  |
| `shouldIncludeDistinctPdfs` | ```boolean``` |  Whether completed documents remain as separate PDF files instead of being merged into one PDF.  |  |
| `shouldOfferSignerAccessCode` | ```boolean``` |  Whether senders can require an access code to verify a signer.  |  |
| `shouldOfferSignerSmsAuthentication` | ```boolean``` |  Whether senders can require SMS authentication to verify a signer.  |  |
| `shouldRemoveDocumentId` | ```boolean``` |  Whether the Dropbox Sign document ID is hidden on sent documents.  |  |
| `isNotifyOnSignEnabled` | ```boolean``` |  Whether to notify the account when someone signs a document it sent.  |  |
| `isNotifyOnViewEnabled` | ```boolean``` |  Whether to notify the account when someone opens a document it sent.  |  |
| `shouldAutocomplete` | ```boolean``` |  Whether values entered in text fields are saved and suggested for future signature requests.  |  |
| `shouldIncludeRequestedPdfs` | ```boolean``` |  Whether completed signature requests include PDF copies in emails sent to the account.  |  |
| `shouldIncludeRequestedPdfsForOthers` | ```boolean``` |  Whether completed signature requests include PDF copies in emails sent to signers and CC recipients.  |  |
| `shouldIncludeSentDocPdfs` | ```boolean``` |  Whether emails sent to the account include PDF copies of documents it sends.  |  |
| `shouldIncludeSentDocPdfsForOthers` | ```boolean``` |  Whether emails sent to recipients include PDF copies of documents the account sends.  |  |
| `shouldSendDailySummary` | ```boolean``` |  Whether to send the account a daily email summarizing outstanding signature requests.  |  |
| `shouldSendEmbeddedSignatureConfEmails` | ```boolean``` |  Whether to notify the account when it signs a document on a third-party site.  |  |
| `shouldSendOrderedSrEmail` | ```boolean``` |  Whether to notify all parties when an ordered signature request starts.  |  |
| `shouldSendOutboundConfEmails` | ```boolean``` |  Whether to notify the account when it signs and sends a document.  |  |
| `templateLinkSignatureEmailsEnabled` | ```boolean``` |  Whether to notify the account when someone signs a document sent by its team through a template link.  |  |
| `unset` | ```Set<string>``` |  Setting names to clear so their values are inherited. A listed name cannot also be set or locked in the same request.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
