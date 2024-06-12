# TemplateCreateEmbeddedDraftRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Files** | Pointer to **[]*os.File** | Use &#x60;files[]&#x60; to indicate the uploaded file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both. | [optional] 
**FileUrls** | Pointer to **[]string** | Use &#x60;file_urls[]&#x60; to have Dropbox Sign download the file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both. | [optional] 
**AllowCcs** | Pointer to **bool** | This allows the requester to specify whether the user is allowed to provide email addresses to CC when creating a template. | [optional] [default to true]
**AllowReassign** | Pointer to **bool** | Allows signers to reassign their signature requests to other signers if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;.  **Note**: Only available for Premium plan and higher. | [optional] [default to false]
**Attachments** | Pointer to [**[]SubAttachment**](SubAttachment.md) | A list describing the attachments | [optional] 
**CcRoles** | Pointer to **[]string** | The CC roles that must be assigned when using the template to send a signature request | [optional] 
**ClientId** | **string** | Client id of the app you&#39;re using to create this draft. Used to apply the branding and callback url defined for the app. | 
**EditorOptions** | Pointer to [**SubEditorOptions**](SubEditorOptions.md) |  | [optional] 
**FieldOptions** | Pointer to [**SubFieldOptions**](SubFieldOptions.md) |  | [optional] 
**ForceSignerRoles** | Pointer to **bool** | Provide users the ability to review/edit the template signer roles. | [optional] [default to false]
**ForceSubjectMessage** | Pointer to **bool** | Provide users the ability to review/edit the template subject and message. | [optional] [default to false]
**FormFieldGroups** | Pointer to [**[]SubFormFieldGroup**](SubFormFieldGroup.md) | Group information for fields defined in &#x60;form_fields_per_document&#x60;. String-indexed JSON array with &#x60;group_label&#x60; and &#x60;requirement&#x60; keys. &#x60;form_fields_per_document&#x60; must contain fields referencing a group defined in &#x60;form_field_groups&#x60;. | [optional] 
**FormFieldRules** | Pointer to [**[]SubFormFieldRule**](SubFormFieldRule.md) | Conditional Logic rules for fields defined in &#x60;form_fields_per_document&#x60;. | [optional] 
**FormFieldsPerDocument** | Pointer to [**[]SubFormFieldsPerDocumentBase**](SubFormFieldsPerDocumentBase.md) | The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)  **NOTE**: Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.  * Text Field use &#x60;SubFormFieldsPerDocumentText&#x60; * Dropdown Field use &#x60;SubFormFieldsPerDocumentDropdown&#x60; * Hyperlink Field use &#x60;SubFormFieldsPerDocumentHyperlink&#x60; * Checkbox Field use &#x60;SubFormFieldsPerDocumentCheckbox&#x60; * Radio Field use &#x60;SubFormFieldsPerDocumentRadio&#x60; * Signature Field use &#x60;SubFormFieldsPerDocumentSignature&#x60; * Date Signed Field use &#x60;SubFormFieldsPerDocumentDateSigned&#x60; * Initials Field use &#x60;SubFormFieldsPerDocumentInitials&#x60; * Text Merge Field use &#x60;SubFormFieldsPerDocumentTextMerge&#x60; * Checkbox Merge Field use &#x60;SubFormFieldsPerDocumentCheckboxMerge&#x60; | [optional] 
**MergeFields** | Pointer to [**[]SubMergeField**](SubMergeField.md) | Add merge fields to the template. Merge fields are placed by the user creating the template and used to pre-fill data by passing values into signature requests with the &#x60;custom_fields&#x60; parameter. If the signature request using that template *does not* pass a value into a merge field, then an empty field remains in the document. | [optional] 
**Message** | Pointer to **string** | The default template email message. | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer&#39;s order number for look up when receiving events for the signature request.  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. | [optional] 
**ShowPreview** | Pointer to **bool** | This allows the requester to enable the editor/preview experience.  - &#x60;show_preview&#x3D;true&#x60;: Allows requesters to enable the editor/preview experience. - &#x60;show_preview&#x3D;false&#x60;: Allows requesters to disable the editor/preview experience. | [optional] [default to false]
**ShowProgressStepper** | Pointer to **bool** | When only one step remains in the signature request process and this parameter is set to &#x60;false&#x60; then the progress stepper will be hidden. | [optional] [default to true]
**SignerRoles** | Pointer to [**[]SubTemplateRole**](SubTemplateRole.md) | An array of the designated signer roles that must be specified when sending a SignatureRequest using this Template. | [optional] 
**SkipMeNow** | Pointer to **bool** | Disables the \&quot;Me (Now)\&quot; option for the person preparing the document. Does not work with type &#x60;send_document&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**Subject** | Pointer to **string** | The template title (alias). | [optional] 
**TestMode** | Pointer to **bool** | Whether this is a test, the signature request created from this draft will not be legally binding if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**Title** | Pointer to **string** | The title you want to assign to the SignatureRequest. | [optional] 
**UsePreexistingFields** | Pointer to **bool** | Enable the detection of predefined PDF fields by setting the &#x60;use_preexisting_fields&#x60; to &#x60;true&#x60; (defaults to disabled, or &#x60;false&#x60;). | [optional] [default to false]

