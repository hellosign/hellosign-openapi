# EmbeddedEditUrlRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowEditCcs** | Pointer to **bool** | This allows the requester to enable/disable to add or change CC roles when editing the template. | [optional] [default to false]
**CcRoles** | Pointer to **[]string** | The CC roles that must be assigned when using the template to send a signature request. To remove all CC roles, pass in a single role with no name. For use in a POST request. | [optional] 
**EditorOptions** | Pointer to [**SubEditorOptions**](SubEditorOptions.md) |  | [optional] 
**ForceSignerRoles** | Pointer to **bool** | Provide users the ability to review/edit the template signer roles. | [optional] [default to false]
**ForceSubjectMessage** | Pointer to **bool** | Provide users the ability to review/edit the template subject and message. | [optional] [default to false]
**MergeFields** | Pointer to [**[]SubMergeField**](SubMergeField.md) | Add additional merge fields to the template, which can be used used to pre-fill data by passing values into signature requests made with that template.  Remove all merge fields on the template by passing an empty array &#x60;[]&#x60;. | [optional] 
**PreviewOnly** | Pointer to **bool** | This allows the requester to enable the preview experience (i.e. does not allow the requester&#39;s end user to add any additional fields via the editor).  **Note**: This parameter overwrites &#x60;show_preview&#x3D;true&#x60; (if set). | [optional] [default to false]
**ShowPreview** | Pointer to **bool** | This allows the requester to enable the editor/preview experience. | [optional] [default to false]
**ShowProgressStepper** | Pointer to **bool** | When only one step remains in the signature request process and this parameter is set to &#x60;false&#x60; then the progress stepper will be hidden. | [optional] [default to true]
**TestMode** | Pointer to **bool** | Whether this is a test, locked templates will only be available for editing if this is set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]

## Methods

### NewEmbeddedEditUrlRequest

`func NewEmbeddedEditUrlRequest() *EmbeddedEditUrlRequest`

NewEmbeddedEditUrlRequest instantiates a new EmbeddedEditUrlRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEmbeddedEditUrlRequestWithDefaults

`func NewEmbeddedEditUrlRequestWithDefaults() *EmbeddedEditUrlRequest`

NewEmbeddedEditUrlRequestWithDefaults instantiates a new EmbeddedEditUrlRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowEditCcs

`func (o *EmbeddedEditUrlRequest) GetAllowEditCcs() bool`

GetAllowEditCcs returns the AllowEditCcs field if non-nil, zero value otherwise.

### GetAllowEditCcsOk

`func (o *EmbeddedEditUrlRequest) GetAllowEditCcsOk() (*bool, bool)`

GetAllowEditCcsOk returns a tuple with the AllowEditCcs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowEditCcs

`func (o *EmbeddedEditUrlRequest) SetAllowEditCcs(v bool)`

SetAllowEditCcs sets AllowEditCcs field to given value.

### HasAllowEditCcs

`func (o *EmbeddedEditUrlRequest) HasAllowEditCcs() bool`

HasAllowEditCcs returns a boolean if a field has been set.

### GetCcRoles

`func (o *EmbeddedEditUrlRequest) GetCcRoles() []string`

GetCcRoles returns the CcRoles field if non-nil, zero value otherwise.

### GetCcRolesOk

`func (o *EmbeddedEditUrlRequest) GetCcRolesOk() (*[]string, bool)`

GetCcRolesOk returns a tuple with the CcRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcRoles

`func (o *EmbeddedEditUrlRequest) SetCcRoles(v []string)`

SetCcRoles sets CcRoles field to given value.

### HasCcRoles

`func (o *EmbeddedEditUrlRequest) HasCcRoles() bool`

HasCcRoles returns a boolean if a field has been set.

### GetEditorOptions

`func (o *EmbeddedEditUrlRequest) GetEditorOptions() SubEditorOptions`

GetEditorOptions returns the EditorOptions field if non-nil, zero value otherwise.

### GetEditorOptionsOk

`func (o *EmbeddedEditUrlRequest) GetEditorOptionsOk() (*SubEditorOptions, bool)`

GetEditorOptionsOk returns a tuple with the EditorOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditorOptions

`func (o *EmbeddedEditUrlRequest) SetEditorOptions(v SubEditorOptions)`

SetEditorOptions sets EditorOptions field to given value.

### HasEditorOptions

`func (o *EmbeddedEditUrlRequest) HasEditorOptions() bool`

HasEditorOptions returns a boolean if a field has been set.

### GetForceSignerRoles

`func (o *EmbeddedEditUrlRequest) GetForceSignerRoles() bool`

GetForceSignerRoles returns the ForceSignerRoles field if non-nil, zero value otherwise.

### GetForceSignerRolesOk

`func (o *EmbeddedEditUrlRequest) GetForceSignerRolesOk() (*bool, bool)`

