# BulkSendJobGetResponseSignatureRequests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TestMode** | Pointer to **NullableBool** | Whether this is a test signature request. Test requests have no legal value. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**SignatureRequestId** | Pointer to **string** | The id of the SignatureRequest. | [optional] 
**RequesterEmailAddress** | Pointer to **string** | The email address of the initiator of the SignatureRequest. | [optional] 
**Title** | Pointer to **string** | The title the specified Account uses for the SignatureRequest. | [optional] 
**OriginalTitle** | Pointer to **string** | Default Label for account. | [optional] 
**Subject** | Pointer to **NullableString** | The subject in the email that was initially sent to the signers. | [optional] 
**Message** | Pointer to **NullableString** | The custom message in the email that was initially sent to the signers. | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | The metadata attached to the signature request. | [optional] 
**CreatedAt** | Pointer to **int32** | Time the signature request was created. | [optional] 
**ExpiresAt** | Pointer to **int32** | The time when the signature request will expire unsigned signatures. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details. | [optional] 
**IsComplete** | Pointer to **bool** | Whether or not the SignatureRequest has been fully executed by all signers. | [optional] 
**IsDeclined** | Pointer to **bool** | Whether or not the SignatureRequest has been declined by a signer. | [optional] 
**HasError** | Pointer to **bool** | Whether or not an error occurred (either during the creation of the SignatureRequest or during one of the signings). | [optional] 
**FilesUrl** | Pointer to **string** | The URL where a copy of the request&#39;s documents can be downloaded. | [optional] 
**SigningUrl** | Pointer to **NullableString** | The URL where a signer, after authenticating, can sign the documents. This should only be used by users with existing Dropbox Sign accounts as they will be required to log in before signing. | [optional] 
**DetailsUrl** | Pointer to **string** | The URL where the requester and the signers can view the current status of the SignatureRequest. | [optional] 
**CcEmailAddresses** | Pointer to **[]string** | A list of email addresses that were CCed on the SignatureRequest. They will receive a copy of the final PDF once all the signers have signed. | [optional] 
**SigningRedirectUrl** | Pointer to **NullableString** | The URL you want the signer redirected to after they successfully sign. | [optional] 
**FinalCopyUri** | Pointer to **NullableString** | The path where the completed document can be downloaded | [optional] 
**TemplateIds** | Pointer to **[]string** | Templates IDs used in this SignatureRequest (if any). | [optional] 
**CustomFields** | Pointer to [**[]SignatureRequestResponseCustomFieldBase**](SignatureRequestResponseCustomFieldBase.md) | An array of Custom Field objects containing the name and type of each custom field.  * Text Field uses &#x60;SignatureRequestResponseCustomFieldText&#x60; * Checkbox Field uses &#x60;SignatureRequestResponseCustomFieldCheckbox&#x60; | [optional] 
**Attachments** | Pointer to [**[]SignatureRequestResponseAttachment**](SignatureRequestResponseAttachment.md) | Signer attachments. | [optional] 
**ResponseData** | Pointer to [**[]SignatureRequestResponseDataBase**](SignatureRequestResponseDataBase.md) | An array of form field objects containing the name, value, and type of each textbox or checkmark field filled in by the signers. | [optional] 
**Signatures** | Pointer to [**[]SignatureRequestResponseSignatures**](SignatureRequestResponseSignatures.md) | An array of signature objects, 1 for each signer. | [optional] 
**BulkSendJobId** | Pointer to **string** | The id of the BulkSendJob. | [optional] 

## Methods

### NewBulkSendJobGetResponseSignatureRequests

`func NewBulkSendJobGetResponseSignatureRequests() *BulkSendJobGetResponseSignatureRequests`

NewBulkSendJobGetResponseSignatureRequests instantiates a new BulkSendJobGetResponseSignatureRequests object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkSendJobGetResponseSignatureRequestsWithDefaults

`func NewBulkSendJobGetResponseSignatureRequestsWithDefaults() *BulkSendJobGetResponseSignatureRequests`

NewBulkSendJobGetResponseSignatureRequestsWithDefaults instantiates a new BulkSendJobGetResponseSignatureRequests object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTestMode

`func (o *BulkSendJobGetResponseSignatureRequests) GetTestMode() bool`

GetTestMode returns the TestMode field if non-nil, zero value otherwise.

### GetTestModeOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetTestModeOk() (*bool, bool)`

GetTestModeOk returns a tuple with the TestMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTestMode

`func (o *BulkSendJobGetResponseSignatureRequests) SetTestMode(v bool)`

SetTestMode sets TestMode field to given value.

### HasTestMode

