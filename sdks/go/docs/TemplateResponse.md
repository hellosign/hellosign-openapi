# TemplateResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateId** | Pointer to **string** | The id of the Template. | [optional] 
**Title** | Pointer to **string** | The title of the Template. This will also be the default subject of the message sent to signers when using this Template to send a SignatureRequest. This can be overridden when sending the SignatureRequest. | [optional] 
**Message** | Pointer to **string** | The default message that will be sent to signers when using this Template to send a SignatureRequest. This can be overridden when sending the SignatureRequest. | [optional] 
**UpdatedAt** | Pointer to **int32** | Time the template was last updated. | [optional] 
**IsEmbedded** | Pointer to **NullableBool** | &#x60;true&#x60; if this template was created using an embedded flow, &#x60;false&#x60; if it was created on our website. | [optional] 
**IsCreator** | Pointer to **NullableBool** | &#x60;true&#x60; if you are the owner of this template, &#x60;false&#x60; if it&#39;s been shared with you by a team member. | [optional] 
**CanEdit** | Pointer to **NullableBool** | Indicates whether edit rights have been granted to you by the owner (always &#x60;true&#x60; if that&#39;s you). | [optional] 
**IsLocked** | Pointer to **NullableBool** | Indicates whether the template is locked. If &#x60;true&#x60;, then the template was created outside your quota and can only be used in &#x60;test_mode&#x60;. If &#x60;false&#x60;, then the template is within your quota and can be used to create signature requests. | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | The metadata attached to the template. | [optional] 
**SignerRoles** | Pointer to [**[]TemplateResponseSignerRole**](TemplateResponseSignerRole.md) | An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template. | [optional] 
**CcRoles** | Pointer to [**[]TemplateResponseCCRole**](TemplateResponseCCRole.md) | An array of the designated CC roles that must be specified when sending a SignatureRequest using this Template. | [optional] 
**Documents** | Pointer to [**[]TemplateResponseDocument**](TemplateResponseDocument.md) | An array describing each document associated with this Template. Includes form field data for each document. | [optional] 
**CustomFields** | Pointer to [**[]TemplateResponseDocumentCustomFieldBase**](TemplateResponseDocumentCustomFieldBase.md) | Deprecated. Use &#x60;custom_fields&#x60; inside the [documents](https://developers.hellosign.com/api/reference/operation/templateGet/#!c&#x3D;200&amp;path&#x3D;template/documents&amp;t&#x3D;response) array instead. | [optional] 
**NamedFormFields** | Pointer to [**[]TemplateResponseDocumentFormFieldBase**](TemplateResponseDocumentFormFieldBase.md) | Deprecated. Use &#x60;form_fields&#x60; inside the [documents](https://developers.hellosign.com/api/reference/operation/templateGet/#!c&#x3D;200&amp;path&#x3D;template/documents&amp;t&#x3D;response) array instead. | [optional] 
**Accounts** | Pointer to [**[]TemplateResponseAccount**](TemplateResponseAccount.md) | An array of the Accounts that can use this Template. | [optional] 

## Methods

### NewTemplateResponse

`func NewTemplateResponse() *TemplateResponse`

NewTemplateResponse instantiates a new TemplateResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateResponseWithDefaults

`func NewTemplateResponseWithDefaults() *TemplateResponse`

NewTemplateResponseWithDefaults instantiates a new TemplateResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateId

`func (o *TemplateResponse) GetTemplateId() string`

GetTemplateId returns the TemplateId field if non-nil, zero value otherwise.

### GetTemplateIdOk

`func (o *TemplateResponse) GetTemplateIdOk() (*string, bool)`

GetTemplateIdOk returns a tuple with the TemplateId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateId

`func (o *TemplateResponse) SetTemplateId(v string)`

SetTemplateId sets TemplateId field to given value.

### HasTemplateId

`func (o *TemplateResponse) HasTemplateId() bool`

HasTemplateId returns a boolean if a field has been set.

### GetTitle

`func (o *TemplateResponse) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *TemplateResponse) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *TemplateResponse) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *TemplateResponse) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetMessage

`func (o *TemplateResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TemplateResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TemplateResponse) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *TemplateResponse) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *TemplateResponse) GetUpdatedAt() int32`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *TemplateResponse) GetUpdatedAtOk() (*int32, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *TemplateResponse) SetUpdatedAt(v int32)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *TemplateResponse) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetIsEmbedded

`func (o *TemplateResponse) GetIsEmbedded() bool`

GetIsEmbedded returns the IsEmbedded field if non-nil, zero value otherwise.

### GetIsEmbeddedOk

`func (o *TemplateResponse) GetIsEmbeddedOk() (*bool, bool)`

GetIsEmbeddedOk returns a tuple with the IsEmbedded field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsEmbedded

`func (o *TemplateResponse) SetIsEmbedded(v bool)`

SetIsEmbedded sets IsEmbedded field to given value.

### HasIsEmbedded

`func (o *TemplateResponse) HasIsEmbedded() bool`

HasIsEmbedded returns a boolean if a field has been set.

### SetIsEmbeddedNil

`func (o *TemplateResponse) SetIsEmbeddedNil(b bool)`

 SetIsEmbeddedNil sets the value for IsEmbedded to be an explicit nil

### UnsetIsEmbedded
`func (o *TemplateResponse) UnsetIsEmbedded()`

UnsetIsEmbedded ensures that no value is present for IsEmbedded, not even an explicit nil
### GetIsCreator

`func (o *TemplateResponse) GetIsCreator() bool`

GetIsCreator returns the IsCreator field if non-nil, zero value otherwise.

### GetIsCreatorOk

`func (o *TemplateResponse) GetIsCreatorOk() (*bool, bool)`

GetIsCreatorOk returns a tuple with the IsCreator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsCreator

`func (o *TemplateResponse) SetIsCreator(v bool)`

SetIsCreator sets IsCreator field to given value.

### HasIsCreator

`func (o *TemplateResponse) HasIsCreator() bool`

HasIsCreator returns a boolean if a field has been set.

### SetIsCreatorNil

`func (o *TemplateResponse) SetIsCreatorNil(b bool)`

 SetIsCreatorNil sets the value for IsCreator to be an explicit nil

### UnsetIsCreator
`func (o *TemplateResponse) UnsetIsCreator()`

UnsetIsCreator ensures that no value is present for IsCreator, not even an explicit nil
### GetCanEdit

`func (o *TemplateResponse) GetCanEdit() bool`

GetCanEdit returns the CanEdit field if non-nil, zero value otherwise.

### GetCanEditOk

`func (o *TemplateResponse) GetCanEditOk() (*bool, bool)`

GetCanEditOk returns a tuple with the CanEdit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCanEdit

`func (o *TemplateResponse) SetCanEdit(v bool)`

SetCanEdit sets CanEdit field to given value.

### HasCanEdit

`func (o *TemplateResponse) HasCanEdit() bool`

HasCanEdit returns a boolean if a field has been set.

### SetCanEditNil

`func (o *TemplateResponse) SetCanEditNil(b bool)`

 SetCanEditNil sets the value for CanEdit to be an explicit nil

### UnsetCanEdit
`func (o *TemplateResponse) UnsetCanEdit()`

UnsetCanEdit ensures that no value is present for CanEdit, not even an explicit nil
### GetIsLocked

`func (o *TemplateResponse) GetIsLocked() bool`

GetIsLocked returns the IsLocked field if non-nil, zero value otherwise.

### GetIsLockedOk

`func (o *TemplateResponse) GetIsLockedOk() (*bool, bool)`

GetIsLockedOk returns a tuple with the IsLocked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsLocked

`func (o *TemplateResponse) SetIsLocked(v bool)`

SetIsLocked sets IsLocked field to given value.

### HasIsLocked

`func (o *TemplateResponse) HasIsLocked() bool`

HasIsLocked returns a boolean if a field has been set.

### SetIsLockedNil

`func (o *TemplateResponse) SetIsLockedNil(b bool)`

 SetIsLockedNil sets the value for IsLocked to be an explicit nil

### UnsetIsLocked
`func (o *TemplateResponse) UnsetIsLocked()`

UnsetIsLocked ensures that no value is present for IsLocked, not even an explicit nil
### GetMetadata

`func (o *TemplateResponse) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *TemplateResponse) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *TemplateResponse) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *TemplateResponse) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetSignerRoles

