# Dropbox.Sign.Model.OAuthTokenRefreshRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GrantType** | **string** |  When refreshing an existing token use `refresh_token`.  | [default to "refresh_token"]**RefreshToken** | **string** |  The token provided when you got the expired access token.  | **ClientId** | **string** |  The client ID for your API app. Mandatory from August 1st, 2025. Until then, required if the &quot;Client Credentials Required&quot; setting is enabled for token refresh; optional if disabled.  | [optional] **ClientSecret** | **string** |  The client secret for your API app. Mandatory from August 1st, 2025. Until then, required if the &quot;Client Credentials Required&quot; setting is enabled for token refresh; optional if disabled.  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

