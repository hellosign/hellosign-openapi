# TemplateCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Files** | Pointer to **[]*os.File** | Use &#x60;files[]&#x60; to indicate the uploaded file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both. | [optional] 
**FileUrls** | Pointer to **[]string** | Use &#x60;file_urls[]&#x60; to have Dropbox Sign download the file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both. | [optional] 
**AllowReassign** | Pointer to **bool** | Allows signers to reassign their signature requests to other signers if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;.  **Note**: Only available for Premium plan and higher. | [optional] [default to false]
**Attachments** | Pointer to [**[]SubAttachment**](SubAttachment.md) | A list describing the attachments | [optional] 
**CcRoles** | Pointer to **[]string** | The CC roles that must be assigned when using the template to send a signature request | [optional] 
**ClientId** | Pointer to **string** | Client id of the app you&#39;re using to create this draft. Used to apply the branding and callback url defined for the app. | [optional] 
**FieldOptions** | Pointer to [**SubFieldOptions**](SubFieldOptions.md) |  | [optional] 
**FormFieldGroups** | Pointer to [**[]SubFormFieldGroup**](SubFormFieldGroup.md) | Group information for fields defined in &#x60;form_fields_per_document&#x60;. String-indexed JSON array with &#x60;group_label&#x60; and &#x60;requirement&#x60; keys. &#x60;form_fields_per_document&#x60; must contain fields referencing a group defined in &#x60;form_field_groups&#x60;. | [optional] 
**FormFieldRules** | Pointer to [**[]SubFormFieldRule**](SubFormFieldRule.md) | Conditional Logic rules for fields defined in &#x60;form_fields_per_document&#x60;. | [optional] 
**FormFieldsPerDocument** | [**[]SubFormFieldsPerDocumentBase**](SubFormFieldsPerDocumentBase.md) | The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)  **NOTE**: Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.  * Text Field use &#x60;SubFormFieldsPerDocumentText&#x60; * Dropdown Field use &#x60;SubFormFieldsPerDocumentDropdown&#x60; * Hyperlink Field use &#x60;SubFormFieldsPerDocumentHyperlink&#x60; * Checkbox Field use &#x60;SubFormFieldsPerDocumentCheckbox&#x60; * Radio Field use &#x60;SubFormFieldsPerDocumentRadio&#x60; * Signature Field use &#x60;SubFormFieldsPerDocumentSignature&#x60; * Date Signed Field use &#x60;SubFormFieldsPerDocumentDateSigned&#x60; * Initials Field use &#x60;SubFormFieldsPerDocumentInitials&#x60; * Text Merge Field use &#x60;SubFormFieldsPerDocumentTextMerge&#x60; * Checkbox Merge Field use &#x60;SubFormFieldsPerDocumentCheckboxMerge&#x60; | 
**MergeFields** | Pointer to [**[]SubMergeField**](SubMergeField.md) | Add merge fields to the template. Merge fields are placed by the user creating the template and used to pre-fill data by passing values into signature requests with the &#x60;custom_fields&#x60; parameter. If the signature request using that template *does not* pass a value into a merge field, then an empty field remains in the document. | [optional] 
**Message** | Pointer to **string** | The default template email message. | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer&#39;s order number for look up when receiving events for the signature request.  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. | [optional] 
**SignerRoles** | [**[]SubTemplateRole**](SubTemplateRole.md) | An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template. | 
**Subject** | Pointer to **string** | The template title (alias). | [optional] 
**TestMode** | Pointer to **bool** | Whether this is a test, the signature request created from this draft will not be legally binding if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**Title** | Pointer to **string** | The title you want to assign to the SignatureRequest. | [optional] 
**UsePreexistingFields** | Pointer to **bool** | Enable the detection of predefined PDF fields by setting the &#x60;use_preexisting_fields&#x60; to &#x60;true&#x60; (defaults to disabled, or &#x60;false&#x60;). | [optional] [default to false]

## Methods

### NewTemplateCreateRequest

`func NewTemplateCreateRequest(formFieldsPerDocument []SubFormFieldsPerDocumentBase, signerRoles []SubTemplateRole, ) *TemplateCreateRequest`

NewTemplateCreateRequest instantiates a new TemplateCreateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateCreateRequestWithDefaults

`func NewTemplateCreateRequestWithDefaults() *TemplateCreateRequest`

NewTemplateCreateRequestWithDefaults instantiates a new TemplateCreateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiles

`func (o *TemplateCreateRequest) GetFiles() []*os.File`

GetFiles returns the Files field if non-nil, zero value otherwise.

### GetFilesOk

`func (o *TemplateCreateRequest) GetFilesOk() (*[]*os.File, bool)`

