# Dropbox::Sign::TeamSettingsUpdateRequest



## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `company` | [```StringSettingUpdate```](StringSettingUpdate.md) |  Company name associated with this account or team.  |  |
| `custom_signing_redirect_enabled` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether signers are redirected to a custom URL after completing a signature request.  |  |
| `custom_signing_redirect_url` | [```StringSettingUpdate```](StringSettingUpdate.md) |  URL where signers are redirected after completing a signature request when custom redirects are enabled.  |  |
| `custom_tagline` | [```StringSettingUpdate```](StringSettingUpdate.md) |  Custom tagline displayed with the account or team branding.  |  |
| `date_format` | [```DateFormatSettingUpdate```](DateFormatSettingUpdate.md) |  Date format used to display dates. List the setting in `unset` to inherit the default.  |  |
| `is_signature_reminders_enabled` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether automatic reminder emails are enabled for incomplete signature requests.  |  |
| `request_email_from` | [```StringSettingUpdate```](StringSettingUpdate.md) |  Sender name shown on signature request emails.  |  |
| `request_email_signature` | [```StringSettingUpdate```](StringSettingUpdate.md) |  Signature appended to signature request emails.  |  |
| `required_signature_types` | [```RequiredSignatureTypesSettingUpdate```](RequiredSignatureTypesSettingUpdate.md) |  Signature creation methods signers may use.  |  |
| `should_enable_tamper_proof` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether completed documents include a digital tamper-proof seal.  |  |
| `should_include_distinct_pdfs` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether completed documents remain as separate PDF files instead of being merged into one PDF.  |  |
| `should_offer_signer_access_code` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether senders can require an access code to verify a signer.  |  |
| `should_offer_signer_sms_authentication` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether senders can require SMS authentication to verify a signer.  |  |
| `should_remove_document_id` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether the Dropbox Sign document ID is hidden on sent documents.  |  |
| `data_residency` | [```DataResidencySettingUpdate```](DataResidencySettingUpdate.md) |  Storage region for team documents.  |  |
| `allow_team_delete_document_for_everyone` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether team members can delete a document for all participants.  |  |
| `allow_team_download_csv` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether team members can download CSV files.  |  |
| `lock_team_template_creation` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether team members are prevented from creating templates.  |  |
| `lock_team_template_gallery` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether team members are prevented from using the template gallery.  |  |
| `self_sign_message` | [```StringSettingUpdate```](StringSettingUpdate.md) |  Default message enforced for team members when they create self-signed documents.  |  |
| `self_sign_title` | [```StringSettingUpdate```](StringSettingUpdate.md) |  Default title enforced for team members when they create self-signed documents.  |  |
| `signature_request_message` | [```StringSettingUpdate```](StringSettingUpdate.md) |  Default message enforced for team members when they create signature requests.  |  |
| `signature_request_title` | [```StringSettingUpdate```](StringSettingUpdate.md) |  Default title enforced for team members when they create signature requests.  |  |
| `multifactor_auth_app` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether authenticator-app multifactor authentication is enabled for the team.  |  |
| `multifactor_auth_sms` | [```BooleanSettingUpdate```](BooleanSettingUpdate.md) |  Whether SMS multifactor authentication is enabled for the team.  |  |
| `unset` | ```Array<String>``` |  Setting names to clear so their values are inherited. A listed name cannot also be set or locked in the same request.  |  |

