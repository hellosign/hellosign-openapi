# EventCallbackRequestEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventTime** | **string** | Time the event was created (using Unix time). | 
**EventType** | **string** | Type of callback event that was triggered. | 
**EventHash** | **string** | Generated hash used to verify source of event data. | 
**EventMetadata** | Pointer to [**EventCallbackRequestEventMetadata**](EventCallbackRequestEventMetadata.md) |  | [optional] 

## Methods

### NewEventCallbackRequestEvent

`func NewEventCallbackRequestEvent(eventTime string, eventType string, eventHash string, ) *EventCallbackRequestEvent`

NewEventCallbackRequestEvent instantiates a new EventCallbackRequestEvent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventCallbackRequestEventWithDefaults

`func NewEventCallbackRequestEventWithDefaults() *EventCallbackRequestEvent`

NewEventCallbackRequestEventWithDefaults instantiates a new EventCallbackRequestEvent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventTime

`func (o *EventCallbackRequestEvent) GetEventTime() string`

GetEventTime returns the EventTime field if non-nil, zero value otherwise.

### GetEventTimeOk

`func (o *EventCallbackRequestEvent) GetEventTimeOk() (*string, bool)`

GetEventTimeOk returns a tuple with the EventTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTime

`func (o *EventCallbackRequestEvent) SetEventTime(v string)`

SetEventTime sets EventTime field to given value.


### GetEventType

`func (o *EventCallbackRequestEvent) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *EventCallbackRequestEvent) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *EventCallbackRequestEvent) SetEventType(v string)`

SetEventType sets EventType field to given value.


### GetEventHash

`func (o *EventCallbackRequestEvent) GetEventHash() string`

GetEventHash returns the EventHash field if non-nil, zero value otherwise.

### GetEventHashOk

`func (o *EventCallbackRequestEvent) GetEventHashOk() (*string, bool)`

GetEventHashOk returns a tuple with the EventHash field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventHash

`func (o *EventCallbackRequestEvent) SetEventHash(v string)`

SetEventHash sets EventHash field to given value.


### GetEventMetadata

`func (o *EventCallbackRequestEvent) GetEventMetadata() EventCallbackRequestEventMetadata`

GetEventMetadata returns the EventMetadata field if non-nil, zero value otherwise.

### GetEventMetadataOk

`func (o *EventCallbackRequestEvent) GetEventMetadataOk() (*EventCallbackRequestEventMetadata, bool)`

GetEventMetadataOk returns a tuple with the EventMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventMetadata

`func (o *EventCallbackRequestEvent) SetEventMetadata(v EventCallbackRequestEventMetadata)`

SetEventMetadata sets EventMetadata field to given value.

### HasEventMetadata

`func (o *EventCallbackRequestEvent) HasEventMetadata() bool`

HasEventMetadata returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