GetFilesOk returns a tuple with the Files field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiles

`func (o *TemplateCreateRequest) SetFiles(v []*os.File)`

SetFiles sets Files field to given value.

### HasFiles

`func (o *TemplateCreateRequest) HasFiles() bool`

HasFiles returns a boolean if a field has been set.

### GetFileUrls

`func (o *TemplateCreateRequest) GetFileUrls() []string`

GetFileUrls returns the FileUrls field if non-nil, zero value otherwise.

### GetFileUrlsOk

`func (o *TemplateCreateRequest) GetFileUrlsOk() (*[]string, bool)`

GetFileUrlsOk returns a tuple with the FileUrls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileUrls

`func (o *TemplateCreateRequest) SetFileUrls(v []string)`

SetFileUrls sets FileUrls field to given value.

### HasFileUrls

`func (o *TemplateCreateRequest) HasFileUrls() bool`

HasFileUrls returns a boolean if a field has been set.

### GetAllowReassign

`func (o *TemplateCreateRequest) GetAllowReassign() bool`

GetAllowReassign returns the AllowReassign field if non-nil, zero value otherwise.

### GetAllowReassignOk

`func (o *TemplateCreateRequest) GetAllowReassignOk() (*bool, bool)`

GetAllowReassignOk returns a tuple with the AllowReassign field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowReassign

`func (o *TemplateCreateRequest) SetAllowReassign(v bool)`

SetAllowReassign sets AllowReassign field to given value.

### HasAllowReassign

`func (o *TemplateCreateRequest) HasAllowReassign() bool`

HasAllowReassign returns a boolean if a field has been set.

### GetAttachments

`func (o *TemplateCreateRequest) GetAttachments() []SubAttachment`

GetAttachments returns the Attachments field if non-nil, zero value otherwise.

### GetAttachmentsOk

`func (o *TemplateCreateRequest) GetAttachmentsOk() (*[]SubAttachment, bool)`

GetAttachmentsOk returns a tuple with the Attachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachments

`func (o *TemplateCreateRequest) SetAttachments(v []SubAttachment)`

SetAttachments sets Attachments field to given value.

### HasAttachments

`func (o *TemplateCreateRequest) HasAttachments() bool`

HasAttachments returns a boolean if a field has been set.

### GetCcRoles

`func (o *TemplateCreateRequest) GetCcRoles() []string`

GetCcRoles returns the CcRoles field if non-nil, zero value otherwise.

### GetCcRolesOk

`func (o *TemplateCreateRequest) GetCcRolesOk() (*[]string, bool)`

GetCcRolesOk returns a tuple with the CcRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcRoles

`func (o *TemplateCreateRequest) SetCcRoles(v []string)`

SetCcRoles sets CcRoles field to given value.

### HasCcRoles

`func (o *TemplateCreateRequest) HasCcRoles() bool`

HasCcRoles returns a boolean if a field has been set.

### GetClientId