## Methods

### NewTemplateCreateEmbeddedDraftRequest

`func NewTemplateCreateEmbeddedDraftRequest(clientId string, ) *TemplateCreateEmbeddedDraftRequest`

NewTemplateCreateEmbeddedDraftRequest instantiates a new TemplateCreateEmbeddedDraftRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateCreateEmbeddedDraftRequestWithDefaults

`func NewTemplateCreateEmbeddedDraftRequestWithDefaults() *TemplateCreateEmbeddedDraftRequest`

NewTemplateCreateEmbeddedDraftRequestWithDefaults instantiates a new TemplateCreateEmbeddedDraftRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiles

`func (o *TemplateCreateEmbeddedDraftRequest) GetFiles() []*os.File`

GetFiles returns the Files field if non-nil, zero value otherwise.

### GetFilesOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetFilesOk() (*[]*os.File, bool)`

GetFilesOk returns a tuple with the Files field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiles

`func (o *TemplateCreateEmbeddedDraftRequest) SetFiles(v []*os.File)`

SetFiles sets Files field to given value.

### HasFiles

`func (o *TemplateCreateEmbeddedDraftRequest) HasFiles() bool`

HasFiles returns a boolean if a field has been set.

### GetFileUrls

`func (o *TemplateCreateEmbeddedDraftRequest) GetFileUrls() []string`

GetFileUrls returns the FileUrls field if non-nil, zero value otherwise.

### GetFileUrlsOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetFileUrlsOk() (*[]string, bool)`

GetFileUrlsOk returns a tuple with the FileUrls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileUrls

`func (o *TemplateCreateEmbeddedDraftRequest) SetFileUrls(v []string)`

SetFileUrls sets FileUrls field to given value.

### HasFileUrls

`func (o *TemplateCreateEmbeddedDraftRequest) HasFileUrls() bool`

HasFileUrls returns a boolean if a field has been set.

### GetAllowCcs

`func (o *TemplateCreateEmbeddedDraftRequest) GetAllowCcs() bool`

GetAllowCcs returns the AllowCcs field if non-nil, zero value otherwise.

### GetAllowCcsOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetAllowCcsOk() (*bool, bool)`

GetAllowCcsOk returns a tuple with the AllowCcs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowCcs

`func (o *TemplateCreateEmbeddedDraftRequest) SetAllowCcs(v bool)`

SetAllowCcs sets AllowCcs field to given value.

### HasAllowCcs

`func (o *TemplateCreateEmbeddedDraftRequest) HasAllowCcs() bool`

HasAllowCcs returns a boolean if a field has been set.

### GetAllowReassign

`func (o *TemplateCreateEmbeddedDraftRequest) GetAllowReassign() bool`

GetAllowReassign returns the AllowReassign field if non-nil, zero value otherwise.

### GetAllowReassignOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetAllowReassignOk() (*bool, bool)`

GetAllowReassignOk returns a tuple with the AllowReassign field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowReassign

`func (o *TemplateCreateEmbeddedDraftRequest) SetAllowReassign(v bool)`

SetAllowReassign sets AllowReassign field to given value.

### HasAllowReassign

`func (o *TemplateCreateEmbeddedDraftRequest) HasAllowReassign() bool`

HasAllowReassign returns a boolean if a field has been set.

### GetAttachments

`func (o *TemplateCreateEmbeddedDraftRequest) GetAttachments() []SubAttachment`