`func (o *BulkSendJobGetResponseSignatureRequests) HasTestMode() bool`

HasTestMode returns a boolean if a field has been set.

### SetTestModeNil

`func (o *BulkSendJobGetResponseSignatureRequests) SetTestModeNil(b bool)`

 SetTestModeNil sets the value for TestMode to be an explicit nil

### UnsetTestMode
`func (o *BulkSendJobGetResponseSignatureRequests) UnsetTestMode()`

UnsetTestMode ensures that no value is present for TestMode, not even an explicit nil
### GetSignatureRequestId

`func (o *BulkSendJobGetResponseSignatureRequests) GetSignatureRequestId() string`

GetSignatureRequestId returns the SignatureRequestId field if non-nil, zero value otherwise.

### GetSignatureRequestIdOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetSignatureRequestIdOk() (*string, bool)`

GetSignatureRequestIdOk returns a tuple with the SignatureRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignatureRequestId

`func (o *BulkSendJobGetResponseSignatureRequests) SetSignatureRequestId(v string)`

SetSignatureRequestId sets SignatureRequestId field to given value.

### HasSignatureRequestId

`func (o *BulkSendJobGetResponseSignatureRequests) HasSignatureRequestId() bool`

HasSignatureRequestId returns a boolean if a field has been set.

### GetRequesterEmailAddress

`func (o *BulkSendJobGetResponseSignatureRequests) GetRequesterEmailAddress() string`

GetRequesterEmailAddress returns the RequesterEmailAddress field if non-nil, zero value otherwise.

### GetRequesterEmailAddressOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetRequesterEmailAddressOk() (*string, bool)`

GetRequesterEmailAddressOk returns a tuple with the RequesterEmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterEmailAddress

`func (o *BulkSendJobGetResponseSignatureRequests) SetRequesterEmailAddress(v string)`

SetRequesterEmailAddress sets RequesterEmailAddress field to given value.

### HasRequesterEmailAddress

`func (o *BulkSendJobGetResponseSignatureRequests) HasRequesterEmailAddress() bool`

HasRequesterEmailAddress returns a boolean if a field has been set.

### GetTitle

`func (o *BulkSendJobGetResponseSignatureRequests) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *BulkSendJobGetResponseSignatureRequests) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *BulkSendJobGetResponseSignatureRequests) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetOriginalTitle

`func (o *BulkSendJobGetResponseSignatureRequests) GetOriginalTitle() string`

GetOriginalTitle returns the OriginalTitle field if non-nil, zero value otherwise.

### GetOriginalTitleOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetOriginalTitleOk() (*string, bool)`

GetOriginalTitleOk returns a tuple with the OriginalTitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOriginalTitle

`func (o *BulkSendJobGetResponseSignatureRequests) SetOriginalTitle(v string)`

SetOriginalTitle sets OriginalTitle field to given value.

### HasOriginalTitle

`func (o *BulkSendJobGetResponseSignatureRequests) HasOriginalTitle() bool`

HasOriginalTitle returns a boolean if a field has been set.

### GetSubject

`func (o *BulkSendJobGetResponseSignatureRequests) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *BulkSendJobGetResponseSignatureRequests) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *BulkSendJobGetResponseSignatureRequests) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### SetSubjectNil

`func (o *BulkSendJobGetResponseSignatureRequests) SetSubjectNil(b bool)`

 SetSubjectNil sets the value for Subject to be an explicit nil

### UnsetSubject
`func (o *BulkSendJobGetResponseSignatureRequests) UnsetSubject()`

UnsetSubject ensures that no value is present for Subject, not even an explicit nil
### GetMessage

`func (o *BulkSendJobGetResponseSignatureRequests) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *BulkSendJobGetResponseSignatureRequests) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *BulkSendJobGetResponseSignatureRequests) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *BulkSendJobGetResponseSignatureRequests) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *BulkSendJobGetResponseSignatureRequests) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil
### GetMetadata

`func (o *BulkSendJobGetResponseSignatureRequests) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *BulkSendJobGetResponseSignatureRequests) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *BulkSendJobGetResponseSignatureRequests) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetCreatedAt

`func (o *BulkSendJobGetResponseSignatureRequests) GetCreatedAt() int32`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetCreatedAtOk() (*int32, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *BulkSendJobGetResponseSignatureRequests) SetCreatedAt(v int32)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *BulkSendJobGetResponseSignatureRequests) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetExpiresAt

`func (o *BulkSendJobGetResponseSignatureRequests) GetExpiresAt() int32`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetExpiresAtOk() (*int32, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *BulkSendJobGetResponseSignatureRequests) SetExpiresAt(v int32)`

