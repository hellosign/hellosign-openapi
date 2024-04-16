# OAuthTokenRefreshRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GrantType** | **string** | When refreshing an existing token use &#x60;refresh_token&#x60;. | [default to "refresh_token"]
**RefreshToken** | **string** | The token provided when you got the expired access token. | 

## Methods

### NewOAuthTokenRefreshRequest

`func NewOAuthTokenRefreshRequest(grantType string, refreshToken string, ) *OAuthTokenRefreshRequest`

NewOAuthTokenRefreshRequest instantiates a new OAuthTokenRefreshRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOAuthTokenRefreshRequestWithDefaults

`func NewOAuthTokenRefreshRequestWithDefaults() *OAuthTokenRefreshRequest`

NewOAuthTokenRefreshRequestWithDefaults instantiates a new OAuthTokenRefreshRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGrantType

`func (o *OAuthTokenRefreshRequest) GetGrantType() string`

GetGrantType returns the GrantType field if non-nil, zero value otherwise.

### GetGrantTypeOk

`func (o *OAuthTokenRefreshRequest) GetGrantTypeOk() (*string, bool)`

GetGrantTypeOk returns a tuple with the GrantType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGrantType

`func (o *OAuthTokenRefreshRequest) SetGrantType(v string)`

SetGrantType sets GrantType field to given value.


### GetRefreshToken

`func (o *OAuthTokenRefreshRequest) GetRefreshToken() string`

GetRefreshToken returns the RefreshToken field if non-nil, zero value otherwise.

### GetRefreshTokenOk

`func (o *OAuthTokenRefreshRequest) GetRefreshTokenOk() (*string, bool)`

GetRefreshTokenOk returns a tuple with the RefreshToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefreshToken

`func (o *OAuthTokenRefreshRequest) SetRefreshToken(v string)`

SetRefreshToken sets RefreshToken field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


