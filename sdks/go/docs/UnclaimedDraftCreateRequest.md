# UnclaimedDraftCreateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Files** | Pointer to **[]*os.File** | Use &#x60;files[]&#x60; to indicate the uploaded file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both. | [optional] 
**FileUrls** | Pointer to **[]string** | Use &#x60;file_urls[]&#x60; to have Dropbox Sign download the file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both. | [optional] 
**AllowDecline** | Pointer to **bool** | Allows signers to decline to sign a document if &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**Attachments** | Pointer to [**[]SubAttachment**](SubAttachment.md) | A list describing the attachments | [optional] 
**CcEmailAddresses** | Pointer to **[]string** | The email addresses that should be CCed. | [optional] 
**ClientId** | Pointer to **string** | Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app. | [optional] 
**CustomFields** | Pointer to [**[]SubCustomField**](SubCustomField.md) | When used together with merge fields, &#x60;custom_fields&#x60; allows users to add pre-filled data to their signature requests.  Pre-filled data can be used with \&quot;send-once\&quot; signature requests by adding merge fields with &#x60;form_fields_per_document&#x60; or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with &#x60;custom_fields&#x60; together in one API call.  For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing &#x60;custom_fields&#x60; on subsequent signature requests referencing that template. | [optional] 
**FieldOptions** | Pointer to [**SubFieldOptions**](SubFieldOptions.md) |  | [optional] 
**FormFieldGroups** | Pointer to [**[]SubFormFieldGroup**](SubFormFieldGroup.md) | Group information for fields defined in &#x60;form_fields_per_document&#x60;. String-indexed JSON array with &#x60;group_label&#x60; and &#x60;requirement&#x60; keys. &#x60;form_fields_per_document&#x60; must contain fields referencing a group defined in &#x60;form_field_groups&#x60;. | [optional] 
**FormFieldRules** | Pointer to [**[]SubFormFieldRule**](SubFormFieldRule.md) | Conditional Logic rules for fields defined in &#x60;form_fields_per_document&#x60;. | [optional] 
**FormFieldsPerDocument** | Pointer to [**[]SubFormFieldsPerDocumentBase**](SubFormFieldsPerDocumentBase.md) | The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)  **NOTE**: Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.  * Text Field use &#x60;SubFormFieldsPerDocumentText&#x60; * Dropdown Field use &#x60;SubFormFieldsPerDocumentDropdown&#x60; * Hyperlink Field use &#x60;SubFormFieldsPerDocumentHyperlink&#x60; * Checkbox Field use &#x60;SubFormFieldsPerDocumentCheckbox&#x60; * Radio Field use &#x60;SubFormFieldsPerDocumentRadio&#x60; * Signature Field use &#x60;SubFormFieldsPerDocumentSignature&#x60; * Date Signed Field use &#x60;SubFormFieldsPerDocumentDateSigned&#x60; * Initials Field use &#x60;SubFormFieldsPerDocumentInitials&#x60; * Text Merge Field use &#x60;SubFormFieldsPerDocumentTextMerge&#x60; * Checkbox Merge Field use &#x60;SubFormFieldsPerDocumentCheckboxMerge&#x60; | [optional] 
**HideTextTags** | Pointer to **bool** | Send with a value of &#x60;true&#x60; if you wish to enable automatic Text Tag removal. Defaults to &#x60;false&#x60;. When using Text Tags it is preferred that you set this to &#x60;false&#x60; and hide your tags with white text or something similar because the automatic removal system can cause unwanted clipping. See the [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) walkthrough for more details. | [optional] [default to false]
**Message** | Pointer to **string** | The custom message in the email that will be sent to the signers. | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer&#39;s order number for look up when receiving events for the signature request.  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. | [optional] 
**ShowProgressStepper** | Pointer to **bool** | When only one step remains in the signature request process and this parameter is set to &#x60;false&#x60; then the progress stepper will be hidden. | [optional] [default to true]
**Signers** | Pointer to [**[]SubUnclaimedDraftSigner**](SubUnclaimedDraftSigner.md) | Add Signers to your Unclaimed Draft Signature Request. | [optional] 
**SigningOptions** | Pointer to [**SubSigningOptions**](SubSigningOptions.md) |  | [optional] 
**SigningRedirectUrl** | Pointer to **string** | The URL you want signers redirected to after they successfully sign. | [optional] 
**Subject** | Pointer to **string** | The subject in the email that will be sent to the signers. | [optional] 
**TestMode** | Pointer to **bool** | Whether this is a test, the signature request created from this draft will not be legally binding if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**Type** | **string** | The type of unclaimed draft to create. Use &#x60;send_document&#x60; to create a claimable file, and &#x60;request_signature&#x60; for a claimable signature request. If the type is &#x60;request_signature&#x60; then signers name and email_address are not optional. | 
**UsePreexistingFields** | Pointer to **bool** | Set &#x60;use_text_tags&#x60; to &#x60;true&#x60; to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document (defaults to disabled, or &#x60;false&#x60;). Alternatively, if your PDF contains pre-defined fields, enable the detection of these fields by setting the &#x60;use_preexisting_fields&#x60; to &#x60;true&#x60; (defaults to disabled, or &#x60;false&#x60;). Currently we only support use of either &#x60;use_text_tags&#x60; or &#x60;use_preexisting_fields&#x60; parameter, not both. | [optional] [default to false]
**UseTextTags** | Pointer to **bool** | Set &#x60;use_text_tags&#x60; to &#x60;true&#x60; to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document (defaults to disabled, or &#x60;false&#x60;). Alternatively, if your PDF contains pre-defined fields, enable the detection of these fields by setting the &#x60;use_preexisting_fields&#x60; to &#x60;true&#x60; (defaults to disabled, or &#x60;false&#x60;). Currently we only support use of either &#x60;use_text_tags&#x60; or &#x60;use_preexisting_fields&#x60; parameter, not both. | [optional] [default to false]
**ExpiresAt** | Pointer to **NullableInt32** | When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.  **Note**: This does not correspond to the **expires_at** returned in the response. | [optional] 