SetExpiresAt sets ExpiresAt field to given value.

### HasExpiresAt

`func (o *BulkSendJobGetResponseSignatureRequests) HasExpiresAt() bool`

HasExpiresAt returns a boolean if a field has been set.

### GetIsComplete

`func (o *BulkSendJobGetResponseSignatureRequests) GetIsComplete() bool`

GetIsComplete returns the IsComplete field if non-nil, zero value otherwise.

### GetIsCompleteOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetIsCompleteOk() (*bool, bool)`

GetIsCompleteOk returns a tuple with the IsComplete field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsComplete

`func (o *BulkSendJobGetResponseSignatureRequests) SetIsComplete(v bool)`

SetIsComplete sets IsComplete field to given value.

### HasIsComplete

`func (o *BulkSendJobGetResponseSignatureRequests) HasIsComplete() bool`

HasIsComplete returns a boolean if a field has been set.

### GetIsDeclined

`func (o *BulkSendJobGetResponseSignatureRequests) GetIsDeclined() bool`

GetIsDeclined returns the IsDeclined field if non-nil, zero value otherwise.

### GetIsDeclinedOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetIsDeclinedOk() (*bool, bool)`

GetIsDeclinedOk returns a tuple with the IsDeclined field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsDeclined

`func (o *BulkSendJobGetResponseSignatureRequests) SetIsDeclined(v bool)`

SetIsDeclined sets IsDeclined field to given value.

### HasIsDeclined

`func (o *BulkSendJobGetResponseSignatureRequests) HasIsDeclined() bool`

HasIsDeclined returns a boolean if a field has been set.

### GetHasError

`func (o *BulkSendJobGetResponseSignatureRequests) GetHasError() bool`

GetHasError returns the HasError field if non-nil, zero value otherwise.

### GetHasErrorOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetHasErrorOk() (*bool, bool)`

GetHasErrorOk returns a tuple with the HasError field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasError

`func (o *BulkSendJobGetResponseSignatureRequests) SetHasError(v bool)`

SetHasError sets HasError field to given value.

### HasHasError

`func (o *BulkSendJobGetResponseSignatureRequests) HasHasError() bool`

HasHasError returns a boolean if a field has been set.

### GetFilesUrl

`func (o *BulkSendJobGetResponseSignatureRequests) GetFilesUrl() string`

GetFilesUrl returns the FilesUrl field if non-nil, zero value otherwise.

### GetFilesUrlOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetFilesUrlOk() (*string, bool)`

GetFilesUrlOk returns a tuple with the FilesUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilesUrl

`func (o *BulkSendJobGetResponseSignatureRequests) SetFilesUrl(v string)`

SetFilesUrl sets FilesUrl field to given value.

### HasFilesUrl

`func (o *BulkSendJobGetResponseSignatureRequests) HasFilesUrl() bool`

HasFilesUrl returns a boolean if a field has been set.

### GetSigningUrl

`func (o *BulkSendJobGetResponseSignatureRequests) GetSigningUrl() string`

GetSigningUrl returns the SigningUrl field if non-nil, zero value otherwise.

### GetSigningUrlOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetSigningUrlOk() (*string, bool)`

GetSigningUrlOk returns a tuple with the SigningUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigningUrl

`func (o *BulkSendJobGetResponseSignatureRequests) SetSigningUrl(v string)`

SetSigningUrl sets SigningUrl field to given value.

### HasSigningUrl

`func (o *BulkSendJobGetResponseSignatureRequests) HasSigningUrl() bool`

HasSigningUrl returns a boolean if a field has been set.

### SetSigningUrlNil

`func (o *BulkSendJobGetResponseSignatureRequests) SetSigningUrlNil(b bool)`

 SetSigningUrlNil sets the value for SigningUrl to be an explicit nil

### UnsetSigningUrl
`func (o *BulkSendJobGetResponseSignatureRequests) UnsetSigningUrl()`

UnsetSigningUrl ensures that no value is present for SigningUrl, not even an explicit nil
### GetDetailsUrl

`func (o *BulkSendJobGetResponseSignatureRequests) GetDetailsUrl() string`

GetDetailsUrl returns the DetailsUrl field if non-nil, zero value otherwise.

### GetDetailsUrlOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetDetailsUrlOk() (*string, bool)`

GetDetailsUrlOk returns a tuple with the DetailsUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailsUrl

`func (o *BulkSendJobGetResponseSignatureRequests) SetDetailsUrl(v string)`

SetDetailsUrl sets DetailsUrl field to given value.

### HasDetailsUrl

`func (o *BulkSendJobGetResponseSignatureRequests) HasDetailsUrl() bool`

