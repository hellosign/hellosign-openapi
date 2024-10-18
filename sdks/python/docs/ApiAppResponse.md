# ApiAppResponse

Contains information about an API App.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `client_id`<sup>*_required_</sup> | ```str``` |  The app&#39;s client id  |  |
| `created_at`<sup>*_required_</sup> | ```int``` |  The time that the app was created  |  |
| `domains`<sup>*_required_</sup> | ```List[str]``` |  The domain name(s) associated with the app  |  |
| `name`<sup>*_required_</sup> | ```str``` |  The name of the app  |  |
| `is_approved`<sup>*_required_</sup> | ```bool``` |  Boolean to indicate if the app has been approved  |  |
| `options`<sup>*_required_</sup> | [```ApiAppResponseOptions```](ApiAppResponseOptions.md) |    |  |
| `owner_account`<sup>*_required_</sup> | [```ApiAppResponseOwnerAccount```](ApiAppResponseOwnerAccount.md) |    |  |
| `callback_url` | ```str``` |  The app&#39;s callback URL (for events)  |  |
| `oauth` | [```ApiAppResponseOAuth```](ApiAppResponseOAuth.md) |    |  |
| `white_labeling_options` | [```ApiAppResponseWhiteLabelingOptions```](ApiAppResponseWhiteLabelingOptions.md) |    |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

