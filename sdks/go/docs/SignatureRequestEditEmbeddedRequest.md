# SignatureRequestEditEmbeddedRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Files** | Pointer to **[]*os.File** | Use &#x60;files[]&#x60; to indicate the uploaded file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both. | [optional] 
**FileUrls** | Pointer to **[]string** | Use &#x60;file_urls[]&#x60; to have Dropbox Sign download the file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both. | [optional] 
**Signers** | Pointer to [**[]SubSignatureRequestSigner**](SubSignatureRequestSigner.md) | Add Signers to your Signature Request.  This endpoint requires either **signers** or **grouped_signers**, but not both. | [optional] 
**GroupedSigners** | Pointer to [**[]SubSignatureRequestGroupedSigners**](SubSignatureRequestGroupedSigners.md) | Add Grouped Signers to your Signature Request.  This endpoint requires either **signers** or **grouped_signers**, but not both. | [optional] 
**AllowDecline** | Pointer to **bool** | Allows signers to decline to sign a document if &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**AllowReassign** | Pointer to **bool** | Allows signers to reassign their signature requests to other signers if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;.  **Note**: Only available for Premium plan. | [optional] [default to false]
**Attachments** | Pointer to [**[]SubAttachment**](SubAttachment.md) | A list describing the attachments | [optional] 
**CcEmailAddresses** | Pointer to **[]string** | The email addresses that should be CCed. | [optional] 
**ClientId** | **string** | Client id of the app you&#39;re using to create this embedded signature request. Used for security purposes. | 
**CustomFields** | Pointer to [**[]SubCustomField**](SubCustomField.md) | When used together with merge fields, &#x60;custom_fields&#x60; allows users to add pre-filled data to their signature requests.  Pre-filled data can be used with \&quot;send-once\&quot; signature requests by adding merge fields with &#x60;form_fields_per_document&#x60; or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with &#x60;custom_fields&#x60; together in one API call.  For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing &#x60;custom_fields&#x60; on subsequent signature requests referencing that template. | [optional] 
**FieldOptions** | Pointer to [**SubFieldOptions**](SubFieldOptions.md) |  | [optional] 
**FormFieldGroups** | Pointer to [**[]SubFormFieldGroup**](SubFormFieldGroup.md) | Group information for fields defined in &#x60;form_fields_per_document&#x60;. String-indexed JSON array with &#x60;group_label&#x60; and &#x60;requirement&#x60; keys. &#x60;form_fields_per_document&#x60; must contain fields referencing a group defined in &#x60;form_field_groups&#x60;. | [optional] 
**FormFieldRules** | Pointer to [**[]SubFormFieldRule**](SubFormFieldRule.md) | Conditional Logic rules for fields defined in &#x60;form_fields_per_document&#x60;. | [optional] 
**FormFieldsPerDocument** | Pointer to [**[]SubFormFieldsPerDocumentBase**](SubFormFieldsPerDocumentBase.md) | The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)  **NOTE**: Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.  * Text Field use &#x60;SubFormFieldsPerDocumentText&#x60; * Dropdown Field use &#x60;SubFormFieldsPerDocumentDropdown&#x60; * Hyperlink Field use &#x60;SubFormFieldsPerDocumentHyperlink&#x60; * Checkbox Field use &#x60;SubFormFieldsPerDocumentCheckbox&#x60; * Radio Field use &#x60;SubFormFieldsPerDocumentRadio&#x60; * Signature Field use &#x60;SubFormFieldsPerDocumentSignature&#x60; * Date Signed Field use &#x60;SubFormFieldsPerDocumentDateSigned&#x60; * Initials Field use &#x60;SubFormFieldsPerDocumentInitials&#x60; * Text Merge Field use &#x60;SubFormFieldsPerDocumentTextMerge&#x60; * Checkbox Merge Field use &#x60;SubFormFieldsPerDocumentCheckboxMerge&#x60; | [optional] 
**HideTextTags** | Pointer to **bool** | Enables automatic Text Tag removal when set to true.  **NOTE**: Removing text tags this way can cause unwanted clipping. We recommend leaving this setting on &#x60;false&#x60; and instead hiding your text tags using white text or a similar approach. See the [Text Tags Walkthrough](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) for more information. | [optional] [default to false]
**Message** | Pointer to **string** | The custom message in the email that will be sent to the signers. | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer&#39;s order number for look up when receiving events for the signature request.  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. | [optional] 
**SigningOptions** | Pointer to [**SubSigningOptions**](SubSigningOptions.md) |  | [optional] 
**Subject** | Pointer to **string** | The subject in the email that will be sent to the signers. | [optional] 
**TestMode** | Pointer to **bool** | Whether this is a test, the signature request will not be legally binding if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**Title** | Pointer to **string** | The title you want to assign to the SignatureRequest. | [optional] 
**UseTextTags** | Pointer to **bool** | Send with a value of &#x60;true&#x60; if you wish to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document. Defaults to disabled, or &#x60;false&#x60;. | [optional] [default to false]
**PopulateAutoFillFields** | Pointer to **bool** | Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer&#39;s information during signing.  ⚠️ **Note** ⚠️: Keep your signer&#39;s information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature. | [optional] [default to false]
**ExpiresAt** | Pointer to **NullableInt32** | When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details. | [optional] 