GetAttachments returns the Attachments field if non-nil, zero value otherwise.

### GetAttachmentsOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetAttachmentsOk() (*[]SubAttachment, bool)`

GetAttachmentsOk returns a tuple with the Attachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachments

`func (o *TemplateCreateEmbeddedDraftRequest) SetAttachments(v []SubAttachment)`

SetAttachments sets Attachments field to given value.

### HasAttachments

`func (o *TemplateCreateEmbeddedDraftRequest) HasAttachments() bool`

HasAttachments returns a boolean if a field has been set.

### GetCcRoles

`func (o *TemplateCreateEmbeddedDraftRequest) GetCcRoles() []string`

GetCcRoles returns the CcRoles field if non-nil, zero value otherwise.

### GetCcRolesOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetCcRolesOk() (*[]string, bool)`

GetCcRolesOk returns a tuple with the CcRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcRoles

`func (o *TemplateCreateEmbeddedDraftRequest) SetCcRoles(v []string)`

SetCcRoles sets CcRoles field to given value.

### HasCcRoles

`func (o *TemplateCreateEmbeddedDraftRequest) HasCcRoles() bool`

HasCcRoles returns a boolean if a field has been set.

### GetClientId

`func (o *TemplateCreateEmbeddedDraftRequest) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *TemplateCreateEmbeddedDraftRequest) SetClientId(v string)`

SetClientId sets ClientId field to given value.


### GetEditorOptions

`func (o *TemplateCreateEmbeddedDraftRequest) GetEditorOptions() SubEditorOptions`

GetEditorOptions returns the EditorOptions field if non-nil, zero value otherwise.

### GetEditorOptionsOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetEditorOptionsOk() (*SubEditorOptions, bool)`

GetEditorOptionsOk returns a tuple with the EditorOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditorOptions

`func (o *TemplateCreateEmbeddedDraftRequest) SetEditorOptions(v SubEditorOptions)`

SetEditorOptions sets EditorOptions field to given value.

### HasEditorOptions

`func (o *TemplateCreateEmbeddedDraftRequest) HasEditorOptions() bool`

HasEditorOptions returns a boolean if a field has been set.

### GetFieldOptions

`func (o *TemplateCreateEmbeddedDraftRequest) GetFieldOptions() SubFieldOptions`

GetFieldOptions returns the FieldOptions field if non-nil, zero value otherwise.

### GetFieldOptionsOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetFieldOptionsOk() (*SubFieldOptions, bool)`

GetFieldOptionsOk returns a tuple with the FieldOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldOptions

`func (o *TemplateCreateEmbeddedDraftRequest) SetFieldOptions(v SubFieldOptions)`

SetFieldOptions sets FieldOptions field to given value.

### HasFieldOptions

`func (o *TemplateCreateEmbeddedDraftRequest) HasFieldOptions() bool`

HasFieldOptions returns a boolean if a field has been set.

### GetForceSignerRoles

`func (o *TemplateCreateEmbeddedDraftRequest) GetForceSignerRoles() bool`

GetForceSignerRoles returns the ForceSignerRoles field if non-nil, zero value otherwise.

### GetForceSignerRolesOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetForceSignerRolesOk() (*bool, bool)`

GetForceSignerRolesOk returns a tuple with the ForceSignerRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForceSignerRoles

`func (o *TemplateCreateEmbeddedDraftRequest) SetForceSignerRoles(v bool)`

SetForceSignerRoles sets ForceSignerRoles field to given value.

### HasForceSignerRoles

`func (o *TemplateCreateEmbeddedDraftRequest) HasForceSignerRoles() bool`

HasForceSignerRoles returns a boolean if a field has been set.

### GetForceSubjectMessage

`func (o *TemplateCreateEmbeddedDraftRequest) GetForceSubjectMessage() bool`

GetForceSubjectMessage returns the ForceSubjectMessage field if non-nil, zero value otherwise.

### GetForceSubjectMessageOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetForceSubjectMessageOk() (*bool, bool)`

GetForceSubjectMessageOk returns a tuple with the ForceSubjectMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForceSubjectMessage

`func (o *TemplateCreateEmbeddedDraftRequest) SetForceSubjectMessage(v bool)`

SetForceSubjectMessage sets ForceSubjectMessage field to given value.

### HasForceSubjectMessage

