# SubOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CanInsertEverywhere** | Pointer to **bool** | Determines if signers can use \&quot;Insert Everywhere\&quot; when signing a document. | [optional] [default to false]

## Methods

### NewSubOptions

`func NewSubOptions() *SubOptions`

NewSubOptions instantiates a new SubOptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubOptionsWithDefaults

`func NewSubOptionsWithDefaults() *SubOptions`

NewSubOptionsWithDefaults instantiates a new SubOptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCanInsertEverywhere

`func (o *SubOptions) GetCanInsertEverywhere() bool`

GetCanInsertEverywhere returns the CanInsertEverywhere field if non-nil, zero value otherwise.

### GetCanInsertEverywhereOk

`func (o *SubOptions) GetCanInsertEverywhereOk() (*bool, bool)`

GetCanInsertEverywhereOk returns a tuple with the CanInsertEverywhere field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanInsertEverywhere

`func (o *SubOptions) SetCanInsertEverywhere(v bool)`

SetCanInsertEverywhere sets CanInsertEverywhere field to given value.

### HasCanInsertEverywhere

`func (o *SubOptions) HasCanInsertEverywhere() bool`

HasCanInsertEverywhere returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