HasDetailsUrl returns a boolean if a field has been set.

### GetCcEmailAddresses

`func (o *BulkSendJobGetResponseSignatureRequests) GetCcEmailAddresses() []string`

GetCcEmailAddresses returns the CcEmailAddresses field if non-nil, zero value otherwise.

### GetCcEmailAddressesOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetCcEmailAddressesOk() (*[]string, bool)`

GetCcEmailAddressesOk returns a tuple with the CcEmailAddresses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcEmailAddresses

`func (o *BulkSendJobGetResponseSignatureRequests) SetCcEmailAddresses(v []string)`

SetCcEmailAddresses sets CcEmailAddresses field to given value.

### HasCcEmailAddresses

`func (o *BulkSendJobGetResponseSignatureRequests) HasCcEmailAddresses() bool`

HasCcEmailAddresses returns a boolean if a field has been set.

### GetSigningRedirectUrl

`func (o *BulkSendJobGetResponseSignatureRequests) GetSigningRedirectUrl() string`

GetSigningRedirectUrl returns the SigningRedirectUrl field if non-nil, zero value otherwise.

### GetSigningRedirectUrlOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetSigningRedirectUrlOk() (*string, bool)`

GetSigningRedirectUrlOk returns a tuple with the SigningRedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigningRedirectUrl

`func (o *BulkSendJobGetResponseSignatureRequests) SetSigningRedirectUrl(v string)`

SetSigningRedirectUrl sets SigningRedirectUrl field to given value.

### HasSigningRedirectUrl

`func (o *BulkSendJobGetResponseSignatureRequests) HasSigningRedirectUrl() bool`

HasSigningRedirectUrl returns a boolean if a field has been set.

### SetSigningRedirectUrlNil

`func (o *BulkSendJobGetResponseSignatureRequests) SetSigningRedirectUrlNil(b bool)`

 SetSigningRedirectUrlNil sets the value for SigningRedirectUrl to be an explicit nil

### UnsetSigningRedirectUrl
`func (o *BulkSendJobGetResponseSignatureRequests) UnsetSigningRedirectUrl()`

UnsetSigningRedirectUrl ensures that no value is present for SigningRedirectUrl, not even an explicit nil
### GetFinalCopyUri

`func (o *BulkSendJobGetResponseSignatureRequests) GetFinalCopyUri() string`

GetFinalCopyUri returns the FinalCopyUri field if non-nil, zero value otherwise.

### GetFinalCopyUriOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetFinalCopyUriOk() (*string, bool)`

GetFinalCopyUriOk returns a tuple with the FinalCopyUri field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFinalCopyUri

`func (o *BulkSendJobGetResponseSignatureRequests) SetFinalCopyUri(v string)`

SetFinalCopyUri sets FinalCopyUri field to given value.

### HasFinalCopyUri

`func (o *BulkSendJobGetResponseSignatureRequests) HasFinalCopyUri() bool`

HasFinalCopyUri returns a boolean if a field has been set.

### SetFinalCopyUriNil

`func (o *BulkSendJobGetResponseSignatureRequests) SetFinalCopyUriNil(b bool)`

 SetFinalCopyUriNil sets the value for FinalCopyUri to be an explicit nil

### UnsetFinalCopyUri
`func (o *BulkSendJobGetResponseSignatureRequests) UnsetFinalCopyUri()`

UnsetFinalCopyUri ensures that no value is present for FinalCopyUri, not even an explicit nil
### GetTemplateIds

`func (o *BulkSendJobGetResponseSignatureRequests) GetTemplateIds() []string`

GetTemplateIds returns the TemplateIds field if non-nil, zero value otherwise.

### GetTemplateIdsOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetTemplateIdsOk() (*[]string, bool)`

GetTemplateIdsOk returns a tuple with the TemplateIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateIds

`func (o *BulkSendJobGetResponseSignatureRequests) SetTemplateIds(v []string)`

SetTemplateIds sets TemplateIds field to given value.

### HasTemplateIds

`func (o *BulkSendJobGetResponseSignatureRequests) HasTemplateIds() bool`

HasTemplateIds returns a boolean if a field has been set.

### SetTemplateIdsNil

`func (o *BulkSendJobGetResponseSignatureRequests) SetTemplateIdsNil(b bool)`

 SetTemplateIdsNil sets the value for TemplateIds to be an explicit nil

### UnsetTemplateIds
`func (o *BulkSendJobGetResponseSignatureRequests) UnsetTemplateIds()`

UnsetTemplateIds ensures that no value is present for TemplateIds, not even an explicit nil
### GetCustomFields