`func (o *TemplateCreateEmbeddedDraftRequest) HasForceSubjectMessage() bool`

HasForceSubjectMessage returns a boolean if a field has been set.

### GetFormFieldGroups

`func (o *TemplateCreateEmbeddedDraftRequest) GetFormFieldGroups() []SubFormFieldGroup`

GetFormFieldGroups returns the FormFieldGroups field if non-nil, zero value otherwise.

### GetFormFieldGroupsOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetFormFieldGroupsOk() (*[]SubFormFieldGroup, bool)`

GetFormFieldGroupsOk returns a tuple with the FormFieldGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFieldGroups

`func (o *TemplateCreateEmbeddedDraftRequest) SetFormFieldGroups(v []SubFormFieldGroup)`

SetFormFieldGroups sets FormFieldGroups field to given value.

### HasFormFieldGroups

`func (o *TemplateCreateEmbeddedDraftRequest) HasFormFieldGroups() bool`

HasFormFieldGroups returns a boolean if a field has been set.

### GetFormFieldRules

`func (o *TemplateCreateEmbeddedDraftRequest) GetFormFieldRules() []SubFormFieldRule`

GetFormFieldRules returns the FormFieldRules field if non-nil, zero value otherwise.

### GetFormFieldRulesOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetFormFieldRulesOk() (*[]SubFormFieldRule, bool)`

GetFormFieldRulesOk returns a tuple with the FormFieldRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFieldRules

`func (o *TemplateCreateEmbeddedDraftRequest) SetFormFieldRules(v []SubFormFieldRule)`

SetFormFieldRules sets FormFieldRules field to given value.

### HasFormFieldRules

`func (o *TemplateCreateEmbeddedDraftRequest) HasFormFieldRules() bool`

HasFormFieldRules returns a boolean if a field has been set.

### GetFormFieldsPerDocument

`func (o *TemplateCreateEmbeddedDraftRequest) GetFormFieldsPerDocument() []SubFormFieldsPerDocumentBase`

GetFormFieldsPerDocument returns the FormFieldsPerDocument field if non-nil, zero value otherwise.

### GetFormFieldsPerDocumentOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetFormFieldsPerDocumentOk() (*[]SubFormFieldsPerDocumentBase, bool)`

GetFormFieldsPerDocumentOk returns a tuple with the FormFieldsPerDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFieldsPerDocument

`func (o *TemplateCreateEmbeddedDraftRequest) SetFormFieldsPerDocument(v []SubFormFieldsPerDocumentBase)`

SetFormFieldsPerDocument sets FormFieldsPerDocument field to given value.

### HasFormFieldsPerDocument

`func (o *TemplateCreateEmbeddedDraftRequest) HasFormFieldsPerDocument() bool`

HasFormFieldsPerDocument returns a boolean if a field has been set.

### GetMergeFields

`func (o *TemplateCreateEmbeddedDraftRequest) GetMergeFields() []SubMergeField`

GetMergeFields returns the MergeFields field if non-nil, zero value otherwise.

### GetMergeFieldsOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetMergeFieldsOk() (*[]SubMergeField, bool)`

GetMergeFieldsOk returns a tuple with the MergeFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMergeFields

`func (o *TemplateCreateEmbeddedDraftRequest) SetMergeFields(v []SubMergeField)`

SetMergeFields sets MergeFields field to given value.

### HasMergeFields

`func (o *TemplateCreateEmbeddedDraftRequest) HasMergeFields() bool`

HasMergeFields returns a boolean if a field has been set.

### GetMessage

`func (o *TemplateCreateEmbeddedDraftRequest) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TemplateCreateEmbeddedDraftRequest) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *TemplateCreateEmbeddedDraftRequest) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetMetadata

`func (o *TemplateCreateEmbeddedDraftRequest) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *TemplateCreateEmbeddedDraftRequest) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *TemplateCreateEmbeddedDraftRequest) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetShowPreview

`func (o *TemplateCreateEmbeddedDraftRequest) GetShowPreview() bool`

GetShowPreview returns the ShowPreview field if non-nil, zero value otherwise.

### GetShowPreviewOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetShowPreviewOk() (*bool, bool)`

GetShowPreviewOk returns a tuple with the ShowPreview field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowPreview

`func (o *TemplateCreateEmbeddedDraftRequest) SetShowPreview(v bool)`

