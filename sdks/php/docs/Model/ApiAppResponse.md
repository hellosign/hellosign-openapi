# # ApiAppResponse

Contains information about an API App.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `client_id`<sup>*_required_</sup> | ```string``` |  The app&#39;s client id  |  |
| `created_at`<sup>*_required_</sup> | ```int``` |  The time that the app was created  |  |
| `domains`<sup>*_required_</sup> | ```string[]``` |  The domain name(s) associated with the app  |  |
| `name`<sup>*_required_</sup> | ```string``` |  The name of the app  |  |
| `is_approved`<sup>*_required_</sup> | ```bool``` |  Boolean to indicate if the app has been approved  |  |
| `options`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\ApiAppResponseOptions```](ApiAppResponseOptions.md) |    |  |
| `owner_account`<sup>*_required_</sup> | [```\Dropbox\Sign\Model\ApiAppResponseOwnerAccount```](ApiAppResponseOwnerAccount.md) |    |  |
| `callback_url` | ```string``` |  The app&#39;s callback URL (for events)  |  |
| `oauth` | [```\Dropbox\Sign\Model\ApiAppResponseOAuth```](ApiAppResponseOAuth.md) |    |  |
| `white_labeling_options` | [```\Dropbox\Sign\Model\ApiAppResponseWhiteLabelingOptions```](ApiAppResponseWhiteLabelingOptions.md) |    |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
