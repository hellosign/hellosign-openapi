

# OAuthTokenGenerateRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `clientId`<sup>*_required_</sup> | ```String``` |  The client id of the app requesting authorization.  |  |
| `clientSecret`<sup>*_required_</sup> | ```String``` |  The secret token of your app.  |  |
| `code`<sup>*_required_</sup> | ```String``` |  The code passed to your callback when the user granted access.  |  |
| `grantType`<sup>*_required_</sup> | ```String``` |  When generating a new token use `authorization_code`.  |  |
| `state`<sup>*_required_</sup> | ```String``` |  Same as the state you specified earlier.  |  |



