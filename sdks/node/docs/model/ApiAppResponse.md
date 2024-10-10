# # ApiAppResponse

Contains information about an API App.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `clientId`<sup>*_required_</sup> | ```string``` |  The app&#39;s client id  |  |
| `createdAt`<sup>*_required_</sup> | ```number``` |  The time that the app was created  |  |
| `domains`<sup>*_required_</sup> | ```Array<string>``` |  The domain name(s) associated with the app  |  |
| `name`<sup>*_required_</sup> | ```string``` |  The name of the app  |  |
| `isApproved`<sup>*_required_</sup> | ```boolean``` |  Boolean to indicate if the app has been approved  |  |
| `options`<sup>*_required_</sup> | [```ApiAppResponseOptions```](ApiAppResponseOptions.md) |    |  |
| `ownerAccount`<sup>*_required_</sup> | [```ApiAppResponseOwnerAccount```](ApiAppResponseOwnerAccount.md) |    |  |
| `callbackUrl` | ```string``` |  The app&#39;s callback URL (for events)  |  |
| `oauth` | [```ApiAppResponseOAuth```](ApiAppResponseOAuth.md) |    |  |
| `whiteLabelingOptions` | [```ApiAppResponseWhiteLabelingOptions```](ApiAppResponseWhiteLabelingOptions.md) |    |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
