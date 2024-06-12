# SignatureRequestGetResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SignatureRequest** | Pointer to [**SignatureRequestResponse**](SignatureRequestResponse.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningResponse**](WarningResponse.md) | A list of warnings. | [optional] 

## Methods

### NewSignatureRequestGetResponse

`func NewSignatureRequestGetResponse() *SignatureRequestGetResponse`

NewSignatureRequestGetResponse instantiates a new SignatureRequestGetResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSignatureRequestGetResponseWithDefaults

`func NewSignatureRequestGetResponseWithDefaults() *SignatureRequestGetResponse`

NewSignatureRequestGetResponseWithDefaults instantiates a new SignatureRequestGetResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSignatureRequest

`func (o *SignatureRequestGetResponse) GetSignatureRequest() SignatureRequestResponse`

GetSignatureRequest returns the SignatureRequest field if non-nil, zero value otherwise.

### GetSignatureRequestOk

`func (o *SignatureRequestGetResponse) GetSignatureRequestOk() (*SignatureRequestResponse, bool)`

GetSignatureRequestOk returns a tuple with the SignatureRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignatureRequest

`func (o *SignatureRequestGetResponse) SetSignatureRequest(v SignatureRequestResponse)`

SetSignatureRequest sets SignatureRequest field to given value.

### HasSignatureRequest

`func (o *SignatureRequestGetResponse) HasSignatureRequest() bool`

HasSignatureRequest returns a boolean if a field has been set.

### GetWarnings

`func (o *SignatureRequestGetResponse) GetWarnings() []WarningResponse`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SignatureRequestGetResponse) GetWarningsOk() (*[]WarningResponse, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SignatureRequestGetResponse) SetWarnings(v []WarningResponse)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SignatureRequestGetResponse) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


