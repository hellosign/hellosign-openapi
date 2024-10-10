

# AccountResponse



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `accountId`<sup>*_required_</sup> | ```String``` |  The ID of the Account  |  |
| `isLocked`<sup>*_required_</sup> | ```Boolean``` |  Returns `true` if the user has been locked out of their account by a team admin.  |  |
| `isPaidHs`<sup>*_required_</sup> | ```Boolean``` |  Returns `true` if the user has a paid Dropbox Sign account.  |  |
| `isPaidHf`<sup>*_required_</sup> | ```Boolean``` |  Returns `true` if the user has a paid HelloFax account.  |  |
| `quotas`<sup>*_required_</sup> | [```AccountResponseQuotas```](AccountResponseQuotas.md) |    |  |
| `emailAddress` | ```String``` |  The email address associated with the Account.  |  |
| `callbackUrl` | ```String``` |  The URL that Dropbox Sign events will `POST` to.  |  |
| `roleCode` | ```String``` |  The membership role for the team.  |  |
| `teamId` | ```String``` |  The id of the team account belongs to.  |  |
| `locale` | ```String``` |  The locale used in this Account. Check out the list of [supported locales](/api/reference/constants/#supported-locales) to learn more about the possible values.  |  |
| `usage` | [```AccountResponseUsage```](AccountResponseUsage.md) |    |  |