SetShowPreview sets ShowPreview field to given value.

### HasShowPreview

`func (o *TemplateCreateEmbeddedDraftRequest) HasShowPreview() bool`

HasShowPreview returns a boolean if a field has been set.

### GetShowProgressStepper

`func (o *TemplateCreateEmbeddedDraftRequest) GetShowProgressStepper() bool`

GetShowProgressStepper returns the ShowProgressStepper field if non-nil, zero value otherwise.

### GetShowProgressStepperOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetShowProgressStepperOk() (*bool, bool)`

GetShowProgressStepperOk returns a tuple with the ShowProgressStepper field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowProgressStepper

`func (o *TemplateCreateEmbeddedDraftRequest) SetShowProgressStepper(v bool)`

SetShowProgressStepper sets ShowProgressStepper field to given value.

### HasShowProgressStepper

`func (o *TemplateCreateEmbeddedDraftRequest) HasShowProgressStepper() bool`

HasShowProgressStepper returns a boolean if a field has been set.

### GetSignerRoles

`func (o *TemplateCreateEmbeddedDraftRequest) GetSignerRoles() []SubTemplateRole`

GetSignerRoles returns the SignerRoles field if non-nil, zero value otherwise.

### GetSignerRolesOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetSignerRolesOk() (*[]SubTemplateRole, bool)`

GetSignerRolesOk returns a tuple with the SignerRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignerRoles

`func (o *TemplateCreateEmbeddedDraftRequest) SetSignerRoles(v []SubTemplateRole)`

SetSignerRoles sets SignerRoles field to given value.

### HasSignerRoles

`func (o *TemplateCreateEmbeddedDraftRequest) HasSignerRoles() bool`

HasSignerRoles returns a boolean if a field has been set.

### GetSkipMeNow

`func (o *TemplateCreateEmbeddedDraftRequest) GetSkipMeNow() bool`

GetSkipMeNow returns the SkipMeNow field if non-nil, zero value otherwise.

### GetSkipMeNowOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetSkipMeNowOk() (*bool, bool)`

GetSkipMeNowOk returns a tuple with the SkipMeNow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSkipMeNow

`func (o *TemplateCreateEmbeddedDraftRequest) SetSkipMeNow(v bool)`

SetSkipMeNow sets SkipMeNow field to given value.

### HasSkipMeNow

`func (o *TemplateCreateEmbeddedDraftRequest) HasSkipMeNow() bool`

HasSkipMeNow returns a boolean if a field has been set.

### GetSubject

`func (o *TemplateCreateEmbeddedDraftRequest) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *TemplateCreateEmbeddedDraftRequest) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *TemplateCreateEmbeddedDraftRequest) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### GetTestMode

`func (o *TemplateCreateEmbeddedDraftRequest) GetTestMode() bool`

GetTestMode returns the TestMode field if non-nil, zero value otherwise.

### GetTestModeOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetTestModeOk() (*bool, bool)`

GetTestModeOk returns a tuple with the TestMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTestMode

`func (o *TemplateCreateEmbeddedDraftRequest) SetTestMode(v bool)`

SetTestMode sets TestMode field to given value.

### HasTestMode

`func (o *TemplateCreateEmbeddedDraftRequest) HasTestMode() bool`

HasTestMode returns a boolean if a field has been set.

### GetTitle

`func (o *TemplateCreateEmbeddedDraftRequest) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *TemplateCreateEmbeddedDraftRequest) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *TemplateCreateEmbeddedDraftRequest) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetUsePreexistingFields

`func (o *TemplateCreateEmbeddedDraftRequest) GetUsePreexistingFields() bool`

GetUsePreexistingFields returns the UsePreexistingFields field if non-nil, zero value otherwise.

### GetUsePreexistingFieldsOk

`func (o *TemplateCreateEmbeddedDraftRequest) GetUsePreexistingFieldsOk() (*bool, bool)`

GetUsePreexistingFieldsOk returns a tuple with the UsePreexistingFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsePreexistingFields

`func (o *TemplateCreateEmbeddedDraftRequest) SetUsePreexistingFields(v bool)`

SetUsePreexistingFields sets UsePreexistingFields field to given value.

### HasUsePreexistingFields

`func (o *TemplateCreateEmbeddedDraftRequest) HasUsePreexistingFields() bool`

HasUsePreexistingFields returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