`func (o *BulkSendJobGetResponseSignatureRequests) GetCustomFields() []SignatureRequestResponseCustomFieldBase`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetCustomFieldsOk() (*[]SignatureRequestResponseCustomFieldBase, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *BulkSendJobGetResponseSignatureRequests) SetCustomFields(v []SignatureRequestResponseCustomFieldBase)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *BulkSendJobGetResponseSignatureRequests) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### SetCustomFieldsNil

`func (o *BulkSendJobGetResponseSignatureRequests) SetCustomFieldsNil(b bool)`

 SetCustomFieldsNil sets the value for CustomFields to be an explicit nil

### UnsetCustomFields
`func (o *BulkSendJobGetResponseSignatureRequests) UnsetCustomFields()`

UnsetCustomFields ensures that no value is present for CustomFields, not even an explicit nil
### GetAttachments

`func (o *BulkSendJobGetResponseSignatureRequests) GetAttachments() []SignatureRequestResponseAttachment`

GetAttachments returns the Attachments field if non-nil, zero value otherwise.

### GetAttachmentsOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetAttachmentsOk() (*[]SignatureRequestResponseAttachment, bool)`

GetAttachmentsOk returns a tuple with the Attachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachments

`func (o *BulkSendJobGetResponseSignatureRequests) SetAttachments(v []SignatureRequestResponseAttachment)`

SetAttachments sets Attachments field to given value.

### HasAttachments

`func (o *BulkSendJobGetResponseSignatureRequests) HasAttachments() bool`

HasAttachments returns a boolean if a field has been set.

### SetAttachmentsNil

`func (o *BulkSendJobGetResponseSignatureRequests) SetAttachmentsNil(b bool)`

 SetAttachmentsNil sets the value for Attachments to be an explicit nil

### UnsetAttachments
`func (o *BulkSendJobGetResponseSignatureRequests) UnsetAttachments()`

UnsetAttachments ensures that no value is present for Attachments, not even an explicit nil
### GetResponseData

`func (o *BulkSendJobGetResponseSignatureRequests) GetResponseData() []SignatureRequestResponseDataBase`

GetResponseData returns the ResponseData field if non-nil, zero value otherwise.

### GetResponseDataOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetResponseDataOk() (*[]SignatureRequestResponseDataBase, bool)`

GetResponseDataOk returns a tuple with the ResponseData field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseData

`func (o *BulkSendJobGetResponseSignatureRequests) SetResponseData(v []SignatureRequestResponseDataBase)`

SetResponseData sets ResponseData field to given value.

### HasResponseData

`func (o *BulkSendJobGetResponseSignatureRequests) HasResponseData() bool`

HasResponseData returns a boolean if a field has been set.

### SetResponseDataNil

`func (o *BulkSendJobGetResponseSignatureRequests) SetResponseDataNil(b bool)`

 SetResponseDataNil sets the value for ResponseData to be an explicit nil

### UnsetResponseData
`func (o *BulkSendJobGetResponseSignatureRequests) UnsetResponseData()`

UnsetResponseData ensures that no value is present for ResponseData, not even an explicit nil
### GetSignatures

`func (o *BulkSendJobGetResponseSignatureRequests) GetSignatures() []SignatureRequestResponseSignatures`

GetSignatures returns the Signatures field if non-nil, zero value otherwise.

### GetSignaturesOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetSignaturesOk() (*[]SignatureRequestResponseSignatures, bool)`

GetSignaturesOk returns a tuple with the Signatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignatures

`func (o *BulkSendJobGetResponseSignatureRequests) SetSignatures(v []SignatureRequestResponseSignatures)`

SetSignatures sets Signatures field to given value.

### HasSignatures

`func (o *BulkSendJobGetResponseSignatureRequests) HasSignatures() bool`

HasSignatures returns a boolean if a field has been set.

### GetBulkSendJobId

`func (o *BulkSendJobGetResponseSignatureRequests) GetBulkSendJobId() string`

GetBulkSendJobId returns the BulkSendJobId field if non-nil, zero value otherwise.

### GetBulkSendJobIdOk

`func (o *BulkSendJobGetResponseSignatureRequests) GetBulkSendJobIdOk() (*string, bool)`

GetBulkSendJobIdOk returns a tuple with the BulkSendJobId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBulkSendJobId

`func (o *BulkSendJobGetResponseSignatureRequests) SetBulkSendJobId(v string)`

SetBulkSendJobId sets BulkSendJobId field to given value.

### HasBulkSendJobId

`func (o *BulkSendJobGetResponseSignatureRequests) HasBulkSendJobId() bool`

HasBulkSendJobId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