GetForceSignerRolesOk returns a tuple with the ForceSignerRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForceSignerRoles

`func (o *EmbeddedEditUrlRequest) SetForceSignerRoles(v bool)`

SetForceSignerRoles sets ForceSignerRoles field to given value.

### HasForceSignerRoles

`func (o *EmbeddedEditUrlRequest) HasForceSignerRoles() bool`

HasForceSignerRoles returns a boolean if a field has been set.

### GetForceSubjectMessage

`func (o *EmbeddedEditUrlRequest) GetForceSubjectMessage() bool`

GetForceSubjectMessage returns the ForceSubjectMessage field if non-nil, zero value otherwise.

### GetForceSubjectMessageOk

`func (o *EmbeddedEditUrlRequest) GetForceSubjectMessageOk() (*bool, bool)`

GetForceSubjectMessageOk returns a tuple with the ForceSubjectMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForceSubjectMessage

`func (o *EmbeddedEditUrlRequest) SetForceSubjectMessage(v bool)`

SetForceSubjectMessage sets ForceSubjectMessage field to given value.

### HasForceSubjectMessage

`func (o *EmbeddedEditUrlRequest) HasForceSubjectMessage() bool`

HasForceSubjectMessage returns a boolean if a field has been set.

### GetMergeFields

`func (o *EmbeddedEditUrlRequest) GetMergeFields() []SubMergeField`

GetMergeFields returns the MergeFields field if non-nil, zero value otherwise.

### GetMergeFieldsOk

`func (o *EmbeddedEditUrlRequest) GetMergeFieldsOk() (*[]SubMergeField, bool)`

GetMergeFieldsOk returns a tuple with the MergeFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMergeFields

`func (o *EmbeddedEditUrlRequest) SetMergeFields(v []SubMergeField)`

SetMergeFields sets MergeFields field to given value.

### HasMergeFields

`func (o *EmbeddedEditUrlRequest) HasMergeFields() bool`

HasMergeFields returns a boolean if a field has been set.

### GetPreviewOnly

`func (o *EmbeddedEditUrlRequest) GetPreviewOnly() bool`

GetPreviewOnly returns the PreviewOnly field if non-nil, zero value otherwise.

### GetPreviewOnlyOk

`func (o *EmbeddedEditUrlRequest) GetPreviewOnlyOk() (*bool, bool)`

GetPreviewOnlyOk returns a tuple with the PreviewOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviewOnly

`func (o *EmbeddedEditUrlRequest) SetPreviewOnly(v bool)`

SetPreviewOnly sets PreviewOnly field to given value.

### HasPreviewOnly

`func (o *EmbeddedEditUrlRequest) HasPreviewOnly() bool`

HasPreviewOnly returns a boolean if a field has been set.

### GetShowPreview

`func (o *EmbeddedEditUrlRequest) GetShowPreview() bool`

GetShowPreview returns the ShowPreview field if non-nil, zero value otherwise.

### GetShowPreviewOk

`func (o *EmbeddedEditUrlRequest) GetShowPreviewOk() (*bool, bool)`

GetShowPreviewOk returns a tuple with the ShowPreview field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowPreview

`func (o *EmbeddedEditUrlRequest) SetShowPreview(v bool)`

SetShowPreview sets ShowPreview field to given value.

### HasShowPreview

`func (o *EmbeddedEditUrlRequest) HasShowPreview() bool`

HasShowPreview returns a boolean if a field has been set.

### GetShowProgressStepper

`func (o *EmbeddedEditUrlRequest) GetShowProgressStepper() bool`

GetShowProgressStepper returns the ShowProgressStepper field if non-nil, zero value otherwise.

### GetShowProgressStepperOk

`func (o *EmbeddedEditUrlRequest) GetShowProgressStepperOk() (*bool, bool)`

GetShowProgressStepperOk returns a tuple with the ShowProgressStepper field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowProgressStepper

`func (o *EmbeddedEditUrlRequest) SetShowProgressStepper(v bool)`

SetShowProgressStepper sets ShowProgressStepper field to given value.

### HasShowProgressStepper

`func (o *EmbeddedEditUrlRequest) HasShowProgressStepper() bool`

HasShowProgressStepper returns a boolean if a field has been set.

### GetTestMode

`func (o *EmbeddedEditUrlRequest) GetTestMode() bool`

GetTestMode returns the TestMode field if non-nil, zero value otherwise.

### GetTestModeOk

`func (o *EmbeddedEditUrlRequest) GetTestModeOk() (*bool, bool)`

GetTestModeOk returns a tuple with the TestMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTestMode

`func (o *EmbeddedEditUrlRequest) SetTestMode(v bool)`

SetTestMode sets TestMode field to given value.

### HasTestMode

`func (o *EmbeddedEditUrlRequest) HasTestMode() bool`

HasTestMode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


