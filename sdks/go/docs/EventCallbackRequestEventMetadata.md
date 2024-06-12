# EventCallbackRequestEventMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RelatedSignatureId** | Pointer to **NullableString** | Signature ID for a specific signer. Applicable to &#x60;signature_request_signed&#x60; and &#x60;signature_request_viewed&#x60; events. | [optional] 
**ReportedForAccountId** | Pointer to **NullableString** | Account ID the event was reported for. | [optional] 
**ReportedForAppId** | Pointer to **NullableString** | App ID the event was reported for. | [optional] 
**EventMessage** | Pointer to **NullableString** | Message about a declined or failed (due to error) signature flow. | [optional] 

## Methods

### NewEventCallbackRequestEventMetadata

`func NewEventCallbackRequestEventMetadata() *EventCallbackRequestEventMetadata`

NewEventCallbackRequestEventMetadata instantiates a new EventCallbackRequestEventMetadata object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventCallbackRequestEventMetadataWithDefaults

`func NewEventCallbackRequestEventMetadataWithDefaults() *EventCallbackRequestEventMetadata`

NewEventCallbackRequestEventMetadataWithDefaults instantiates a new EventCallbackRequestEventMetadata object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRelatedSignatureId

`func (o *EventCallbackRequestEventMetadata) GetRelatedSignatureId() string`

GetRelatedSignatureId returns the RelatedSignatureId field if non-nil, zero value otherwise.

### GetRelatedSignatureIdOk

`func (o *EventCallbackRequestEventMetadata) GetRelatedSignatureIdOk() (*string, bool)`

GetRelatedSignatureIdOk returns a tuple with the RelatedSignatureId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelatedSignatureId

`func (o *EventCallbackRequestEventMetadata) SetRelatedSignatureId(v string)`

SetRelatedSignatureId sets RelatedSignatureId field to given value.

### HasRelatedSignatureId

`func (o *EventCallbackRequestEventMetadata) HasRelatedSignatureId() bool`

HasRelatedSignatureId returns a boolean if a field has been set.

### SetRelatedSignatureIdNil

`func (o *EventCallbackRequestEventMetadata) SetRelatedSignatureIdNil(b bool)`

 SetRelatedSignatureIdNil sets the value for RelatedSignatureId to be an explicit nil

### UnsetRelatedSignatureId
`func (o *EventCallbackRequestEventMetadata) UnsetRelatedSignatureId()`

UnsetRelatedSignatureId ensures that no value is present for RelatedSignatureId, not even an explicit nil
### GetReportedForAccountId

`func (o *EventCallbackRequestEventMetadata) GetReportedForAccountId() string`

GetReportedForAccountId returns the ReportedForAccountId field if non-nil, zero value otherwise.

### GetReportedForAccountIdOk

`func (o *EventCallbackRequestEventMetadata) GetReportedForAccountIdOk() (*string, bool)`

GetReportedForAccountIdOk returns a tuple with the ReportedForAccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportedForAccountId

`func (o *EventCallbackRequestEventMetadata) SetReportedForAccountId(v string)`

SetReportedForAccountId sets ReportedForAccountId field to given value.

### HasReportedForAccountId

`func (o *EventCallbackRequestEventMetadata) HasReportedForAccountId() bool`

HasReportedForAccountId returns a boolean if a field has been set.

### SetReportedForAccountIdNil

`func (o *EventCallbackRequestEventMetadata) SetReportedForAccountIdNil(b bool)`

 SetReportedForAccountIdNil sets the value for ReportedForAccountId to be an explicit nil

### UnsetReportedForAccountId
`func (o *EventCallbackRequestEventMetadata) UnsetReportedForAccountId()`

UnsetReportedForAccountId ensures that no value is present for ReportedForAccountId, not even an explicit nil
### GetReportedForAppId

`func (o *EventCallbackRequestEventMetadata) GetReportedForAppId() string`

GetReportedForAppId returns the ReportedForAppId field if non-nil, zero value otherwise.

### GetReportedForAppIdOk

`func (o *EventCallbackRequestEventMetadata) GetReportedForAppIdOk() (*string, bool)`

GetReportedForAppIdOk returns a tuple with the ReportedForAppId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportedForAppId

`func (o *EventCallbackRequestEventMetadata) SetReportedForAppId(v string)`

SetReportedForAppId sets ReportedForAppId field to given value.

### HasReportedForAppId

`func (o *EventCallbackRequestEventMetadata) HasReportedForAppId() bool`

HasReportedForAppId returns a boolean if a field has been set.

### SetReportedForAppIdNil

`func (o *EventCallbackRequestEventMetadata) SetReportedForAppIdNil(b bool)`

 SetReportedForAppIdNil sets the value for ReportedForAppId to be an explicit nil

### UnsetReportedForAppId
`func (o *EventCallbackRequestEventMetadata) UnsetReportedForAppId()`

UnsetReportedForAppId ensures that no value is present for ReportedForAppId, not even an explicit nil
### GetEventMessage

`func (o *EventCallbackRequestEventMetadata) GetEventMessage() string`

GetEventMessage returns the EventMessage field if non-nil, zero value otherwise.

### GetEventMessageOk

`func (o *EventCallbackRequestEventMetadata) GetEventMessageOk() (*string, bool)`

GetEventMessageOk returns a tuple with the EventMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventMessage

`func (o *EventCallbackRequestEventMetadata) SetEventMessage(v string)`

SetEventMessage sets EventMessage field to given value.

### HasEventMessage

`func (o *EventCallbackRequestEventMetadata) HasEventMessage() bool`

HasEventMessage returns a boolean if a field has been set.

### SetEventMessageNil

`func (o *EventCallbackRequestEventMetadata) SetEventMessageNil(b bool)`

 SetEventMessageNil sets the value for EventMessage to be an explicit nil

### UnsetEventMessage
`func (o *EventCallbackRequestEventMetadata) UnsetEventMessage()`

UnsetEventMessage ensures that no value is present for EventMessage, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


