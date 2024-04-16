# UnclaimedDraftCreateEmbeddedWithTemplateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowDecline** | Pointer to **bool** | Allows signers to decline to sign a document if &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**AllowReassign** | Pointer to **bool** | Allows signers to reassign their signature requests to other signers if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;.  **Note**: Only available for Premium plan and higher. | [optional] [default to false]
**Ccs** | Pointer to [**[]SubCC**](SubCC.md) | Add CC email recipients. Required when a CC role exists for the Template. | [optional] 
**ClientId** | **string** | Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app. | 
**CustomFields** | Pointer to [**[]SubCustomField**](SubCustomField.md) | An array defining values and options for custom fields. Required when a custom field exists in the Template. | [optional] 
**EditorOptions** | Pointer to [**SubEditorOptions**](SubEditorOptions.md) |  | [optional] 
**FieldOptions** | Pointer to [**SubFieldOptions**](SubFieldOptions.md) |  | [optional] 
**Files** | Pointer to **[]*os.File** | Use &#x60;files[]&#x60; to append additional files to the signature request being created from the template. Dropbox Sign will parse the files for [text tags](https://app.hellosign.com/api/textTagsWalkthrough) and append it to the signature request. Text tags for signers not on the template(s) will be ignored.  **files** or **file_urls[]** is required, but not both. | [optional] 
**FileUrls** | Pointer to **[]string** | Use file_urls[] to append additional files to the signature request being created from the template. Dropbox Sign will download the file, then parse it for [text tags](https://app.hellosign.com/api/textTagsWalkthrough), and append to the signature request. Text tags for signers not on the template(s) will be ignored.  **files** or **file_urls[]** is required, but not both. | [optional] 
**ForceSignerRoles** | Pointer to **bool** | Provide users the ability to review/edit the template signer roles. | [optional] [default to false]
**ForceSubjectMessage** | Pointer to **bool** | Provide users the ability to review/edit the template subject and message. | [optional] [default to false]
**HoldRequest** | Pointer to **bool** | The request from this draft will not automatically send to signers post-claim if set to 1. Requester must [release](/api/reference/operation/signatureRequestReleaseHold/) the request from hold when ready to send. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**IsForEmbeddedSigning** | Pointer to **bool** | The request created from this draft will also be signable in embedded mode if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**Message** | Pointer to **string** | The custom message in the email that will be sent to the signers. | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer&#39;s order number for look up when receiving events for the signature request.  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. | [optional] 
**PreviewOnly** | Pointer to **bool** | This allows the requester to enable the preview experience (i.e. does not allow the requester&#39;s end user to add any additional fields via the editor).  - &#x60;preview_only&#x3D;true&#x60;: Allows requesters to enable the preview only experience. - &#x60;preview_only&#x3D;false&#x60;: Allows requesters to disable the preview only experience.  **Note**: This parameter overwrites &#x60;show_preview&#x3D;1&#x60; (if set). | [optional] [default to false]
**RequesterEmailAddress** | **string** | The email address of the user that should be designated as the requester of this draft. | 
**RequestingRedirectUrl** | Pointer to **string** | The URL you want signers redirected to after they successfully request a signature. | [optional] 
**ShowPreview** | Pointer to **bool** | This allows the requester to enable the editor/preview experience.  - &#x60;show_preview&#x3D;true&#x60;: Allows requesters to enable the editor/preview experience. - &#x60;show_preview&#x3D;false&#x60;: Allows requesters to disable the editor/preview experience. | [optional] [default to false]
**ShowProgressStepper** | Pointer to **bool** | When only one step remains in the signature request process and this parameter is set to &#x60;false&#x60; then the progress stepper will be hidden. | [optional] [default to true]
**Signers** | Pointer to [**[]SubUnclaimedDraftTemplateSigner**](SubUnclaimedDraftTemplateSigner.md) | Add Signers to your Templated-based Signature Request. | [optional] 
**SigningOptions** | Pointer to [**SubSigningOptions**](SubSigningOptions.md) |  | [optional] 
**SigningRedirectUrl** | Pointer to **string** | The URL you want signers redirected to after they successfully sign. | [optional] 
**SkipMeNow** | Pointer to **bool** | Disables the \&quot;Me (Now)\&quot; option for the person preparing the document. Does not work with type &#x60;send_document&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**Subject** | Pointer to **string** | The subject in the email that will be sent to the signers. | [optional] 
**TemplateIds** | **[]string** | Use &#x60;template_ids&#x60; to create a SignatureRequest from one or more templates, in the order in which the templates will be used. | 
**TestMode** | Pointer to **bool** | Whether this is a test, the signature request created from this draft will not be legally binding if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**Title** | Pointer to **string** | The title you want to assign to the SignatureRequest. | [optional] 
**PopulateAutoFillFields** | Pointer to **bool** | Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer&#39;s information during signing.  ⚠️ **Note** ⚠️: Keep your signer&#39;s information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature. | [optional] [default to false]
**AllowCcs** | Pointer to **bool** | This allows the requester to specify whether the user is allowed to provide email addresses to CC when claiming the draft. | [optional] [default to false]

## Methods

### NewUnclaimedDraftCreateEmbeddedWithTemplateRequest

`func NewUnclaimedDraftCreateEmbeddedWithTemplateRequest(clientId string, requesterEmailAddress string, templateIds []string, ) *UnclaimedDraftCreateEmbeddedWithTemplateRequest`

NewUnclaimedDraftCreateEmbeddedWithTemplateRequest instantiates a new UnclaimedDraftCreateEmbeddedWithTemplateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUnclaimedDraftCreateEmbeddedWithTemplateRequestWithDefaults

`func NewUnclaimedDraftCreateEmbeddedWithTemplateRequestWithDefaults() *UnclaimedDraftCreateEmbeddedWithTemplateRequest`

NewUnclaimedDraftCreateEmbeddedWithTemplateRequestWithDefaults instantiates a new UnclaimedDraftCreateEmbeddedWithTemplateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowDecline

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetAllowDecline() bool`

GetAllowDecline returns the AllowDecline field if non-nil, zero value otherwise.

### GetAllowDeclineOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetAllowDeclineOk() (*bool, bool)`

GetAllowDeclineOk returns a tuple with the AllowDecline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowDecline

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetAllowDecline(v bool)`

SetAllowDecline sets AllowDecline field to given value.

### HasAllowDecline

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasAllowDecline() bool`

HasAllowDecline returns a boolean if a field has been set.

### GetAllowReassign

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetAllowReassign() bool`

GetAllowReassign returns the AllowReassign field if non-nil, zero value otherwise.

### GetAllowReassignOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetAllowReassignOk() (*bool, bool)`

GetAllowReassignOk returns a tuple with the AllowReassign field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowReassign

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetAllowReassign(v bool)`

SetAllowReassign sets AllowReassign field to given value.

### HasAllowReassign

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasAllowReassign() bool`

HasAllowReassign returns a boolean if a field has been set.

### GetCcs

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetCcs() []SubCC`

GetCcs returns the Ccs field if non-nil, zero value otherwise.

### GetCcsOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetCcsOk() (*[]SubCC, bool)`

GetCcsOk returns a tuple with the Ccs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcs

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetCcs(v []SubCC)`

SetCcs sets Ccs field to given value.

### HasCcs

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasCcs() bool`

HasCcs returns a boolean if a field has been set.

### GetClientId

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetClientId(v string)`

SetClientId sets ClientId field to given value.


### GetCustomFields

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetCustomFields() []SubCustomField`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetCustomFieldsOk() (*[]SubCustomField, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetCustomFields(v []SubCustomField)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### GetEditorOptions

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetEditorOptions() SubEditorOptions`

GetEditorOptions returns the EditorOptions field if non-nil, zero value otherwise.

### GetEditorOptionsOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetEditorOptionsOk() (*SubEditorOptions, bool)`

GetEditorOptionsOk returns a tuple with the EditorOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditorOptions

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetEditorOptions(v SubEditorOptions)`

SetEditorOptions sets EditorOptions field to given value.

### HasEditorOptions

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasEditorOptions() bool`

HasEditorOptions returns a boolean if a field has been set.

### GetFieldOptions

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetFieldOptions() SubFieldOptions`

GetFieldOptions returns the FieldOptions field if non-nil, zero value otherwise.

### GetFieldOptionsOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetFieldOptionsOk() (*SubFieldOptions, bool)`

GetFieldOptionsOk returns a tuple with the FieldOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldOptions

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetFieldOptions(v SubFieldOptions)`

SetFieldOptions sets FieldOptions field to given value.

### HasFieldOptions

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasFieldOptions() bool`

HasFieldOptions returns a boolean if a field has been set.

### GetFiles

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetFiles() []*os.File`

GetFiles returns the Files field if non-nil, zero value otherwise.

### GetFilesOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetFilesOk() (*[]*os.File, bool)`

GetFilesOk returns a tuple with the Files field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiles

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetFiles(v []*os.File)`

SetFiles sets Files field to given value.

### HasFiles

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasFiles() bool`

HasFiles returns a boolean if a field has been set.

### GetFileUrls

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetFileUrls() []string`

GetFileUrls returns the FileUrls field if non-nil, zero value otherwise.

### GetFileUrlsOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetFileUrlsOk() (*[]string, bool)`

GetFileUrlsOk returns a tuple with the FileUrls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileUrls

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetFileUrls(v []string)`

SetFileUrls sets FileUrls field to given value.

### HasFileUrls

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasFileUrls() bool`

HasFileUrls returns a boolean if a field has been set.

### GetForceSignerRoles

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetForceSignerRoles() bool`

GetForceSignerRoles returns the ForceSignerRoles field if non-nil, zero value otherwise.

### GetForceSignerRolesOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetForceSignerRolesOk() (*bool, bool)`

GetForceSignerRolesOk returns a tuple with the ForceSignerRoles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForceSignerRoles

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetForceSignerRoles(v bool)`

SetForceSignerRoles sets ForceSignerRoles field to given value.

### HasForceSignerRoles

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasForceSignerRoles() bool`

HasForceSignerRoles returns a boolean if a field has been set.

### GetForceSubjectMessage

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetForceSubjectMessage() bool`

GetForceSubjectMessage returns the ForceSubjectMessage field if non-nil, zero value otherwise.

### GetForceSubjectMessageOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetForceSubjectMessageOk() (*bool, bool)`

GetForceSubjectMessageOk returns a tuple with the ForceSubjectMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForceSubjectMessage

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetForceSubjectMessage(v bool)`

SetForceSubjectMessage sets ForceSubjectMessage field to given value.

### HasForceSubjectMessage

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasForceSubjectMessage() bool`

HasForceSubjectMessage returns a boolean if a field has been set.

### GetHoldRequest

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetHoldRequest() bool`

GetHoldRequest returns the HoldRequest field if non-nil, zero value otherwise.

### GetHoldRequestOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetHoldRequestOk() (*bool, bool)`

GetHoldRequestOk returns a tuple with the HoldRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHoldRequest

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetHoldRequest(v bool)`

SetHoldRequest sets HoldRequest field to given value.

### HasHoldRequest

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasHoldRequest() bool`

HasHoldRequest returns a boolean if a field has been set.

### GetIsForEmbeddedSigning

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetIsForEmbeddedSigning() bool`

GetIsForEmbeddedSigning returns the IsForEmbeddedSigning field if non-nil, zero value otherwise.

### GetIsForEmbeddedSigningOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetIsForEmbeddedSigningOk() (*bool, bool)`

GetIsForEmbeddedSigningOk returns a tuple with the IsForEmbeddedSigning field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsForEmbeddedSigning

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetIsForEmbeddedSigning(v bool)`

SetIsForEmbeddedSigning sets IsForEmbeddedSigning field to given value.

### HasIsForEmbeddedSigning

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasIsForEmbeddedSigning() bool`

HasIsForEmbeddedSigning returns a boolean if a field has been set.

### GetMessage

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetMetadata

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetPreviewOnly

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetPreviewOnly() bool`

GetPreviewOnly returns the PreviewOnly field if non-nil, zero value otherwise.

### GetPreviewOnlyOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetPreviewOnlyOk() (*bool, bool)`

GetPreviewOnlyOk returns a tuple with the PreviewOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviewOnly

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetPreviewOnly(v bool)`

SetPreviewOnly sets PreviewOnly field to given value.

### HasPreviewOnly

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasPreviewOnly() bool`

HasPreviewOnly returns a boolean if a field has been set.

### GetRequesterEmailAddress

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetRequesterEmailAddress() string`

GetRequesterEmailAddress returns the RequesterEmailAddress field if non-nil, zero value otherwise.

### GetRequesterEmailAddressOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetRequesterEmailAddressOk() (*string, bool)`

GetRequesterEmailAddressOk returns a tuple with the RequesterEmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterEmailAddress

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetRequesterEmailAddress(v string)`

SetRequesterEmailAddress sets RequesterEmailAddress field to given value.


### GetRequestingRedirectUrl

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetRequestingRedirectUrl() string`

GetRequestingRedirectUrl returns the RequestingRedirectUrl field if non-nil, zero value otherwise.

### GetRequestingRedirectUrlOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetRequestingRedirectUrlOk() (*string, bool)`

GetRequestingRedirectUrlOk returns a tuple with the RequestingRedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestingRedirectUrl

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetRequestingRedirectUrl(v string)`

SetRequestingRedirectUrl sets RequestingRedirectUrl field to given value.

### HasRequestingRedirectUrl

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasRequestingRedirectUrl() bool`

HasRequestingRedirectUrl returns a boolean if a field has been set.

### GetShowPreview

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetShowPreview() bool`

GetShowPreview returns the ShowPreview field if non-nil, zero value otherwise.

### GetShowPreviewOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetShowPreviewOk() (*bool, bool)`

GetShowPreviewOk returns a tuple with the ShowPreview field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowPreview

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetShowPreview(v bool)`

SetShowPreview sets ShowPreview field to given value.

### HasShowPreview

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasShowPreview() bool`

HasShowPreview returns a boolean if a field has been set.

### GetShowProgressStepper

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetShowProgressStepper() bool`

GetShowProgressStepper returns the ShowProgressStepper field if non-nil, zero value otherwise.

### GetShowProgressStepperOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetShowProgressStepperOk() (*bool, bool)`

GetShowProgressStepperOk returns a tuple with the ShowProgressStepper field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowProgressStepper

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetShowProgressStepper(v bool)`

SetShowProgressStepper sets ShowProgressStepper field to given value.

### HasShowProgressStepper

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasShowProgressStepper() bool`

HasShowProgressStepper returns a boolean if a field has been set.

### GetSigners

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetSigners() []SubUnclaimedDraftTemplateSigner`

GetSigners returns the Signers field if non-nil, zero value otherwise.

### GetSignersOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetSignersOk() (*[]SubUnclaimedDraftTemplateSigner, bool)`

GetSignersOk returns a tuple with the Signers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigners

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetSigners(v []SubUnclaimedDraftTemplateSigner)`

SetSigners sets Signers field to given value.

### HasSigners

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasSigners() bool`

HasSigners returns a boolean if a field has been set.

### GetSigningOptions

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetSigningOptions() SubSigningOptions`

GetSigningOptions returns the SigningOptions field if non-nil, zero value otherwise.

### GetSigningOptionsOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetSigningOptionsOk() (*SubSigningOptions, bool)`

GetSigningOptionsOk returns a tuple with the SigningOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigningOptions

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetSigningOptions(v SubSigningOptions)`

SetSigningOptions sets SigningOptions field to given value.

### HasSigningOptions

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasSigningOptions() bool`

HasSigningOptions returns a boolean if a field has been set.

### GetSigningRedirectUrl

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetSigningRedirectUrl() string`

GetSigningRedirectUrl returns the SigningRedirectUrl field if non-nil, zero value otherwise.

### GetSigningRedirectUrlOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetSigningRedirectUrlOk() (*string, bool)`

GetSigningRedirectUrlOk returns a tuple with the SigningRedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigningRedirectUrl

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetSigningRedirectUrl(v string)`

SetSigningRedirectUrl sets SigningRedirectUrl field to given value.

### HasSigningRedirectUrl

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasSigningRedirectUrl() bool`

HasSigningRedirectUrl returns a boolean if a field has been set.

### GetSkipMeNow

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetSkipMeNow() bool`

GetSkipMeNow returns the SkipMeNow field if non-nil, zero value otherwise.

### GetSkipMeNowOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetSkipMeNowOk() (*bool, bool)`

GetSkipMeNowOk returns a tuple with the SkipMeNow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSkipMeNow

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetSkipMeNow(v bool)`

SetSkipMeNow sets SkipMeNow field to given value.

### HasSkipMeNow

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasSkipMeNow() bool`

HasSkipMeNow returns a boolean if a field has been set.

### GetSubject

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### GetTemplateIds

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetTemplateIds() []string`

GetTemplateIds returns the TemplateIds field if non-nil, zero value otherwise.

### GetTemplateIdsOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetTemplateIdsOk() (*[]string, bool)`

GetTemplateIdsOk returns a tuple with the TemplateIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateIds

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetTemplateIds(v []string)`

SetTemplateIds sets TemplateIds field to given value.


### GetTestMode

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetTestMode() bool`

GetTestMode returns the TestMode field if non-nil, zero value otherwise.

### GetTestModeOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetTestModeOk() (*bool, bool)`

GetTestModeOk returns a tuple with the TestMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTestMode

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetTestMode(v bool)`

SetTestMode sets TestMode field to given value.

### HasTestMode

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasTestMode() bool`

HasTestMode returns a boolean if a field has been set.

### GetTitle

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetPopulateAutoFillFields

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetPopulateAutoFillFields() bool`

GetPopulateAutoFillFields returns the PopulateAutoFillFields field if non-nil, zero value otherwise.

### GetPopulateAutoFillFieldsOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetPopulateAutoFillFieldsOk() (*bool, bool)`

GetPopulateAutoFillFieldsOk returns a tuple with the PopulateAutoFillFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPopulateAutoFillFields

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetPopulateAutoFillFields(v bool)`

SetPopulateAutoFillFields sets PopulateAutoFillFields field to given value.

### HasPopulateAutoFillFields

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasPopulateAutoFillFields() bool`

HasPopulateAutoFillFields returns a boolean if a field has been set.

### GetAllowCcs

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetAllowCcs() bool`

GetAllowCcs returns the AllowCcs field if non-nil, zero value otherwise.

### GetAllowCcsOk

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) GetAllowCcsOk() (*bool, bool)`

GetAllowCcsOk returns a tuple with the AllowCcs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowCcs

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) SetAllowCcs(v bool)`

SetAllowCcs sets AllowCcs field to given value.

### HasAllowCcs

`func (o *UnclaimedDraftCreateEmbeddedWithTemplateRequest) HasAllowCcs() bool`

HasAllowCcs returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


