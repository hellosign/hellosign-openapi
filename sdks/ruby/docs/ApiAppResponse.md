# Dropbox::Sign::ApiAppResponse

Contains information about an API App.

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `client_id`<sup>*_required_</sup> | ```String``` |  The app&#39;s client id  |  |
| `created_at`<sup>*_required_</sup> | ```Integer``` |  The time that the app was created  |  |
| `domains`<sup>*_required_</sup> | ```Array<String>``` |  The domain name(s) associated with the app  |  |
| `name`<sup>*_required_</sup> | ```String``` |  The name of the app  |  |
| `is_approved`<sup>*_required_</sup> | ```Boolean``` |  Boolean to indicate if the app has been approved  |  |
| `options`<sup>*_required_</sup> | [```ApiAppResponseOptions```](ApiAppResponseOptions.md) |    |  |
| `owner_account`<sup>*_required_</sup> | [```ApiAppResponseOwnerAccount```](ApiAppResponseOwnerAccount.md) |    |  |
| `callback_url` | ```String``` |  The app&#39;s callback URL (for events)  |  |
| `oauth` | [```ApiAppResponseOAuth```](ApiAppResponseOAuth.md) |    |  |
| `white_labeling_options` | [```ApiAppResponseWhiteLabelingOptions```](ApiAppResponseWhiteLabelingOptions.md) |    |  |

