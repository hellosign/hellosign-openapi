# UnclaimedDraftCreateEmbeddedRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Files** | Pointer to **[]*os.File** | Use &#x60;files[]&#x60; to indicate the uploaded file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both. | [optional] 
**FileUrls** | Pointer to **[]string** | Use &#x60;file_urls[]&#x60; to have Dropbox Sign download the file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both. | [optional] 
**AllowCcs** | Pointer to **bool** | This allows the requester to specify whether the user is allowed to provide email addresses to CC when claiming the draft. | [optional] [default to true]
**AllowDecline** | Pointer to **bool** | Allows signers to decline to sign a document if &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**AllowReassign** | Pointer to **bool** | Allows signers to reassign their signature requests to other signers if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;.  **Note**: Only available for Premium plan and higher. | [optional] [default to false]
**Attachments** | Pointer to [**[]SubAttachment**](SubAttachment.md) | A list describing the attachments | [optional] 
**CcEmailAddresses** | Pointer to **[]string** | The email addresses that should be CCed. | [optional] 
**ClientId** | **string** | Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app. | 
**CustomFields** | Pointer to [**[]SubCustomField**](SubCustomField.md) | When used together with merge fields, &#x60;custom_fields&#x60; allows users to add pre-filled data to their signature requests.  Pre-filled data can be used with \&quot;send-once\&quot; signature requests by adding merge fields with &#x60;form_fields_per_document&#x60; or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with &#x60;custom_fields&#x60; together in one API call.  For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing &#x60;custom_fields&#x60; on subsequent signature requests referencing that template. | [optional] 
**EditorOptions** | Pointer to [**SubEditorOptions**](SubEditorOptions.md) |  | [optional] 
**FieldOptions** | Pointer to [**SubFieldOptions**](SubFieldOptions.md) |  | [optional] 
**ForceSignerPage** | Pointer to **bool** | Provide users the ability to review/edit the signers. | [optional] [default to false]
**ForceSubjectMessage** | Pointer to **bool** | Provide users the ability to review/edit the subject and message. | [optional] [default to false]
**FormFieldGroups** | Pointer to [**[]SubFormFieldGroup**](SubFormFieldGroup.md) | Group information for fields defined in &#x60;form_fields_per_document&#x60;. String-indexed JSON array with &#x60;group_label&#x60; and &#x60;requirement&#x60; keys. &#x60;form_fields_per_document&#x60; must contain fields referencing a group defined in &#x60;form_field_groups&#x60;. | [optional] 
**FormFieldRules** | Pointer to [**[]SubFormFieldRule**](SubFormFieldRule.md) | Conditional Logic rules for fields defined in &#x60;form_fields_per_document&#x60;. | [optional] 
**FormFieldsPerDocument** | Pointer to [**[]SubFormFieldsPerDocumentBase**](SubFormFieldsPerDocumentBase.md) | The fields that should appear on the document, expressed as an array of objects. (For more details you can read about it here: [Using Form Fields per Document](/docs/openapi/form-fields-per-document).)  **NOTE**: Fields like **text**, **dropdown**, **checkbox**, **radio**, and **hyperlink** have additional required and optional parameters. Check out the list of [additional parameters](/api/reference/constants/#form-fields-per-document) for these field types.  * Text Field use &#x60;SubFormFieldsPerDocumentText&#x60; * Dropdown Field use &#x60;SubFormFieldsPerDocumentDropdown&#x60; * Hyperlink Field use &#x60;SubFormFieldsPerDocumentHyperlink&#x60; * Checkbox Field use &#x60;SubFormFieldsPerDocumentCheckbox&#x60; * Radio Field use &#x60;SubFormFieldsPerDocumentRadio&#x60; * Signature Field use &#x60;SubFormFieldsPerDocumentSignature&#x60; * Date Signed Field use &#x60;SubFormFieldsPerDocumentDateSigned&#x60; * Initials Field use &#x60;SubFormFieldsPerDocumentInitials&#x60; * Text Merge Field use &#x60;SubFormFieldsPerDocumentTextMerge&#x60; * Checkbox Merge Field use &#x60;SubFormFieldsPerDocumentCheckboxMerge&#x60; | [optional] 
**HideTextTags** | Pointer to **bool** | Send with a value of &#x60;true&#x60; if you wish to enable automatic Text Tag removal. Defaults to &#x60;false&#x60;. When using Text Tags it is preferred that you set this to &#x60;false&#x60; and hide your tags with white text or something similar because the automatic removal system can cause unwanted clipping. See the [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) walkthrough for more details. | [optional] [default to false]
**HoldRequest** | Pointer to **bool** | The request from this draft will not automatically send to signers post-claim if set to &#x60;true&#x60;. Requester must [release](/api/reference/operation/signatureRequestReleaseHold/) the request from hold when ready to send. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**IsForEmbeddedSigning** | Pointer to **bool** | The request created from this draft will also be signable in embedded mode if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**Message** | Pointer to **string** | The custom message in the email that will be sent to the signers. | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer&#39;s order number for look up when receiving events for the signature request.  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. | [optional] 
**RequesterEmailAddress** | **string** | The email address of the user that should be designated as the requester of this draft, if the draft type is &#x60;request_signature&#x60;. | 
**RequestingRedirectUrl** | Pointer to **string** | The URL you want signers redirected to after they successfully request a signature. | [optional] 
**ShowPreview** | Pointer to **bool** | This allows the requester to enable the editor/preview experience.  - &#x60;show_preview&#x3D;true&#x60;: Allows requesters to enable the editor/preview experience. - &#x60;show_preview&#x3D;false&#x60;: Allows requesters to disable the editor/preview experience. | [optional] 
**ShowProgressStepper** | Pointer to **bool** | When only one step remains in the signature request process and this parameter is set to &#x60;false&#x60; then the progress stepper will be hidden. | [optional] [default to true]
**Signers** | Pointer to [**[]SubUnclaimedDraftSigner**](SubUnclaimedDraftSigner.md) | Add Signers to your Unclaimed Draft Signature Request. | [optional] 
**SigningOptions** | Pointer to [**SubSigningOptions**](SubSigningOptions.md) |  | [optional] 
**SigningRedirectUrl** | Pointer to **string** | The URL you want signers redirected to after they successfully sign. | [optional] 
**SkipMeNow** | Pointer to **bool** | Disables the \&quot;Me (Now)\&quot; option for the person preparing the document. Does not work with type &#x60;send_document&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**Subject** | Pointer to **string** | The subject in the email that will be sent to the signers. | [optional] 
**TestMode** | Pointer to **bool** | Whether this is a test, the signature request created from this draft will not be legally binding if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**Type** | Pointer to **string** | The type of the draft. By default this is &#x60;request_signature&#x60;, but you can set it to &#x60;send_document&#x60; if you want to self sign a document and download it. | [optional] [default to "request_signature"]
**UsePreexistingFields** | Pointer to **bool** | Set &#x60;use_text_tags&#x60; to &#x60;true&#x60; to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document (defaults to disabled, or &#x60;false&#x60;). Alternatively, if your PDF contains pre-defined fields, enable the detection of these fields by setting the &#x60;use_preexisting_fields&#x60; to &#x60;true&#x60; (defaults to disabled, or &#x60;false&#x60;). Currently we only support use of either &#x60;use_text_tags&#x60; or &#x60;use_preexisting_fields&#x60; parameter, not both. | [optional] [default to false]
**UseTextTags** | Pointer to **bool** | Set &#x60;use_text_tags&#x60; to &#x60;true&#x60; to enable [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) parsing in your document (defaults to disabled, or &#x60;false&#x60;). Alternatively, if your PDF contains pre-defined fields, enable the detection of these fields by setting the &#x60;use_preexisting_fields&#x60; to &#x60;true&#x60; (defaults to disabled, or &#x60;false&#x60;). Currently we only support use of either &#x60;use_text_tags&#x60; or &#x60;use_preexisting_fields&#x60; parameter, not both. | [optional] [default to false]
**PopulateAutoFillFields** | Pointer to **bool** | Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer&#39;s information during signing.  ⚠️ **Note** ⚠️: Keep your signer&#39;s information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature. | [optional] [default to false]
**ExpiresAt** | Pointer to **NullableInt32** | When the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details.  **Note**: This does not correspond to the **expires_at** returned in the response. | [optional] 

## Methods

### NewUnclaimedDraftCreateEmbeddedRequest

`func NewUnclaimedDraftCreateEmbeddedRequest(clientId string, requesterEmailAddress string, ) *UnclaimedDraftCreateEmbeddedRequest`

NewUnclaimedDraftCreateEmbeddedRequest instantiates a new UnclaimedDraftCreateEmbeddedRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUnclaimedDraftCreateEmbeddedRequestWithDefaults

`func NewUnclaimedDraftCreateEmbeddedRequestWithDefaults() *UnclaimedDraftCreateEmbeddedRequest`

NewUnclaimedDraftCreateEmbeddedRequestWithDefaults instantiates a new UnclaimedDraftCreateEmbeddedRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFiles

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetFiles() []*os.File`

GetFiles returns the Files field if non-nil, zero value otherwise.

### GetFilesOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetFilesOk() (*[]*os.File, bool)`

GetFilesOk returns a tuple with the Files field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiles

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetFiles(v []*os.File)`

SetFiles sets Files field to given value.

### HasFiles

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasFiles() bool`

HasFiles returns a boolean if a field has been set.

### GetFileUrls

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetFileUrls() []string`

GetFileUrls returns the FileUrls field if non-nil, zero value otherwise.

### GetFileUrlsOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetFileUrlsOk() (*[]string, bool)`

GetFileUrlsOk returns a tuple with the FileUrls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileUrls

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetFileUrls(v []string)`

SetFileUrls sets FileUrls field to given value.

### HasFileUrls

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasFileUrls() bool`

HasFileUrls returns a boolean if a field has been set.

### GetAllowCcs

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetAllowCcs() bool`

GetAllowCcs returns the AllowCcs field if non-nil, zero value otherwise.

### GetAllowCcsOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetAllowCcsOk() (*bool, bool)`

GetAllowCcsOk returns a tuple with the AllowCcs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowCcs

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetAllowCcs(v bool)`

SetAllowCcs sets AllowCcs field to given value.

### HasAllowCcs

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasAllowCcs() bool`

HasAllowCcs returns a boolean if a field has been set.

### GetAllowDecline

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetAllowDecline() bool`

GetAllowDecline returns the AllowDecline field if non-nil, zero value otherwise.

### GetAllowDeclineOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetAllowDeclineOk() (*bool, bool)`

GetAllowDeclineOk returns a tuple with the AllowDecline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowDecline

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetAllowDecline(v bool)`

SetAllowDecline sets AllowDecline field to given value.

### HasAllowDecline

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasAllowDecline() bool`

HasAllowDecline returns a boolean if a field has been set.

### GetAllowReassign

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetAllowReassign() bool`

GetAllowReassign returns the AllowReassign field if non-nil, zero value otherwise.

### GetAllowReassignOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetAllowReassignOk() (*bool, bool)`

GetAllowReassignOk returns a tuple with the AllowReassign field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowReassign

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetAllowReassign(v bool)`

SetAllowReassign sets AllowReassign field to given value.

### HasAllowReassign

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasAllowReassign() bool`

HasAllowReassign returns a boolean if a field has been set.

### GetAttachments

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetAttachments() []SubAttachment`

GetAttachments returns the Attachments field if non-nil, zero value otherwise.

### GetAttachmentsOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetAttachmentsOk() (*[]SubAttachment, bool)`

GetAttachmentsOk returns a tuple with the Attachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachments

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetAttachments(v []SubAttachment)`

SetAttachments sets Attachments field to given value.

### HasAttachments

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasAttachments() bool`

HasAttachments returns a boolean if a field has been set.

### GetCcEmailAddresses

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetCcEmailAddresses() []string`

GetCcEmailAddresses returns the CcEmailAddresses field if non-nil, zero value otherwise.

### GetCcEmailAddressesOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetCcEmailAddressesOk() (*[]string, bool)`

GetCcEmailAddressesOk returns a tuple with the CcEmailAddresses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcEmailAddresses

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetCcEmailAddresses(v []string)`

SetCcEmailAddresses sets CcEmailAddresses field to given value.

### HasCcEmailAddresses

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasCcEmailAddresses() bool`

HasCcEmailAddresses returns a boolean if a field has been set.

### GetClientId

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetClientId(v string)`

SetClientId sets ClientId field to given value.


### GetCustomFields

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetCustomFields() []SubCustomField`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetCustomFieldsOk() (*[]SubCustomField, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetCustomFields(v []SubCustomField)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### GetEditorOptions

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetEditorOptions() SubEditorOptions`

GetEditorOptions returns the EditorOptions field if non-nil, zero value otherwise.

### GetEditorOptionsOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetEditorOptionsOk() (*SubEditorOptions, bool)`

GetEditorOptionsOk returns a tuple with the EditorOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditorOptions

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetEditorOptions(v SubEditorOptions)`

SetEditorOptions sets EditorOptions field to given value.

### HasEditorOptions

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasEditorOptions() bool`

HasEditorOptions returns a boolean if a field has been set.

### GetFieldOptions

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetFieldOptions() SubFieldOptions`

GetFieldOptions returns the FieldOptions field if non-nil, zero value otherwise.

### GetFieldOptionsOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetFieldOptionsOk() (*SubFieldOptions, bool)`

GetFieldOptionsOk returns a tuple with the FieldOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldOptions

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetFieldOptions(v SubFieldOptions)`

SetFieldOptions sets FieldOptions field to given value.

### HasFieldOptions

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasFieldOptions() bool`

HasFieldOptions returns a boolean if a field has been set.

### GetForceSignerPage

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetForceSignerPage() bool`

GetForceSignerPage returns the ForceSignerPage field if non-nil, zero value otherwise.

### GetForceSignerPageOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetForceSignerPageOk() (*bool, bool)`

GetForceSignerPageOk returns a tuple with the ForceSignerPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForceSignerPage

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetForceSignerPage(v bool)`

SetForceSignerPage sets ForceSignerPage field to given value.

### HasForceSignerPage

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasForceSignerPage() bool`

HasForceSignerPage returns a boolean if a field has been set.

### GetForceSubjectMessage

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetForceSubjectMessage() bool`

GetForceSubjectMessage returns the ForceSubjectMessage field if non-nil, zero value otherwise.

### GetForceSubjectMessageOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetForceSubjectMessageOk() (*bool, bool)`

GetForceSubjectMessageOk returns a tuple with the ForceSubjectMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForceSubjectMessage

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetForceSubjectMessage(v bool)`

SetForceSubjectMessage sets ForceSubjectMessage field to given value.

### HasForceSubjectMessage

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasForceSubjectMessage() bool`

HasForceSubjectMessage returns a boolean if a field has been set.

### GetFormFieldGroups

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetFormFieldGroups() []SubFormFieldGroup`

GetFormFieldGroups returns the FormFieldGroups field if non-nil, zero value otherwise.

### GetFormFieldGroupsOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetFormFieldGroupsOk() (*[]SubFormFieldGroup, bool)`

GetFormFieldGroupsOk returns a tuple with the FormFieldGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFieldGroups

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetFormFieldGroups(v []SubFormFieldGroup)`

SetFormFieldGroups sets FormFieldGroups field to given value.

### HasFormFieldGroups

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasFormFieldGroups() bool`

HasFormFieldGroups returns a boolean if a field has been set.

### GetFormFieldRules

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetFormFieldRules() []SubFormFieldRule`

GetFormFieldRules returns the FormFieldRules field if non-nil, zero value otherwise.

### GetFormFieldRulesOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetFormFieldRulesOk() (*[]SubFormFieldRule, bool)`

GetFormFieldRulesOk returns a tuple with the FormFieldRules field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFieldRules

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetFormFieldRules(v []SubFormFieldRule)`

SetFormFieldRules sets FormFieldRules field to given value.

### HasFormFieldRules

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasFormFieldRules() bool`

HasFormFieldRules returns a boolean if a field has been set.

### GetFormFieldsPerDocument

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetFormFieldsPerDocument() []SubFormFieldsPerDocumentBase`

GetFormFieldsPerDocument returns the FormFieldsPerDocument field if non-nil, zero value otherwise.

### GetFormFieldsPerDocumentOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetFormFieldsPerDocumentOk() (*[]SubFormFieldsPerDocumentBase, bool)`

GetFormFieldsPerDocumentOk returns a tuple with the FormFieldsPerDocument field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormFieldsPerDocument

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetFormFieldsPerDocument(v []SubFormFieldsPerDocumentBase)`

SetFormFieldsPerDocument sets FormFieldsPerDocument field to given value.

### HasFormFieldsPerDocument

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasFormFieldsPerDocument() bool`

HasFormFieldsPerDocument returns a boolean if a field has been set.

### GetHideTextTags

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetHideTextTags() bool`

GetHideTextTags returns the HideTextTags field if non-nil, zero value otherwise.

### GetHideTextTagsOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetHideTextTagsOk() (*bool, bool)`

GetHideTextTagsOk returns a tuple with the HideTextTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHideTextTags

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetHideTextTags(v bool)`

SetHideTextTags sets HideTextTags field to given value.

### HasHideTextTags

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasHideTextTags() bool`

HasHideTextTags returns a boolean if a field has been set.

### GetHoldRequest

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetHoldRequest() bool`

GetHoldRequest returns the HoldRequest field if non-nil, zero value otherwise.

### GetHoldRequestOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetHoldRequestOk() (*bool, bool)`

GetHoldRequestOk returns a tuple with the HoldRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHoldRequest

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetHoldRequest(v bool)`

SetHoldRequest sets HoldRequest field to given value.

### HasHoldRequest

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasHoldRequest() bool`

HasHoldRequest returns a boolean if a field has been set.

### GetIsForEmbeddedSigning

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetIsForEmbeddedSigning() bool`

GetIsForEmbeddedSigning returns the IsForEmbeddedSigning field if non-nil, zero value otherwise.

### GetIsForEmbeddedSigningOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetIsForEmbeddedSigningOk() (*bool, bool)`

GetIsForEmbeddedSigningOk returns a tuple with the IsForEmbeddedSigning field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsForEmbeddedSigning

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetIsForEmbeddedSigning(v bool)`

SetIsForEmbeddedSigning sets IsForEmbeddedSigning field to given value.

### HasIsForEmbeddedSigning

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasIsForEmbeddedSigning() bool`

HasIsForEmbeddedSigning returns a boolean if a field has been set.

### GetMessage

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetMetadata

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetRequesterEmailAddress

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetRequesterEmailAddress() string`

GetRequesterEmailAddress returns the RequesterEmailAddress field if non-nil, zero value otherwise.

### GetRequesterEmailAddressOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetRequesterEmailAddressOk() (*string, bool)`

GetRequesterEmailAddressOk returns a tuple with the RequesterEmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterEmailAddress

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetRequesterEmailAddress(v string)`

SetRequesterEmailAddress sets RequesterEmailAddress field to given value.


### GetRequestingRedirectUrl

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetRequestingRedirectUrl() string`

GetRequestingRedirectUrl returns the RequestingRedirectUrl field if non-nil, zero value otherwise.

### GetRequestingRedirectUrlOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetRequestingRedirectUrlOk() (*string, bool)`

GetRequestingRedirectUrlOk returns a tuple with the RequestingRedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestingRedirectUrl

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetRequestingRedirectUrl(v string)`

SetRequestingRedirectUrl sets RequestingRedirectUrl field to given value.

### HasRequestingRedirectUrl

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasRequestingRedirectUrl() bool`

HasRequestingRedirectUrl returns a boolean if a field has been set.

### GetShowPreview

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetShowPreview() bool`

GetShowPreview returns the ShowPreview field if non-nil, zero value otherwise.

### GetShowPreviewOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetShowPreviewOk() (*bool, bool)`

GetShowPreviewOk returns a tuple with the ShowPreview field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowPreview

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetShowPreview(v bool)`

SetShowPreview sets ShowPreview field to given value.

### HasShowPreview

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasShowPreview() bool`

HasShowPreview returns a boolean if a field has been set.

### GetShowProgressStepper

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetShowProgressStepper() bool`

GetShowProgressStepper returns the ShowProgressStepper field if non-nil, zero value otherwise.

### GetShowProgressStepperOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetShowProgressStepperOk() (*bool, bool)`

GetShowProgressStepperOk returns a tuple with the ShowProgressStepper field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowProgressStepper

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetShowProgressStepper(v bool)`

SetShowProgressStepper sets ShowProgressStepper field to given value.

### HasShowProgressStepper

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasShowProgressStepper() bool`

HasShowProgressStepper returns a boolean if a field has been set.

### GetSigners

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetSigners() []SubUnclaimedDraftSigner`

GetSigners returns the Signers field if non-nil, zero value otherwise.

### GetSignersOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetSignersOk() (*[]SubUnclaimedDraftSigner, bool)`

GetSignersOk returns a tuple with the Signers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigners

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetSigners(v []SubUnclaimedDraftSigner)`

SetSigners sets Signers field to given value.

### HasSigners

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasSigners() bool`

HasSigners returns a boolean if a field has been set.

### GetSigningOptions

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetSigningOptions() SubSigningOptions`

GetSigningOptions returns the SigningOptions field if non-nil, zero value otherwise.

### GetSigningOptionsOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetSigningOptionsOk() (*SubSigningOptions, bool)`

GetSigningOptionsOk returns a tuple with the SigningOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigningOptions

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetSigningOptions(v SubSigningOptions)`

SetSigningOptions sets SigningOptions field to given value.

### HasSigningOptions

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasSigningOptions() bool`

HasSigningOptions returns a boolean if a field has been set.

### GetSigningRedirectUrl

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetSigningRedirectUrl() string`

GetSigningRedirectUrl returns the SigningRedirectUrl field if non-nil, zero value otherwise.

### GetSigningRedirectUrlOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetSigningRedirectUrlOk() (*string, bool)`

GetSigningRedirectUrlOk returns a tuple with the SigningRedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigningRedirectUrl

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetSigningRedirectUrl(v string)`

SetSigningRedirectUrl sets SigningRedirectUrl field to given value.

### HasSigningRedirectUrl

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasSigningRedirectUrl() bool`

HasSigningRedirectUrl returns a boolean if a field has been set.

### GetSkipMeNow

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetSkipMeNow() bool`

GetSkipMeNow returns the SkipMeNow field if non-nil, zero value otherwise.

### GetSkipMeNowOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetSkipMeNowOk() (*bool, bool)`

GetSkipMeNowOk returns a tuple with the SkipMeNow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSkipMeNow

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetSkipMeNow(v bool)`

SetSkipMeNow sets SkipMeNow field to given value.

### HasSkipMeNow

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasSkipMeNow() bool`

HasSkipMeNow returns a boolean if a field has been set.

### GetSubject

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### GetTestMode

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetTestMode() bool`

GetTestMode returns the TestMode field if non-nil, zero value otherwise.

### GetTestModeOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetTestModeOk() (*bool, bool)`

GetTestModeOk returns a tuple with the TestMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTestMode

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetTestMode(v bool)`

SetTestMode sets TestMode field to given value.

### HasTestMode

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasTestMode() bool`

HasTestMode returns a boolean if a field has been set.

### GetType

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUsePreexistingFields

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetUsePreexistingFields() bool`

GetUsePreexistingFields returns the UsePreexistingFields field if non-nil, zero value otherwise.

### GetUsePreexistingFieldsOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetUsePreexistingFieldsOk() (*bool, bool)`

GetUsePreexistingFieldsOk returns a tuple with the UsePreexistingFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsePreexistingFields

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetUsePreexistingFields(v bool)`

SetUsePreexistingFields sets UsePreexistingFields field to given value.

### HasUsePreexistingFields

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasUsePreexistingFields() bool`

HasUsePreexistingFields returns a boolean if a field has been set.

### GetUseTextTags

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetUseTextTags() bool`

GetUseTextTags returns the UseTextTags field if non-nil, zero value otherwise.

### GetUseTextTagsOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetUseTextTagsOk() (*bool, bool)`

GetUseTextTagsOk returns a tuple with the UseTextTags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseTextTags

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetUseTextTags(v bool)`

SetUseTextTags sets UseTextTags field to given value.

### HasUseTextTags

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasUseTextTags() bool`

HasUseTextTags returns a boolean if a field has been set.

### GetPopulateAutoFillFields

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetPopulateAutoFillFields() bool`

GetPopulateAutoFillFields returns the PopulateAutoFillFields field if non-nil, zero value otherwise.

### GetPopulateAutoFillFieldsOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetPopulateAutoFillFieldsOk() (*bool, bool)`

GetPopulateAutoFillFieldsOk returns a tuple with the PopulateAutoFillFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPopulateAutoFillFields

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetPopulateAutoFillFields(v bool)`

SetPopulateAutoFillFields sets PopulateAutoFillFields field to given value.

### HasPopulateAutoFillFields

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasPopulateAutoFillFields() bool`

HasPopulateAutoFillFields returns a boolean if a field has been set.

### GetExpiresAt

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetExpiresAt() int32`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *UnclaimedDraftCreateEmbeddedRequest) GetExpiresAtOk() (*int32, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetExpiresAt(v int32)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *UnclaimedDraftCreateEmbeddedRequest) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.

### SetExpiresAtNil

`func (o *UnclaimedDraftCreateEmbeddedRequest) SetExpiresAtNil(b bool)`

 SetExpiresAtNil sets the value for ExpiresAt to be an explicit nil

### UnsetExpiresAt
`func (o *UnclaimedDraftCreateEmbeddedRequest) UnsetExpiresAt()`

UnsetExpiresAt ensures that no value is present for ExpiresAt, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