## Methods

### NewUnclaimedDraftCreateRequest

`func NewUnclaimedDraftCreateRequest(type_ string, ) *UnclaimedDraftCreateRequest`

NewUnclaimedDraftCreateRequest instantiates a new UnclaimedDraftCreateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUnclaimedDraftCreateRequestWithDefaults

`func NewUnclaimedDraftCreateRequestWithDefaults() *UnclaimedDraftCreateRequest`

NewUnclaimedDraftCreateRequestWithDefaults instantiates a new UnclaimedDraftCreateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiles

`func (o *UnclaimedDraftCreateRequest) GetFiles() []*os.File`

GetFiles returns the Files field if non-nil, zero value otherwise.

### GetFilesOk

`func (o *UnclaimedDraftCreateRequest) GetFilesOk() (*[]*os.File, bool)`

GetFilesOk returns a tuple with the Files field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiles

`func (o *UnclaimedDraftCreateRequest) SetFiles(v []*os.File)`

SetFiles sets Files field to given value.

### HasFiles

`func (o *UnclaimedDraftCreateRequest) HasFiles() bool`

HasFiles returns a boolean if a field has been set.

### GetFileUrls

`func (o *UnclaimedDraftCreateRequest) GetFileUrls() []string`

GetFileUrls returns the FileUrls field if non-nil, zero value otherwise.

### GetFileUrlsOk

`func (o *UnclaimedDraftCreateRequest) GetFileUrlsOk() (*[]string, bool)`

GetFileUrlsOk returns a tuple with the FileUrls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileUrls

`func (o *UnclaimedDraftCreateRequest) SetFileUrls(v []string)`

SetFileUrls sets FileUrls field to given value.

### HasFileUrls

`func (o *UnclaimedDraftCreateRequest) HasFileUrls() bool`

HasFileUrls returns a boolean if a field has been set.

### GetAllowDecline

`func (o *UnclaimedDraftCreateRequest) GetAllowDecline() bool`

GetAllowDecline returns the AllowDecline field if non-nil, zero value otherwise.

### GetAllowDeclineOk

`func (o *UnclaimedDraftCreateRequest) GetAllowDeclineOk() (*bool, bool)`

GetAllowDeclineOk returns a tuple with the AllowDecline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowDecline

`func (o *UnclaimedDraftCreateRequest) SetAllowDecline(v bool)`

SetAllowDecline sets AllowDecline field to given value.

### HasAllowDecline

`func (o *UnclaimedDraftCreateRequest) HasAllowDecline() bool`

HasAllowDecline returns a boolean if a field has been set.

### GetAttachments

`func (o *UnclaimedDraftCreateRequest) GetAttachments() []SubAttachment`

