# AccountSettingsResponseSettings



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `company`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Company name associated with this account or team.  |  |
| `custom_signing_redirect_enabled`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Whether signers are redirected to a custom webpage after they sign. Setting this to `false` clears the stored custom signing redirect URL override, reverting it to the inherited value. A URL supplied in the same update is ignored.  |  |
| `custom_signing_redirect_url`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Webpage where signers are redirected after they sign, when custom redirects are enabled.  |  |
| `custom_tagline`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Company tagline shown with the account or team branding.  |  |
| `date_format`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Default date format in the editor and in the audit trail. Senders can still choose a different format for an individual date field.  |  |
| `is_signature_reminders_enabled`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Whether reminder emails are sent to signers 3 days and 7 days after a signature request is sent.  |  |
| `request_email_from`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Name shown in the From field of signature request emails. When unset, each user&#39;s first and last name is shown.  |  |
| `request_email_signature`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Text appended to the end of signature request emails.  |  |
| `required_signature_types`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Signature creation methods a signer is allowed to use.  |  |
| `should_enable_tamper_proof`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Whether a tamper-proof seal is applied to sent signature requests.  |  |
| `should_include_distinct_pdfs`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Whether completed documents remain as separate PDF files instead of being merged into one PDF.  |  |
| `should_offer_signer_access_code`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Whether senders can require a custom access code before a signer can open a document.  |  |
| `should_offer_signer_sms_authentication`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Whether senders can require a text-message verification code before a signer can open a document.  |  |
| `should_remove_document_id`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Whether the document ID is removed from all pages of sent documents.  |  |
| `is_notify_on_sign_enabled`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Whether to notify the account when someone signs a document it sent.  |  |
| `is_notify_on_view_enabled`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Whether to notify the account when someone opens a document it sent.  |  |
| `should_autocomplete`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Whether values entered in text fields are saved and suggested for future signature requests.  |  |
| `should_include_requested_pdfs`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Whether to email the account a PDF copy when a signature request it sent is completed.  |  |
| `should_include_requested_pdfs_for_others`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Whether to email a PDF copy to the other signers and CC recipients when a signature request is completed.  |  |
| `should_include_sent_doc_pdfs`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Whether to email the account a PDF copy when it sends a document.  |  |
| `should_include_sent_doc_pdfs_for_others`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Whether to email recipients a PDF copy, instead of only a link, when the account sends a document.  |  |
| `should_send_daily_summary`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Whether to send the account a daily email summarizing outstanding signature requests.  |  |
| `should_send_embedded_signature_conf_emails`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Whether to notify the account when it signs a document on a third-party site.  |  |
| `should_send_ordered_sr_email`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Whether to notify all parties when an ordered signature request starts.  |  |
| `should_send_outbound_conf_emails`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Whether to notify the account when it signs and sends a document.  |  |
| `template_link_signature_emails_enabled`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\SettingResponse```](SettingResponse.md) |  Whether to notify the account when someone signs a document sent by its team through a template link.  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