## Methods

### NewSignatureRequestEditEmbeddedRequest

`func NewSignatureRequestEditEmbeddedRequest(clientId string, ) *SignatureRequestEditEmbeddedRequest`

NewSignatureRequestEditEmbeddedRequest instantiates a new SignatureRequestEditEmbeddedRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSignatureRequestEditEmbeddedRequestWithDefaults

`func NewSignatureRequestEditEmbeddedRequestWithDefaults() *SignatureRequestEditEmbeddedRequest`

NewSignatureRequestEditEmbeddedRequestWithDefaults instantiates a new SignatureRequestEditEmbeddedRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiles

`func (o *SignatureRequestEditEmbeddedRequest) GetFiles() []*os.File`

GetFiles returns the Files field if non-nil, zero value otherwise.

### GetFilesOk

`func (o *SignatureRequestEditEmbeddedRequest) GetFilesOk() (*[]*os.File, bool)`

GetFilesOk returns a tuple with the Files field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiles

`func (o *SignatureRequestEditEmbeddedRequest) SetFiles(v []*os.File)`

SetFiles sets Files field to given value.

### HasFiles

`func (o *SignatureRequestEditEmbeddedRequest) HasFiles() bool`

HasFiles returns a boolean if a field has been set.

### GetFileUrls

`func (o *SignatureRequestEditEmbeddedRequest) GetFileUrls() []string`

GetFileUrls returns the FileUrls field if non-nil, zero value otherwise.

### GetFileUrlsOk

`func (o *SignatureRequestEditEmbeddedRequest) GetFileUrlsOk() (*[]string, bool)`

GetFileUrlsOk returns a tuple with the FileUrls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileUrls

`func (o *SignatureRequestEditEmbeddedRequest) SetFileUrls(v []string)`

SetFileUrls sets FileUrls field to given value.

### HasFileUrls

`func (o *SignatureRequestEditEmbeddedRequest) HasFileUrls() bool`

HasFileUrls returns a boolean if a field has been set.

### GetSigners

`func (o *SignatureRequestEditEmbeddedRequest) GetSigners() []SubSignatureRequestSigner`

GetSigners returns the Signers field if non-nil, zero value otherwise.

### GetSignersOk

`func (o *SignatureRequestEditEmbeddedRequest) GetSignersOk() (*[]SubSignatureRequestSigner, bool)`

GetSignersOk returns a tuple with the Signers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigners

`func (o *SignatureRequestEditEmbeddedRequest) SetSigners(v []SubSignatureRequestSigner)`

SetSigners sets Signers field to given value.

### HasSigners

`func (o *SignatureRequestEditEmbeddedRequest) HasSigners() bool`

HasSigners returns a boolean if a field has been set.

### GetGroupedSigners

`func (o *SignatureRequestEditEmbeddedRequest) GetGroupedSigners() []SubSignatureRequestGroupedSigners`

GetGroupedSigners returns the GroupedSigners field if non-nil, zero value otherwise.

### GetGroupedSignersOk

`func (o *SignatureRequestEditEmbeddedRequest) GetGroupedSignersOk() (*[]SubSignatureRequestGroupedSigners, bool)`

GetGroupedSignersOk returns a tuple with the GroupedSigners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupedSigners

`func (o *SignatureRequestEditEmbeddedRequest) SetGroupedSigners(v []SubSignatureRequestGroupedSigners)`

SetGroupedSigners sets GroupedSigners field to given value.

### HasGroupedSigners