GetAttachments returns the Attachments field if non-nil, zero value otherwise.

### GetAttachmentsOk

`func (o *UnclaimedDraftCreateRequest) GetAttachmentsOk() (*[]SubAttachment, bool)`

GetAttachmentsOk returns a tuple with the Attachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachments

`func (o *UnclaimedDraftCreateRequest) SetAttachments(v []SubAttachment)`

SetAttachments sets Attachments field to given value.

### HasAttachments

`func (o *UnclaimedDraftCreateRequest) HasAttachments() bool`

HasAttachments returns a boolean if a field has been set.

### GetCcEmailAddresses

`func (o *UnclaimedDraftCreateRequest) GetCcEmailAddresses() []string`

GetCcEmailAddresses returns the CcEmailAddresses field if non-nil, zero value otherwise.

### GetCcEmailAddressesOk

`func (o *UnclaimedDraftCreateRequest) GetCcEmailAddressesOk() (*[]string, bool)`

GetCcEmailAddressesOk returns a tuple with the CcEmailAddresses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcEmailAddresses

`func (o *UnclaimedDraftCreateRequest) SetCcEmailAddresses(v []string)`

SetCcEmailAddresses sets CcEmailAddresses field to given value.

### HasCcEmailAddresses

`func (o *UnclaimedDraftCreateRequest) HasCcEmailAddresses() bool`

HasCcEmailAddresses returns a boolean if a field has been set.

### GetClientId

`func (o *UnclaimedDraftCreateRequest) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *UnclaimedDraftCreateRequest) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *UnclaimedDraftCreateRequest) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *UnclaimedDraftCreateRequest) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetCustomFields

`func (o *UnclaimedDraftCreateRequest) GetCustomFields() []SubCustomField`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *UnclaimedDraftCreateRequest) GetCustomFieldsOk() (*[]SubCustomField, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *UnclaimedDraftCreateRequest) SetCustomFields(v []SubCustomField)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *UnclaimedDraftCreateRequest) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### GetFieldOptions

`func (o *UnclaimedDraftCreateRequest) GetFieldOptions() SubFieldOptions`

GetFieldOptions returns the FieldOptions field if non-nil, zero value otherwise.

### GetFieldOptionsOk

`func (o *UnclaimedDraftCreateRequest) GetFieldOptionsOk() (*SubFieldOptions, bool)`

GetFieldOptionsOk returns a tuple with the FieldOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldOptions

`func (o *UnclaimedDraftCreateRequest) SetFieldOptions(v SubFieldOptions)`

SetFieldOptions sets FieldOptions field to given value.

### HasFieldOptions

`func (o *UnclaimedDraftCreateRequest) HasFieldOptions() bool`

HasFieldOptions returns a boolean if a field has been set.

### GetFormFieldGroups

`func (o *UnclaimedDraftCreateRequest) GetFormFieldGroups() []SubFormFieldGroup`

GetFormFieldGroups returns the FormFieldGroups field if non-nil, zero value otherwise.

### GetFormFieldGroupsOk

`func (o *UnclaimedDraftCreateRequest) GetFormFieldGroupsOk() (*[]SubFormFieldGroup, bool)`

GetFormFieldGroupsOk returns a tuple with the FormFieldGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFieldGroups

`func (o *UnclaimedDraftCreateRequest) SetFormFieldGroups(v []SubFormFieldGroup)`

SetFormFieldGroups sets FormFieldGroups field to given value.

### HasFormFieldGroups

`func (o *UnclaimedDraftCreateRequest) HasFormFieldGroups() bool`

HasFormFieldGroups returns a boolean if a field has been set.

### GetFormFieldRules

`func (o *UnclaimedDraftCreateRequest) GetFormFieldRules() []SubFormFieldRule`

GetFormFieldRules returns the FormFieldRules field if non-nil, zero value otherwise.

### GetFormFieldRulesOk

`func (o *UnclaimedDraftCreateRequest) GetFormFieldRulesOk() (*[]SubFormFieldRule, bool)`

GetFormFieldRulesOk returns a tuple with the FormFieldRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFieldRules

`func (o *UnclaimedDraftCreateRequest) SetFormFieldRules(v []SubFormFieldRule)`

SetFormFieldRules sets FormFieldRules field to given value.

### HasFormFieldRules

`func (o *UnclaimedDraftCreateRequest) HasFormFieldRules() bool`

HasFormFieldRules returns a boolean if a field has been set.

### GetFormFieldsPerDocument

`func (o *UnclaimedDraftCreateRequest) GetFormFieldsPerDocument() []SubFormFieldsPerDocumentBase`

GetFormFieldsPerDocument returns the FormFieldsPerDocument field if non-nil, zero value otherwise.

### GetFormFieldsPerDocumentOk

`func (o *UnclaimedDraftCreateRequest) GetFormFieldsPerDocumentOk() (*[]SubFormFieldsPerDocumentBase, bool)`

GetFormFieldsPerDocumentOk returns a tuple with the FormFieldsPerDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFieldsPerDocument

`func (o *UnclaimedDraftCreateRequest) SetFormFieldsPerDocument(v []SubFormFieldsPerDocumentBase)`

SetFormFieldsPerDocument sets FormFieldsPerDocument field to given value.

### HasFormFieldsPerDocument

`func (o *UnclaimedDraftCreateRequest) HasFormFieldsPerDocument() bool`

HasFormFieldsPerDocument returns a boolean if a field has been set.

### GetHideTextTags

`func (o *UnclaimedDraftCreateRequest) GetHideTextTags() bool`

GetHideTextTags returns the HideTextTags field if non-nil, zero value otherwise.

### GetHideTextTagsOk

`func (o *UnclaimedDraftCreateRequest) GetHideTextTagsOk() (*bool, bool)`

GetHideTextTagsOk returns a tuple with the HideTextTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHideTextTags

`func (o *UnclaimedDraftCreateRequest) SetHideTextTags(v bool)`

SetHideTextTags sets HideTextTags field to given value.

### HasHideTextTags

`func (o *UnclaimedDraftCreateRequest) HasHideTextTags() bool`

HasHideTextTags returns a boolean if a field has been set.

### GetMessage

`func (o *UnclaimedDraftCreateRequest) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *UnclaimedDraftCreateRequest) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *UnclaimedDraftCreateRequest) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *UnclaimedDraftCreateRequest) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetMetadata

`func (o *UnclaimedDraftCreateRequest) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *UnclaimedDraftCreateRequest) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *UnclaimedDraftCreateRequest) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *UnclaimedDraftCreateRequest) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetShowProgressStepper

`func (o *UnclaimedDraftCreateRequest) GetShowProgressStepper() bool`

GetShowProgressStepper returns the ShowProgressStepper field if non-nil, zero value otherwise.

### GetShowProgressStepperOk

`func (o *UnclaimedDraftCreateRequest) GetShowProgressStepperOk() (*bool, bool)`

GetShowProgressStepperOk returns a tuple with the ShowProgressStepper field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowProgressStepper

`func (o *UnclaimedDraftCreateRequest) SetShowProgressStepper(v bool)`

SetShowProgressStepper sets ShowProgressStepper field to given value.

### HasShowProgressStepper

`func (o *UnclaimedDraftCreateRequest) HasShowProgressStepper() bool`

HasShowProgressStepper returns a boolean if a field has been set.

### GetSigners

`func (o *UnclaimedDraftCreateRequest) GetSigners() []SubUnclaimedDraftSigner`

GetSigners returns the Signers field if non-nil, zero value otherwise.

### GetSignersOk

`func (o *UnclaimedDraftCreateRequest) GetSignersOk() (*[]SubUnclaimedDraftSigner, bool)`

GetSignersOk returns a tuple with the Signers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigners

`func (o *UnclaimedDraftCreateRequest) SetSigners(v []SubUnclaimedDraftSigner)`

SetSigners sets Signers field to given value.

### HasSigners

`func (o *UnclaimedDraftCreateRequest) HasSigners() bool`

HasSigners returns a boolean if a field has been set.

### GetSigningOptions

`func (o *UnclaimedDraftCreateRequest) GetSigningOptions() SubSigningOptions`

GetSigningOptions returns the SigningOptions field if non-nil, zero value otherwise.

### GetSigningOptionsOk

`func (o *UnclaimedDraftCreateRequest) GetSigningOptionsOk() (*SubSigningOptions, bool)`

GetSigningOptionsOk returns a tuple with the SigningOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigningOptions

`func (o *UnclaimedDraftCreateRequest) SetSigningOptions(v SubSigningOptions)`

SetSigningOptions sets SigningOptions field to given value.

### HasSigningOptions

`func (o *UnclaimedDraftCreateRequest) HasSigningOptions() bool`

HasSigningOptions returns a boolean if a field has been set.

### GetSigningRedirectUrl

`func (o *UnclaimedDraftCreateRequest) GetSigningRedirectUrl() string`

GetSigningRedirectUrl returns the SigningRedirectUrl field if non-nil, zero value otherwise.

### GetSigningRedirectUrlOk

`func (o *UnclaimedDraftCreateRequest) GetSigningRedirectUrlOk() (*string, bool)`

GetSigningRedirectUrlOk returns a tuple with the SigningRedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigningRedirectUrl

`func (o *UnclaimedDraftCreateRequest) SetSigningRedirectUrl(v string)`

SetSigningRedirectUrl sets SigningRedirectUrl field to given value.

### HasSigningRedirectUrl

`func (o *UnclaimedDraftCreateRequest) HasSigningRedirectUrl() bool`

HasSigningRedirectUrl returns a boolean if a field has been set.

### GetSubject

`func (o *UnclaimedDraftCreateRequest) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *UnclaimedDraftCreateRequest) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *UnclaimedDraftCreateRequest) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *UnclaimedDraftCreateRequest) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### GetTestMode

