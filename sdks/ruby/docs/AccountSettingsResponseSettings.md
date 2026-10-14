# Dropbox::Sign::AccountSettingsResponseSettings



## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `company`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Company name associated with this account or team.  |  |
| `custom_signing_redirect_enabled`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether signers are redirected to a custom URL after completing a signature request.  |  |
| `custom_signing_redirect_url`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  URL where signers are redirected after completing a signature request when custom redirects are enabled.  |  |
| `custom_tagline`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Custom tagline displayed with the account or team branding.  |  |
| `date_format`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Date format used to display dates. List the setting in `unset` to inherit the default.  |  |
| `is_signature_reminders_enabled`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether automatic reminder emails are enabled for incomplete signature requests.  |  |
| `request_email_from`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Sender name shown on signature request emails.  |  |
| `request_email_signature`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Signature appended to signature request emails.  |  |
| `required_signature_types`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Signature creation methods signers may use.  |  |
| `should_enable_tamper_proof`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether completed documents include a digital tamper-proof seal.  |  |
| `should_include_distinct_pdfs`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether completed documents remain as separate PDF files instead of being merged into one PDF.  |  |
| `should_offer_signer_access_code`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether senders can require an access code to verify a signer.  |  |
| `should_offer_signer_sms_authentication`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether senders can require SMS authentication to verify a signer.  |  |
| `should_remove_document_id`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether the Dropbox Sign document ID is hidden on sent documents.  |  |
| `is_notify_on_sign_enabled`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to notify the account when someone signs a document it sent.  |  |
| `is_notify_on_view_enabled`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to notify the account when someone opens a document it sent.  |  |
| `should_autocomplete`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether values entered in text fields are saved and suggested for future signature requests.  |  |
| `should_include_requested_pdfs`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether completed signature requests include PDF copies in emails sent to the account.  |  |
| `should_include_requested_pdfs_for_others`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether completed signature requests include PDF copies in emails sent to signers and CC recipients.  |  |
| `should_include_sent_doc_pdfs`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether emails sent to the account include PDF copies of documents it sends.  |  |
| `should_include_sent_doc_pdfs_for_others`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether emails sent to recipients include PDF copies of documents the account sends.  |  |
| `should_send_daily_summary`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to send the account a daily email summarizing outstanding signature requests.  |  |
| `should_send_embedded_signature_conf_emails`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to notify the account when it signs a document on a third-party site.  |  |
| `should_send_ordered_sr_email`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to notify all parties when an ordered signature request starts.  |  |
| `should_send_outbound_conf_emails`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to notify the account when it signs and sends a document.  |  |
| `template_link_signature_emails_enabled`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether to notify the account when someone signs a document sent by its team through a template link.  |  |