`func (o *SignatureRequestEditEmbeddedRequest) HasGroupedSigners() bool`

HasGroupedSigners returns a boolean if a field has been set.

### GetAllowDecline

`func (o *SignatureRequestEditEmbeddedRequest) GetAllowDecline() bool`

GetAllowDecline returns the AllowDecline field if non-nil, zero value otherwise.

### GetAllowDeclineOk

`func (o *SignatureRequestEditEmbeddedRequest) GetAllowDeclineOk() (*bool, bool)`

GetAllowDeclineOk returns a tuple with the AllowDecline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowDecline

`func (o *SignatureRequestEditEmbeddedRequest) SetAllowDecline(v bool)`

SetAllowDecline sets AllowDecline field to given value.

### HasAllowDecline

`func (o *SignatureRequestEditEmbeddedRequest) HasAllowDecline() bool`

HasAllowDecline returns a boolean if a field has been set.

### GetAllowReassign

`func (o *SignatureRequestEditEmbeddedRequest) GetAllowReassign() bool`

GetAllowReassign returns the AllowReassign field if non-nil, zero value otherwise.

### GetAllowReassignOk

`func (o *SignatureRequestEditEmbeddedRequest) GetAllowReassignOk() (*bool, bool)`

GetAllowReassignOk returns a tuple with the AllowReassign field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowReassign

`func (o *SignatureRequestEditEmbeddedRequest) SetAllowReassign(v bool)`

SetAllowReassign sets AllowReassign field to given value.

### HasAllowReassign

`func (o *SignatureRequestEditEmbeddedRequest) HasAllowReassign() bool`

HasAllowReassign returns a boolean if a field has been set.

### GetAttachments

`func (o *SignatureRequestEditEmbeddedRequest) GetAttachments() []SubAttachment`

GetAttachments returns the Attachments field if non-nil, zero value otherwise.

### GetAttachmentsOk

`func (o *SignatureRequestEditEmbeddedRequest) GetAttachmentsOk() (*[]SubAttachment, bool)`

GetAttachmentsOk returns a tuple with the Attachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachments

`func (o *SignatureRequestEditEmbeddedRequest) SetAttachments(v []SubAttachment)`

SetAttachments sets Attachments field to given value.

### HasAttachments

`func (o *SignatureRequestEditEmbeddedRequest) HasAttachments() bool`

HasAttachments returns a boolean if a field has been set.

### GetCcEmailAddresses

`func (o *SignatureRequestEditEmbeddedRequest) GetCcEmailAddresses() []string`

GetCcEmailAddresses returns the CcEmailAddresses field if non-nil, zero value otherwise.

### GetCcEmailAddressesOk

`func (o *SignatureRequestEditEmbeddedRequest) GetCcEmailAddressesOk() (*[]string, bool)`

GetCcEmailAddressesOk returns a tuple with the CcEmailAddresses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcEmailAddresses

`func (o *SignatureRequestEditEmbeddedRequest) SetCcEmailAddresses(v []string)`

SetCcEmailAddresses sets CcEmailAddresses field to given value.

### HasCcEmailAddresses

`func (o *SignatureRequestEditEmbeddedRequest) HasCcEmailAddresses() bool`

HasCcEmailAddresses returns a boolean if a field has been set.

### GetClientId

`func (o *SignatureRequestEditEmbeddedRequest) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *SignatureRequestEditEmbeddedRequest) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *SignatureRequestEditEmbeddedRequest) SetClientId(v string)`

SetClientId sets ClientId field to given value.


### GetCustomFields

`func (o *SignatureRequestEditEmbeddedRequest) GetCustomFields() []SubCustomField`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *SignatureRequestEditEmbeddedRequest) GetCustomFieldsOk() (*[]SubCustomField, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *SignatureRequestEditEmbeddedRequest) SetCustomFields(v []SubCustomField)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *SignatureRequestEditEmbeddedRequest) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### GetFieldOptions

`func (o *SignatureRequestEditEmbeddedRequest) GetFieldOptions() SubFieldOptions`

GetFieldOptions returns the FieldOptions field if non-nil, zero value otherwise.

### GetFieldOptionsOk

`func (o *SignatureRequestEditEmbeddedRequest) GetFieldOptionsOk() (*SubFieldOptions, bool)`

GetFieldOptionsOk returns a tuple with the FieldOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldOptions

`func (o *SignatureRequestEditEmbeddedRequest) SetFieldOptions(v SubFieldOptions)`

SetFieldOptions sets FieldOptions field to given value.

### HasFieldOptions

`func (o *SignatureRequestEditEmbeddedRequest) HasFieldOptions() bool`

HasFieldOptions returns a boolean if a field has been set.

### GetFormFieldGroups

`func (o *SignatureRequestEditEmbeddedRequest) GetFormFieldGroups() []SubFormFieldGroup`

GetFormFieldGroups returns the FormFieldGroups field if non-nil, zero value otherwise.

### GetFormFieldGroupsOk

`func (o *SignatureRequestEditEmbeddedRequest) GetFormFieldGroupsOk() (*[]SubFormFieldGroup, bool)`

GetFormFieldGroupsOk returns a tuple with the FormFieldGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFieldGroups

`func (o *SignatureRequestEditEmbeddedRequest) SetFormFieldGroups(v []SubFormFieldGroup)`

SetFormFieldGroups sets FormFieldGroups field to given value.

### HasFormFieldGroups

`func (o *SignatureRequestEditEmbeddedRequest) HasFormFieldGroups() bool`

HasFormFieldGroups returns a boolean if a field has been set.

### GetFormFieldRules

`func (o *SignatureRequestEditEmbeddedRequest) GetFormFieldRules() []SubFormFieldRule`

GetFormFieldRules returns the FormFieldRules field if non-nil, zero value otherwise.

### GetFormFieldRulesOk

`func (o *SignatureRequestEditEmbeddedRequest) GetFormFieldRulesOk() (*[]SubFormFieldRule, bool)`

GetFormFieldRulesOk returns a tuple with the FormFieldRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFieldRules

`func (o *SignatureRequestEditEmbeddedRequest) SetFormFieldRules(v []SubFormFieldRule)`

SetFormFieldRules sets FormFieldRules field to given value.

### HasFormFieldRules

`func (o *SignatureRequestEditEmbeddedRequest) HasFormFieldRules() bool`

HasFormFieldRules returns a boolean if a field has been set.

### GetFormFieldsPerDocument

`func (o *SignatureRequestEditEmbeddedRequest) GetFormFieldsPerDocument() []SubFormFieldsPerDocumentBase`

GetFormFieldsPerDocument returns the FormFieldsPerDocument field if non-nil, zero value otherwise.

### GetFormFieldsPerDocumentOk

`func (o *SignatureRequestEditEmbeddedRequest) GetFormFieldsPerDocumentOk() (*[]SubFormFieldsPerDocumentBase, bool)`

GetFormFieldsPerDocumentOk returns a tuple with the FormFieldsPerDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFieldsPerDocument

`func (o *SignatureRequestEditEmbeddedRequest) SetFormFieldsPerDocument(v []SubFormFieldsPerDocumentBase)`

SetFormFieldsPerDocument sets FormFieldsPerDocument field to given value.

### HasFormFieldsPerDocument

`func (o *SignatureRequestEditEmbeddedRequest) HasFormFieldsPerDocument() bool`

HasFormFieldsPerDocument returns a boolean if a field has been set.

### GetHideTextTags

`func (o *SignatureRequestEditEmbeddedRequest) GetHideTextTags() bool`

GetHideTextTags returns the HideTextTags field if non-nil, zero value otherwise.

### GetHideTextTagsOk

`func (o *SignatureRequestEditEmbeddedRequest) GetHideTextTagsOk() (*bool, bool)`

GetHideTextTagsOk returns a tuple with the HideTextTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHideTextTags

`func (o *SignatureRequestEditEmbeddedRequest) SetHideTextTags(v bool)`

SetHideTextTags sets HideTextTags field to given value.

### HasHideTextTags

`func (o *SignatureRequestEditEmbeddedRequest) HasHideTextTags() bool`

HasHideTextTags returns a boolean if a field has been set.

### GetMessage

`func (o *SignatureRequestEditEmbeddedRequest) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SignatureRequestEditEmbeddedRequest) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SignatureRequestEditEmbeddedRequest) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *SignatureRequestEditEmbeddedRequest) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetMetadata

`func (o *SignatureRequestEditEmbeddedRequest) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *SignatureRequestEditEmbeddedRequest) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *SignatureRequestEditEmbeddedRequest) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *SignatureRequestEditEmbeddedRequest) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetSigningOptions

`func (o *SignatureRequestEditEmbeddedRequest) GetSigningOptions() SubSigningOptions`

GetSigningOptions returns the SigningOptions field if non-nil, zero value otherwise.

### GetSigningOptionsOk

`func (o *SignatureRequestEditEmbeddedRequest) GetSigningOptionsOk() (*SubSigningOptions, bool)`

GetSigningOptionsOk returns a tuple with the SigningOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigningOptions

`func (o *SignatureRequestEditEmbeddedRequest) SetSigningOptions(v SubSigningOptions)`

SetSigningOptions sets SigningOptions field to given value.

### HasSigningOptions

`func (o *SignatureRequestEditEmbeddedRequest) HasSigningOptions() bool`

HasSigningOptions returns a boolean if a field has been set.

### GetSubject

`func (o *SignatureRequestEditEmbeddedRequest) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *SignatureRequestEditEmbeddedRequest) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *SignatureRequestEditEmbeddedRequest) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *SignatureRequestEditEmbeddedRequest) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### GetTestMode

`func (o *SignatureRequestEditEmbeddedRequest) GetTestMode() bool`

GetTestMode returns the TestMode field if non-nil, zero value otherwise.

### GetTestModeOk

`func (o *SignatureRequestEditEmbeddedRequest) GetTestModeOk() (*bool, bool)`

GetTestModeOk returns a tuple with the TestMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTestMode

`func (o *SignatureRequestEditEmbeddedRequest) SetTestMode(v bool)`

SetTestMode sets TestMode field to given value.

### HasTestMode

`func (o *SignatureRequestEditEmbeddedRequest) HasTestMode() bool`

HasTestMode returns a boolean if a field has been set.

### GetTitle

`func (o *SignatureRequestEditEmbeddedRequest) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *SignatureRequestEditEmbeddedRequest) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *SignatureRequestEditEmbeddedRequest) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *SignatureRequestEditEmbeddedRequest) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetUseTextTags

`func (o *SignatureRequestEditEmbeddedRequest) GetUseTextTags() bool`

GetUseTextTags returns the UseTextTags field if non-nil, zero value otherwise.

### GetUseTextTagsOk

`func (o *SignatureRequestEditEmbeddedRequest) GetUseTextTagsOk() (*bool, bool)`

GetUseTextTagsOk returns a tuple with the UseTextTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseTextTags

`func (o *SignatureRequestEditEmbeddedRequest) SetUseTextTags(v bool)`

SetUseTextTags sets UseTextTags field to given value.

### HasUseTextTags

`func (o *SignatureRequestEditEmbeddedRequest) HasUseTextTags() bool`

HasUseTextTags returns a boolean if a field has been set.

### GetPopulateAutoFillFields

`func (o *SignatureRequestEditEmbeddedRequest) GetPopulateAutoFillFields() bool`

GetPopulateAutoFillFields returns the PopulateAutoFillFields field if non-nil, zero value otherwise.

### GetPopulateAutoFillFieldsOk

`func (o *SignatureRequestEditEmbeddedRequest) GetPopulateAutoFillFieldsOk() (*bool, bool)`

GetPopulateAutoFillFieldsOk returns a tuple with the PopulateAutoFillFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPopulateAutoFillFields

`func (o *SignatureRequestEditEmbeddedRequest) SetPopulateAutoFillFields(v bool)`

SetPopulateAutoFillFields sets PopulateAutoFillFields field to given value.

### HasPopulateAutoFillFields

`func (o *SignatureRequestEditEmbeddedRequest) HasPopulateAutoFillFields() bool`

HasPopulateAutoFillFields returns a boolean if a field has been set.

### GetExpiresAt

`func (o *SignatureRequestEditEmbeddedRequest) GetExpiresAt() int32`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *SignatureRequestEditEmbeddedRequest) GetExpiresAtOk() (*int32, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *SignatureRequestEditEmbeddedRequest) SetExpiresAt(v int32)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *SignatureRequestEditEmbeddedRequest) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.

### SetExpiresAtNil

`func (o *SignatureRequestEditEmbeddedRequest) SetExpiresAtNil(b bool)`

 SetExpiresAtNil sets the value for ExpiresAt to be an explicit nil

### UnsetExpiresAt
`func (o *SignatureRequestEditEmbeddedRequest) UnsetExpiresAt()`

UnsetExpiresAt ensures that no value is present for ExpiresAt, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


