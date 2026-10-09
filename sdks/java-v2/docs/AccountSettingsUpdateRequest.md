

# AccountSettingsUpdateRequest



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `company` | ```String``` |  Company name associated with this account or team.  |  |
| `customSigningRedirectEnabled` | ```Boolean``` |  Whether signers are redirected to a custom URL after completing a signature request.  |  |
| `customSigningRedirectUrl` | ```String``` |  URL where signers are redirected after completing a signature request when custom redirects are enabled.  |  |
| `customTagline` | ```String``` |  Custom tagline displayed with the account or team branding.  |  |
| `dateFormat` | ```DateFormat``` |    |  |
| `isSignatureRemindersEnabled` | ```Boolean``` |  Whether automatic reminder emails are enabled for incomplete signature requests.  |  |
| `requestEmailFrom` | ```String``` |  Sender name shown on signature request emails.  |  |
| `requestEmailSignature` | ```String``` |  Signature appended to signature request emails.  |  |
| `requiredSignatureTypes` | ```Set<RequiredSignatureType>``` |  Signature creation methods signers may use.  |  |
| `shouldEnableTamperProof` | ```Boolean``` |  Whether completed documents include a digital tamper-proof seal.  |  |
| `shouldIncludeDistinctPdfs` | ```Boolean``` |  Whether completed documents remain as separate PDF files instead of being merged into one PDF.  |  |
| `shouldOfferSignerAccessCode` | ```Boolean``` |  Whether senders can require an access code to verify a signer.  |  |
| `shouldOfferSignerSmsAuthentication` | ```Boolean``` |  Whether senders can require SMS authentication to verify a signer.  |  |
| `shouldRemoveDocumentId` | ```Boolean``` |  Whether the Dropbox Sign document ID is hidden on sent documents.  |  |
| `isNotifyOnSignEnabled` | ```Boolean``` |  Whether to notify the account when someone signs a document it sent.  |  |
| `isNotifyOnViewEnabled` | ```Boolean``` |  Whether to notify the account when someone opens a document it sent.  |  |
| `shouldAutocomplete` | ```Boolean``` |  Whether values entered in text fields are saved and suggested for future signature requests.  |  |
| `shouldIncludeRequestedPdfs` | ```Boolean``` |  Whether completed signature requests include PDF copies in emails sent to the account.  |  |
| `shouldIncludeRequestedPdfsForOthers` | ```Boolean``` |  Whether completed signature requests include PDF copies in emails sent to signers and CC recipients.  |  |
| `shouldIncludeSentDocPdfs` | ```Boolean``` |  Whether emails sent to the account include PDF copies of documents it sends.  |  |
| `shouldIncludeSentDocPdfsForOthers` | ```Boolean``` |  Whether emails sent to recipients include PDF copies of documents the account sends.  |  |
| `shouldSendDailySummary` | ```Boolean``` |  Whether to send the account a daily email summarizing outstanding signature requests.  |  |
| `shouldSendEmbeddedSignatureConfEmails` | ```Boolean``` |  Whether to notify the account when it signs a document on a third-party site.  |  |
| `shouldSendOrderedSrEmail` | ```Boolean``` |  Whether to notify all parties when an ordered signature request starts.  |  |
| `shouldSendOutboundConfEmails` | ```Boolean``` |  Whether to notify the account when it signs and sends a document.  |  |
| `templateLinkSignatureEmailsEnabled` | ```Boolean``` |  Whether to notify the account when someone signs a document sent by its team through a template link.  |  |
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
| IS_NOTIFY_ON_SIGN_ENABLED | &quot;is_notify_on_sign_enabled&quot; |
| IS_NOTIFY_ON_VIEW_ENABLED | &quot;is_notify_on_view_enabled&quot; |
| SHOULD_AUTOCOMPLETE | &quot;should_autocomplete&quot; |
| SHOULD_INCLUDE_REQUESTED_PDFS | &quot;should_include_requested_pdfs&quot; |
| SHOULD_INCLUDE_REQUESTED_PDFS_FOR_OTHERS | &quot;should_include_requested_pdfs_for_others&quot; |
| SHOULD_INCLUDE_SENT_DOC_PDFS | &quot;should_include_sent_doc_pdfs&quot; |
| SHOULD_INCLUDE_SENT_DOC_PDFS_FOR_OTHERS | &quot;should_include_sent_doc_pdfs_for_others&quot; |
| SHOULD_SEND_DAILY_SUMMARY | &quot;should_send_daily_summary&quot; |
| SHOULD_SEND_EMBEDDED_SIGNATURE_CONF_EMAILS | &quot;should_send_embedded_signature_conf_emails&quot; |
| SHOULD_SEND_ORDERED_SR_EMAIL | &quot;should_send_ordered_sr_email&quot; |
| SHOULD_SEND_OUTBOUND_CONF_EMAILS | &quot;should_send_outbound_conf_emails&quot; |
| TEMPLATE_LINK_SIGNATURE_EMAILS_ENABLED | &quot;template_link_signature_emails_enabled&quot; |



