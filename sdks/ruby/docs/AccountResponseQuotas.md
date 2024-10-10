# Dropbox::Sign::AccountResponseQuotas

Details concerning remaining monthly quotas.

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `api_signature_requests_left` | ```Integer``` |  API signature requests remaining. A value of `-1` means unlimited.  |  [default to 0] |
| `documents_left` | ```Integer``` |  Signature requests remaining. A value of `-1` means unlimited.  |  [default to 0] |
| `templates_total` | ```Integer``` |  Total API templates allowed. A value of `-1` means unlimited.  |  [default to 0] |
| `templates_left` | ```Integer``` |  API templates remaining. A value of `-1` means unlimited.  |  [default to 0] |
| `sms_verifications_left` | ```Integer``` |  SMS verifications remaining.  |  [default to 0] |
| `num_fax_pages_left` | ```Integer``` |  Number of fax pages left. A value of `-1` means unlimited.  |  [default to 0] |

