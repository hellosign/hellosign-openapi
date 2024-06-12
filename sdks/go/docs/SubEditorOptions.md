# SubEditorOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowEditSigners** | Pointer to **bool** | Allows requesters to edit the list of signers | [optional] [default to false]
**AllowEditDocuments** | Pointer to **bool** | Allows requesters to edit documents, including delete and add | [optional] [default to false]

## Methods

### NewSubEditorOptions

`func NewSubEditorOptions() *SubEditorOptions`

NewSubEditorOptions instantiates a new SubEditorOptions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubEditorOptionsWithDefaults

`func NewSubEditorOptionsWithDefaults() *SubEditorOptions`

NewSubEditorOptionsWithDefaults instantiates a new SubEditorOptions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowEditSigners

`func (o *SubEditorOptions) GetAllowEditSigners() bool`

GetAllowEditSigners returns the AllowEditSigners field if non-nil, zero value otherwise.

### GetAllowEditSignersOk

`func (o *SubEditorOptions) GetAllowEditSignersOk() (*bool, bool)`

GetAllowEditSignersOk returns a tuple with the AllowEditSigners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowEditSigners

`func (o *SubEditorOptions) SetAllowEditSigners(v bool)`

SetAllowEditSigners sets AllowEditSigners field to given value.

### HasAllowEditSigners

`func (o *SubEditorOptions) HasAllowEditSigners() bool`

HasAllowEditSigners returns a boolean if a field has been set.

### GetAllowEditDocuments

`func (o *SubEditorOptions) GetAllowEditDocuments() bool`

GetAllowEditDocuments returns the AllowEditDocuments field if non-nil, zero value otherwise.

### GetAllowEditDocumentsOk

`func (o *SubEditorOptions) GetAllowEditDocumentsOk() (*bool, bool)`

GetAllowEditDocumentsOk returns a tuple with the AllowEditDocuments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowEditDocuments

`func (o *SubEditorOptions) SetAllowEditDocuments(v bool)`

SetAllowEditDocuments sets AllowEditDocuments field to given value.

### HasAllowEditDocuments

`func (o *SubEditorOptions) HasAllowEditDocuments() bool`

HasAllowEditDocuments returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


