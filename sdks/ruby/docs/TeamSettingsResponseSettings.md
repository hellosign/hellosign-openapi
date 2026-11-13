# Dropbox::Sign::TeamSettingsResponseSettings



## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `company`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Company name associated with this account or team.  |  |
| `custom_signing_redirect_enabled`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether signers are redirected to a custom webpage after they sign. Setting this to `false` clears the stored custom signing redirect URL override, reverting it to the inherited value. A URL supplied in the same update is ignored.  |  |
| `custom_signing_redirect_url`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Webpage where signers are redirected after they sign, when custom redirects are enabled.  |  |
| `custom_tagline`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Company tagline shown with the account or team branding.  |  |
| `date_format`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Default date format in the editor and in the audit trail. Senders can still choose a different format for an individual date field.  |  |
| `is_signature_reminders_enabled`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether reminder emails are sent to signers 3 days and 7 days after a signature request is sent.  |  |
| `request_email_from`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Name shown in the From field of signature request emails. When unset, each user&#39;s first and last name is shown.  |  |
| `request_email_signature`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Text appended to the end of signature request emails.  |  |
| `required_signature_types`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Signature creation methods a signer is allowed to use.  |  |
| `should_enable_tamper_proof`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether a tamper-proof seal is applied to sent signature requests.  |  |
| `should_include_distinct_pdfs`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether completed documents remain as separate PDF files instead of being merged into one PDF.  |  |
| `should_offer_signer_access_code`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether senders can require a custom access code before a signer can open a document.  |  |
| `should_offer_signer_sms_authentication`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether senders can require a text-message verification code before a signer can open a document.  |  |
| `should_remove_document_id`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether the document ID is removed from all pages of sent documents.  |  |
| `data_residency`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Region where the team&#39;s documents are stored at rest.  |  |
| `allow_team_delete_document_for_everyone`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether the sender, in addition to admins, can permanently delete a document from Dropbox Sign and from every participant account.  |  |
| `allow_team_download_csv`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether the sender, in addition to admins, can download document data as a CSV.  |  |
| `lock_team_template_creation`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  When enabled, only admins can create and edit templates and template links.  |  |
| `lock_team_template_gallery`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  When enabled, only admins can access and use the template gallery.  |  |
| `self_sign_message`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Default message for self-signed documents created by team members. Lock this setting to prevent members from changing it.  |  |
| `self_sign_title`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Default document title for self-signed documents created by team members. Lock this setting to prevent members from changing it.  |  |
| `signature_request_message`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Default email message for signature requests created by team members. Lock this setting to prevent members from changing it.  |  |
| `signature_request_title`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Default document title for signature requests created by team members. Lock this setting to prevent members from changing it.  |  |
| `multifactor_auth_app`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether an authenticator app is an allowed multifactor authentication method for the team. Enabling either method requires members to set it up at their next sign-in.  |  |
| `multifactor_auth_sms`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether SMS verification is an allowed multifactor authentication method for the team. Enabling either method requires members to set it up at their next sign-in. SMS is the fallback when an authenticator app is also enabled.  |  |
| `qualified_esignature_enabled`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether qualified electronic signatures are enabled for the team.  |  |
| `sms_signature_delivery`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether signature requests can be delivered by SMS.  |  |
| `nom151_enabled`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether NOM-151 compliance is enabled for the team.  |  |
| `should_enable_in_person_signing`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether in-person signing is enabled for the team.  |  |
| `everyone_has_signed_email`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Email address notified when everyone has signed.  |  |
| `timezone`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  The team&#39;s time zone identifier.  |  |
| `notify_cc_recipients_setting`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Events for which CC recipients receive notifications.  |  |

