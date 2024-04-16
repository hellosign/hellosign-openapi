# EventCallbackRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Event** | [**EventCallbackRequestEvent**](EventCallbackRequestEvent.md) |  | 
**Account** | Pointer to [**AccountResponse**](AccountResponse.md) |  | [optional] 
**SignatureRequest** | Pointer to [**SignatureRequestResponse**](SignatureRequestResponse.md) |  | [optional] 
**Template** | Pointer to [**TemplateResponse**](TemplateResponse.md) |  | [optional] 

## Methods

### NewEventCallbackRequest

`func NewEventCallbackRequest(event EventCallbackRequestEvent, ) *EventCallbackRequest`

NewEventCallbackRequest instantiates a new EventCallbackRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventCallbackRequestWithDefaults

`func NewEventCallbackRequestWithDefaults() *EventCallbackRequest`

NewEventCallbackRequestWithDefaults instantiates a new EventCallbackRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEvent

`func (o *EventCallbackRequest) GetEvent() EventCallbackRequestEvent`

GetEvent returns the Event field if non-nil, zero value otherwise.

### GetEventOk

`func (o *EventCallbackRequest) GetEventOk() (*EventCallbackRequestEvent, bool)`

GetEventOk returns a tuple with the Event field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvent

`func (o *EventCallbackRequest) SetEvent(v EventCallbackRequestEvent)`

SetEvent sets Event field to given value.


### GetAccount

`func (o *EventCallbackRequest) GetAccount() AccountResponse`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *EventCallbackRequest) GetAccountOk() (*AccountResponse, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *EventCallbackRequest) SetAccount(v AccountResponse)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *EventCallbackRequest) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### GetSignatureRequest

`func (o *EventCallbackRequest) GetSignatureRequest() SignatureRequestResponse`

GetSignatureRequest returns the SignatureRequest field if non-nil, zero value otherwise.

### GetSignatureRequestOk

`func (o *EventCallbackRequest) GetSignatureRequestOk() (*SignatureRequestResponse, bool)`

GetSignatureRequestOk returns a tuple with the SignatureRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignatureRequest

`func (o *EventCallbackRequest) SetSignatureRequest(v SignatureRequestResponse)`

SetSignatureRequest sets SignatureRequest field to given value.

### HasSignatureRequest

`func (o *EventCallbackRequest) HasSignatureRequest() bool`

HasSignatureRequest returns a boolean if a field has been set.

### GetTemplate

`func (o *EventCallbackRequest) GetTemplate() TemplateResponse`

GetTemplate returns the Template field if non-nil, zero value otherwise.

### GetTemplateOk

`func (o *EventCallbackRequest) GetTemplateOk() (*TemplateResponse, bool)`

GetTemplateOk returns a tuple with the Template field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplate

`func (o *EventCallbackRequest) SetTemplate(v TemplateResponse)`

SetTemplate sets Template field to given value.

### HasTemplate

`func (o *EventCallbackRequest) HasTemplate() bool`

HasTemplate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