`func (o *UnclaimedDraftCreateRequest) GetTestMode() bool`

GetTestMode returns the TestMode field if non-nil, zero value otherwise.

### GetTestModeOk

`func (o *UnclaimedDraftCreateRequest) GetTestModeOk() (*bool, bool)`

GetTestModeOk returns a tuple with the TestMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTestMode

`func (o *UnclaimedDraftCreateRequest) SetTestMode(v bool)`

SetTestMode sets TestMode field to given value.

### HasTestMode

`func (o *UnclaimedDraftCreateRequest) HasTestMode() bool`

HasTestMode returns a boolean if a field has been set.

### GetType

`func (o *UnclaimedDraftCreateRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *UnclaimedDraftCreateRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *UnclaimedDraftCreateRequest) SetType(v string)`

SetType sets Type field to given value.


### GetUsePreexistingFields

`func (o *UnclaimedDraftCreateRequest) GetUsePreexistingFields() bool`

GetUsePreexistingFields returns the UsePreexistingFields field if non-nil, zero value otherwise.

### GetUsePreexistingFieldsOk

`func (o *UnclaimedDraftCreateRequest) GetUsePreexistingFieldsOk() (*bool, bool)`

GetUsePreexistingFieldsOk returns a tuple with the UsePreexistingFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsePreexistingFields

`func (o *UnclaimedDraftCreateRequest) SetUsePreexistingFields(v bool)`

SetUsePreexistingFields sets UsePreexistingFields field to given value.

### HasUsePreexistingFields

`func (o *UnclaimedDraftCreateRequest) HasUsePreexistingFields() bool`

HasUsePreexistingFields returns a boolean if a field has been set.

### GetUseTextTags

`func (o *UnclaimedDraftCreateRequest) GetUseTextTags() bool`

GetUseTextTags returns the UseTextTags field if non-nil, zero value otherwise.

### GetUseTextTagsOk

`func (o *UnclaimedDraftCreateRequest) GetUseTextTagsOk() (*bool, bool)`

GetUseTextTagsOk returns a tuple with the UseTextTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseTextTags

`func (o *UnclaimedDraftCreateRequest) SetUseTextTags(v bool)`

SetUseTextTags sets UseTextTags field to given value.

### HasUseTextTags

`func (o *UnclaimedDraftCreateRequest) HasUseTextTags() bool`

HasUseTextTags returns a boolean if a field has been set.

### GetExpiresAt

`func (o *UnclaimedDraftCreateRequest) GetExpiresAt() int32`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *UnclaimedDraftCreateRequest) GetExpiresAtOk() (*int32, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *UnclaimedDraftCreateRequest) SetExpiresAt(v int32)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *UnclaimedDraftCreateRequest) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.

### SetExpiresAtNil

`func (o *UnclaimedDraftCreateRequest) SetExpiresAtNil(b bool)`

 SetExpiresAtNil sets the value for ExpiresAt to be an explicit nil

### UnsetExpiresAt
`func (o *UnclaimedDraftCreateRequest) UnsetExpiresAt()`

UnsetExpiresAt ensures that no value is present for ExpiresAt, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


