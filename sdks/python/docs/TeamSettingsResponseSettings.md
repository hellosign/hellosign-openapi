# TeamSettingsResponseSettings



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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
| `data_residency`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Storage region for team documents.  |  |
| `allow_team_delete_document_for_everyone`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether team members can delete a document for all participants.  |  |
| `allow_team_download_csv`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether team members can download CSV files.  |  |
| `lock_team_template_creation`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether team members are prevented from creating templates.  |  |
| `lock_team_template_gallery`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether team members are prevented from using the template gallery.  |  |
| `self_sign_message`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Default message enforced for team members when they create self-signed documents.  |  |
| `self_sign_title`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Default title enforced for team members when they create self-signed documents.  |  |
| `signature_request_message`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Default message enforced for team members when they create signature requests.  |  |
| `signature_request_title`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Default title enforced for team members when they create signature requests.  |  |
| `multifactor_auth_app`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether authenticator-app multifactor authentication is enabled for the team.  |  |
| `multifactor_auth_sms`<sup>*_required_</sup> | [```SettingResponse```](SettingResponse.md) |  Whether SMS multifactor authentication is enabled for the team.  |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


