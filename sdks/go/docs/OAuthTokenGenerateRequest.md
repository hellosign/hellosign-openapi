# OAuthTokenGenerateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | **string** | The client id of the app requesting authorization. | 
**ClientSecret** | **string** | The secret token of your app. | 
**Code** | **string** | The code passed to your callback when the user granted access. | 
**GrantType** | **string** | When generating a new token use &#x60;authorization_code&#x60;. | [default to "authorization_code"]
**State** | **string** | Same as the state you specified earlier. | 

## Methods

### NewOAuthTokenGenerateRequest

`func NewOAuthTokenGenerateRequest(clientId string, clientSecret string, code string, grantType string, state string, ) *OAuthTokenGenerateRequest`

NewOAuthTokenGenerateRequest instantiates a new OAuthTokenGenerateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOAuthTokenGenerateRequestWithDefaults

`func NewOAuthTokenGenerateRequestWithDefaults() *OAuthTokenGenerateRequest`

NewOAuthTokenGenerateRequestWithDefaults instantiates a new OAuthTokenGenerateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClientId

`func (o *OAuthTokenGenerateRequest) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *OAuthTokenGenerateRequest) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *OAuthTokenGenerateRequest) SetClientId(v string)`

SetClientId sets ClientId field to given value.


### GetClientSecret

`func (o *OAuthTokenGenerateRequest) GetClientSecret() string`

GetClientSecret returns the ClientSecret field if non-nil, zero value otherwise.

### GetClientSecretOk

`func (o *OAuthTokenGenerateRequest) GetClientSecretOk() (*string, bool)`

GetClientSecretOk returns a tuple with the ClientSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientSecret

`func (o *OAuthTokenGenerateRequest) SetClientSecret(v string)`

SetClientSecret sets ClientSecret field to given value.


### GetCode

`func (o *OAuthTokenGenerateRequest) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *OAuthTokenGenerateRequest) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *OAuthTokenGenerateRequest) SetCode(v string)`

SetCode sets Code field to given value.


### GetGrantType

`func (o *OAuthTokenGenerateRequest) GetGrantType() string`

GetGrantType returns the GrantType field if non-nil, zero value otherwise.

### GetGrantTypeOk

`func (o *OAuthTokenGenerateRequest) GetGrantTypeOk() (*string, bool)`

GetGrantTypeOk returns a tuple with the GrantType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGrantType

`func (o *OAuthTokenGenerateRequest) SetGrantType(v string)`

SetGrantType sets GrantType field to given value.


### GetState

`func (o *OAuthTokenGenerateRequest) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *OAuthTokenGenerateRequest) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *OAuthTokenGenerateRequest) SetState(v string)`

SetState sets State field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