`func (o *TemplateCreateRequest) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *TemplateCreateRequest) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *TemplateCreateRequest) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *TemplateCreateRequest) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetFieldOptions

`func (o *TemplateCreateRequest) GetFieldOptions() SubFieldOptions`

GetFieldOptions returns the FieldOptions field if non-nil, zero value otherwise.

### GetFieldOptionsOk

`func (o *TemplateCreateRequest) GetFieldOptionsOk() (*SubFieldOptions, bool)`

GetFieldOptionsOk returns a tuple with the FieldOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldOptions

`func (o *TemplateCreateRequest) SetFieldOptions(v SubFieldOptions)`

SetFieldOptions sets FieldOptions field to given value.

### HasFieldOptions

`func (o *TemplateCreateRequest) HasFieldOptions() bool`

HasFieldOptions returns a boolean if a field has been set.

### GetFormFieldGroups

`func (o *TemplateCreateRequest) GetFormFieldGroups() []SubFormFieldGroup`

GetFormFieldGroups returns the FormFieldGroups field if non-nil, zero value otherwise.

### GetFormFieldGroupsOk

`func (o *TemplateCreateRequest) GetFormFieldGroupsOk() (*[]SubFormFieldGroup, bool)`

GetFormFieldGroupsOk returns a tuple with the FormFieldGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFieldGroups

`func (o *TemplateCreateRequest) SetFormFieldGroups(v []SubFormFieldGroup)`

SetFormFieldGroups sets FormFieldGroups field to given value.

### HasFormFieldGroups

`func (o *TemplateCreateRequest) HasFormFieldGroups() bool`

HasFormFieldGroups returns a boolean if a field has been set.

### GetFormFieldRules

`func (o *TemplateCreateRequest) GetFormFieldRules() []SubFormFieldRule`

GetFormFieldRules returns the FormFieldRules field if non-nil, zero value otherwise.

### GetFormFieldRulesOk

`func (o *TemplateCreateRequest) GetFormFieldRulesOk() (*[]SubFormFieldRule, bool)`

GetFormFieldRulesOk returns a tuple with the FormFieldRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFieldRules

`func (o *TemplateCreateRequest) SetFormFieldRules(v []SubFormFieldRule)`

SetFormFieldRules sets FormFieldRules field to given value.

### HasFormFieldRules

`func (o *TemplateCreateRequest) HasFormFieldRules() bool`

HasFormFieldRules returns a boolean if a field has been set.

### GetFormFieldsPerDocument

`func (o *TemplateCreateRequest) GetFormFieldsPerDocument() []SubFormFieldsPerDocumentBase`

GetFormFieldsPerDocument returns the FormFieldsPerDocument field if non-nil, zero value otherwise.

### GetFormFieldsPerDocumentOk

`func (o *TemplateCreateRequest) GetFormFieldsPerDocumentOk() (*[]SubFormFieldsPerDocumentBase, bool)`

GetFormFieldsPerDocumentOk returns a tuple with the FormFieldsPerDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFieldsPerDocument

`func (o *TemplateCreateRequest) SetFormFieldsPerDocument(v []SubFormFieldsPerDocumentBase)`

SetFormFieldsPerDocument sets FormFieldsPerDocument field to given value.


### GetMergeFields

`func (o *TemplateCreateRequest) GetMergeFields() []SubMergeField`

GetMergeFields returns the MergeFields field if non-nil, zero value otherwise.

### GetMergeFieldsOk

`func (o *TemplateCreateRequest) GetMergeFieldsOk() (*[]SubMergeField, bool)`

GetMergeFieldsOk returns a tuple with the MergeFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMergeFields

`func (o *TemplateCreateRequest) SetMergeFields(v []SubMergeField)`

SetMergeFields sets MergeFields field to given value.

### HasMergeFields

`func (o *TemplateCreateRequest) HasMergeFields() bool`

HasMergeFields returns a boolean if a field has been set.

### GetMessage

`func (o *TemplateCreateRequest) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TemplateCreateRequest) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TemplateCreateRequest) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *TemplateCreateRequest) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetMetadata

`func (o *TemplateCreateRequest) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *TemplateCreateRequest) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *TemplateCreateRequest) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *TemplateCreateRequest) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetSignerRoles

`func (o *TemplateCreateRequest) GetSignerRoles() []SubTemplateRole`

GetSignerRoles returns the SignerRoles field if non-nil, zero value otherwise.

### GetSignerRolesOk

`func (o *TemplateCreateRequest) GetSignerRolesOk() (*[]SubTemplateRole, bool)`

GetSignerRolesOk returns a tuple with the SignerRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignerRoles

`func (o *TemplateCreateRequest) SetSignerRoles(v []SubTemplateRole)`

SetSignerRoles sets SignerRoles field to given value.


### GetSubject

`func (o *TemplateCreateRequest) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *TemplateCreateRequest) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *TemplateCreateRequest) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *TemplateCreateRequest) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### GetTestMode

`func (o *TemplateCreateRequest) GetTestMode() bool`

GetTestMode returns the TestMode field if non-nil, zero value otherwise.

### GetTestModeOk

`func (o *TemplateCreateRequest) GetTestModeOk() (*bool, bool)`

GetTestModeOk returns a tuple with the TestMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTestMode

`func (o *TemplateCreateRequest) SetTestMode(v bool)`

SetTestMode sets TestMode field to given value.

### HasTestMode

`func (o *TemplateCreateRequest) HasTestMode() bool`

HasTestMode returns a boolean if a field has been set.

### GetTitle

`func (o *TemplateCreateRequest) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *TemplateCreateRequest) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *TemplateCreateRequest) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *TemplateCreateRequest) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetUsePreexistingFields

`func (o *TemplateCreateRequest) GetUsePreexistingFields() bool`

GetUsePreexistingFields returns the UsePreexistingFields field if non-nil, zero value otherwise.

### GetUsePreexistingFieldsOk

`func (o *TemplateCreateRequest) GetUsePreexistingFieldsOk() (*bool, bool)`

GetUsePreexistingFieldsOk returns a tuple with the UsePreexistingFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsePreexistingFields

`func (o *TemplateCreateRequest) SetUsePreexistingFields(v bool)`

SetUsePreexistingFields sets UsePreexistingFields field to given value.

### HasUsePreexistingFields

`func (o *TemplateCreateRequest) HasUsePreexistingFields() bool`

HasUsePreexistingFields returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


