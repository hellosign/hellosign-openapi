

# TemplateResponseAccount



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `accountId`<sup>*_required_</sup> | ```String``` |  The id of the Account.  |  |
| `isLocked`<sup>*_required_</sup> | ```Boolean``` |  Returns `true` if the user has been locked out of their account by a team admin.  |  |
| `isPaidHs`<sup>*_required_</sup> | ```Boolean``` |  Returns `true` if the user has a paid Dropbox Sign account.  |  |
| `isPaidHf`<sup>*_required_</sup> | ```Boolean``` |  Returns `true` if the user has a paid HelloFax account.  |  |
| `quotas`<sup>*_required_</sup> | [```TemplateResponseAccountQuota```](TemplateResponseAccountQuota.md) |    |  |
| `emailAddress` | ```String``` |  The email address associated with the Account.  |  |