`func (o *TemplateResponse) GetSignerRoles() []TemplateResponseSignerRole`

GetSignerRoles returns the SignerRoles field if non-nil, zero value otherwise.

### GetSignerRolesOk

`func (o *TemplateResponse) GetSignerRolesOk() (*[]TemplateResponseSignerRole, bool)`

GetSignerRolesOk returns a tuple with the SignerRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignerRoles

`func (o *TemplateResponse) SetSignerRoles(v []TemplateResponseSignerRole)`

SetSignerRoles sets SignerRoles field to given value.

### HasSignerRoles

`func (o *TemplateResponse) HasSignerRoles() bool`

HasSignerRoles returns a boolean if a field has been set.

### GetCcRoles

`func (o *TemplateResponse) GetCcRoles() []TemplateResponseCCRole`

GetCcRoles returns the CcRoles field if non-nil, zero value otherwise.

### GetCcRolesOk

`func (o *TemplateResponse) GetCcRolesOk() (*[]TemplateResponseCCRole, bool)`

GetCcRolesOk returns a tuple with the CcRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcRoles

`func (o *TemplateResponse) SetCcRoles(v []TemplateResponseCCRole)`

SetCcRoles sets CcRoles field to given value.

### HasCcRoles

`func (o *TemplateResponse) HasCcRoles() bool`

