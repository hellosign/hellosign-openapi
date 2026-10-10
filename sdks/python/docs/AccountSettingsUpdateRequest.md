# AccountSettingsUpdateRequest



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `company` | ```str``` |  Company name associated with this account or team.  |  |
| `custom_signing_redirect_enabled` | ```bool``` |  Whether signers are redirected to a custom URL after completing a signature request.  |  |
| `custom_signing_redirect_url` | ```str``` |  URL where signers are redirected after completing a signature request when custom redirects are enabled.  |  |
| `custom_tagline` | ```str``` |  Custom tagline displayed with the account or team branding.  |  |
| `date_format` | [```DateFormat```](DateFormat.md) |    |  |
| `is_signature_reminders_enabled` | ```bool``` |  Whether automatic reminder emails are enabled for incomplete signature requests.  |  |
| `request_email_from` | ```str``` |  Sender name shown on signature request emails.  |  |
| `request_email_signature` | ```str``` |  Signature appended to signature request emails.  |  |
| `required_signature_types` | [```List[RequiredSignatureType]```](RequiredSignatureType.md) |  Signature creation methods signers may use.  |  |
| `should_enable_tamper_proof` | ```bool``` |  Whether completed documents include a digital tamper-proof seal.  |  |
| `should_include_distinct_pdfs` | ```bool``` |  Whether completed documents remain as separate PDF files instead of being merged into one PDF.  |  |
| `should_offer_signer_access_code` | ```bool``` |  Whether senders can require an access code to verify a signer.  |  |
| `should_offer_signer_sms_authentication` | ```bool``` |  Whether senders can require SMS authentication to verify a signer.  |  |
| `should_remove_document_id` | ```bool``` |  Whether the Dropbox Sign document ID is hidden on sent documents.  |  |
| `is_notify_on_sign_enabled` | ```bool``` |  Whether to notify the account when someone signs a document it sent.  |  |
| `is_notify_on_view_enabled` | ```bool``` |  Whether to notify the account when someone opens a document it sent.  |  |
| `should_autocomplete` | ```bool``` |  Whether values entered in text fields are saved and suggested for future signature requests.  |  |
| `should_include_requested_pdfs` | ```bool``` |  Whether completed signature requests include PDF copies in emails sent to the account.  |  |
| `should_include_requested_pdfs_for_others` | ```bool``` |  Whether completed signature requests include PDF copies in emails sent to signers and CC recipients.  |  |
| `should_include_sent_doc_pdfs` | ```bool``` |  Whether emails sent to the account include PDF copies of documents it sends.  |  |
| `should_include_sent_doc_pdfs_for_others` | ```bool``` |  Whether emails sent to recipients include PDF copies of documents the account sends.  |  |
| `should_send_daily_summary` | ```bool``` |  Whether to send the account a daily email summarizing outstanding signature requests.  |  |
| `should_send_embedded_signature_conf_emails` | ```bool``` |  Whether to notify the account when it signs a document on a third-party site.  |  |
| `should_send_ordered_sr_email` | ```bool``` |  Whether to notify all parties when an ordered signature request starts.  |  |
| `should_send_outbound_conf_emails` | ```bool``` |  Whether to notify the account when it signs and sends a document.  |  |
| `template_link_signature_emails_enabled` | ```bool``` |  Whether to notify the account when someone signs a document sent by its team through a template link.  |  |
| `unset` | ```List[str]``` |  Setting names to clear so their values are inherited. A listed name cannot also be set or locked in the same request.  |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


