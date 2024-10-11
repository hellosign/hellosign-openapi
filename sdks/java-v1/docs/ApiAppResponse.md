

# ApiAppResponse

Contains information about an API App.

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `clientId`<sup>*_required_</sup> | ```String``` |  The app&#39;s client id  |  |
| `createdAt`<sup>*_required_</sup> | ```Integer``` |  The time that the app was created  |  |
| `domains`<sup>*_required_</sup> | ```List<String>``` |  The domain name(s) associated with the app  |  |
| `name`<sup>*_required_</sup> | ```String``` |  The name of the app  |  |
| `isApproved`<sup>*_required_</sup> | ```Boolean``` |  Boolean to indicate if the app has been approved  |  |
| `options`<sup>*_required_</sup> | [```ApiAppResponseOptions```](ApiAppResponseOptions.md) |    |  |
| `ownerAccount`<sup>*_required_</sup> | [```ApiAppResponseOwnerAccount```](ApiAppResponseOwnerAccount.md) |    |  |
| `callbackUrl` | ```String``` |  The app&#39;s callback URL (for events)  |  |
| `oauth` | [```ApiAppResponseOAuth```](ApiAppResponseOAuth.md) |    |  |
| `whiteLabelingOptions` | [```ApiAppResponseWhiteLabelingOptions```](ApiAppResponseWhiteLabelingOptions.md) |    |  |