HasCcRoles returns a boolean if a field has been set.

### GetDocuments

`func (o *TemplateResponse) GetDocuments() []TemplateResponseDocument`

GetDocuments returns the Documents field if non-nil, zero value otherwise.

### GetDocumentsOk

`func (o *TemplateResponse) GetDocumentsOk() (*[]TemplateResponseDocument, bool)`

GetDocumentsOk returns a tuple with the Documents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocuments

`func (o *TemplateResponse) SetDocuments(v []TemplateResponseDocument)`

SetDocuments sets Documents field to given value.

### HasDocuments

`func (o *TemplateResponse) HasDocuments() bool`

HasDocuments returns a boolean if a field has been set.

### GetCustomFields

`func (o *TemplateResponse) GetCustomFields() []TemplateResponseDocumentCustomFieldBase`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *TemplateResponse) GetCustomFieldsOk() (*[]TemplateResponseDocumentCustomFieldBase, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *TemplateResponse) SetCustomFields(v []TemplateResponseDocumentCustomFieldBase)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *TemplateResponse) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### SetCustomFieldsNil

`func (o *TemplateResponse) SetCustomFieldsNil(b bool)`

 SetCustomFieldsNil sets the value for CustomFields to be an explicit nil

### UnsetCustomFields
`func (o *TemplateResponse) UnsetCustomFields()`

UnsetCustomFields ensures that no value is present for CustomFields, not even an explicit nil
### GetNamedFormFields

`func (o *TemplateResponse) GetNamedFormFields() []TemplateResponseDocumentFormFieldBase`

GetNamedFormFields returns the NamedFormFields field if non-nil, zero value otherwise.

### GetNamedFormFieldsOk

`func (o *TemplateResponse) GetNamedFormFieldsOk() (*[]TemplateResponseDocumentFormFieldBase, bool)`

GetNamedFormFieldsOk returns a tuple with the NamedFormFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNamedFormFields

`func (o *TemplateResponse) SetNamedFormFields(v []TemplateResponseDocumentFormFieldBase)`

SetNamedFormFields sets NamedFormFields field to given value.

### HasNamedFormFields

`func (o *TemplateResponse) HasNamedFormFields() bool`

HasNamedFormFields returns a boolean if a field has been set.

### SetNamedFormFieldsNil

`func (o *TemplateResponse) SetNamedFormFieldsNil(b bool)`

 SetNamedFormFieldsNil sets the value for NamedFormFields to be an explicit nil

### UnsetNamedFormFields
`func (o *TemplateResponse) UnsetNamedFormFields()`

UnsetNamedFormFields ensures that no value is present for NamedFormFields, not even an explicit nil
### GetAccounts

`func (o *TemplateResponse) GetAccounts() []TemplateResponseAccount`

GetAccounts returns the Accounts field if non-nil, zero value otherwise.

### GetAccountsOk

`func (o *TemplateResponse) GetAccountsOk() (*[]TemplateResponseAccount, bool)`

GetAccountsOk returns a tuple with the Accounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccounts

`func (o *TemplateResponse) SetAccounts(v []TemplateResponseAccount)`

SetAccounts sets Accounts field to given value.

### HasAccounts

`func (o *TemplateResponse) HasAccounts() bool`

HasAccounts returns a boolean if a field has been set.

### SetAccountsNil

`func (o *TemplateResponse) SetAccountsNil(b bool)`

 SetAccountsNil sets the value for Accounts to be an explicit nil

### UnsetAccounts
`func (o *TemplateResponse) UnsetAccounts()`

UnsetAccounts ensures that no value is present for Accounts, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


