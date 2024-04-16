# SignatureRequestSendWithTemplateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateIds** | **[]string** | Use &#x60;template_ids&#x60; to create a SignatureRequest from one or more templates, in the order in which the template will be used. | 
**AllowDecline** | Pointer to **bool** | Allows signers to decline to sign a document if &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**Ccs** | Pointer to [**[]SubCC**](SubCC.md) | Add CC email recipients. Required when a CC role exists for the Template. | [optional] 
**ClientId** | Pointer to **string** | Client id of the app to associate with the signature request. Used to apply the branding and callback url defined for the app. | [optional] 
**CustomFields** | Pointer to [**[]SubCustomField**](SubCustomField.md) | An array defining values and options for custom fields. Required when a custom field exists in the Template. | [optional] 
**Files** | Pointer to **[]*os.File** | Use &#x60;files[]&#x60; to indicate the uploaded file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both. | [optional] 
**FileUrls** | Pointer to **[]string** | Use &#x60;file_urls[]&#x60; to have Dropbox Sign download the file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both. | [optional] 
**IsQualifiedSignature** | Pointer to **bool** | Send with a value of &#x60;true&#x60; if you wish to enable [Qualified Electronic Signatures](https://www.hellosign.com/features/qualified-electronic-signatures) (QES), which requires a face-to-face call to verify the signer&#39;s identity.&lt;br&gt; **Note**: QES is only available on the Premium API plan as an add-on purchase. Cannot be used in &#x60;test_mode&#x60;. Only works on requests with one signer. | [optional] [default to false]
**IsEid** | Pointer to **bool** | Send with a value of &#x60;true&#x60; if you wish to enable [electronic identification (eID)](https://www.hellosign.com/features/electronic-id), which requires the signer to verify their identity with an eID provider to sign a document.&lt;br&gt; **Note**: eID is only available on the Premium API plan. Cannot be used in &#x60;test_mode&#x60;. Only works on requests with one signer. | [optional] [default to false]
**Message** | Pointer to **string** | The custom message in the email that will be sent to the signers. | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer&#39;s order number for look up when receiving events for the signature request.  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. | [optional] 
**Signers** | [**[]SubSignatureRequestTemplateSigner**](SubSignatureRequestTemplateSigner.md) | Add Signers to your Templated-based Signature Request. | 
**SigningOptions** | Pointer to [**SubSigningOptions**](SubSigningOptions.md) |  | [optional] 
**SigningRedirectUrl** | Pointer to **string** | The URL you want signers redirected to after they successfully sign. | [optional] 
**Subject** | Pointer to **string** | The subject in the email that will be sent to the signers. | [optional] 
**TestMode** | Pointer to **bool** | Whether this is a test, the signature request will not be legally binding if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**Title** | Pointer to **string** | The title you want to assign to the SignatureRequest. | [optional] 

## Methods

### NewSignatureRequestSendWithTemplateRequest

`func NewSignatureRequestSendWithTemplateRequest(templateIds []string, signers []SubSignatureRequestTemplateSigner, ) *SignatureRequestSendWithTemplateRequest`

NewSignatureRequestSendWithTemplateRequest instantiates a new SignatureRequestSendWithTemplateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSignatureRequestSendWithTemplateRequestWithDefaults

`func NewSignatureRequestSendWithTemplateRequestWithDefaults() *SignatureRequestSendWithTemplateRequest`

NewSignatureRequestSendWithTemplateRequestWithDefaults instantiates a new SignatureRequestSendWithTemplateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateIds

`func (o *SignatureRequestSendWithTemplateRequest) GetTemplateIds() []string`

GetTemplateIds returns the TemplateIds field if non-nil, zero value otherwise.

### GetTemplateIdsOk

`func (o *SignatureRequestSendWithTemplateRequest) GetTemplateIdsOk() (*[]string, bool)`

GetTemplateIdsOk returns a tuple with the TemplateIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateIds

`func (o *SignatureRequestSendWithTemplateRequest) SetTemplateIds(v []string)`

SetTemplateIds sets TemplateIds field to given value.


### GetAllowDecline

`func (o *SignatureRequestSendWithTemplateRequest) GetAllowDecline() bool`

GetAllowDecline returns the AllowDecline field if non-nil, zero value otherwise.

### GetAllowDeclineOk

`func (o *SignatureRequestSendWithTemplateRequest) GetAllowDeclineOk() (*bool, bool)`

GetAllowDeclineOk returns a tuple with the AllowDecline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowDecline

`func (o *SignatureRequestSendWithTemplateRequest) SetAllowDecline(v bool)`

SetAllowDecline sets AllowDecline field to given value.

### HasAllowDecline

`func (o *SignatureRequestSendWithTemplateRequest) HasAllowDecline() bool`

HasAllowDecline returns a boolean if a field has been set.

### GetCcs

`func (o *SignatureRequestSendWithTemplateRequest) GetCcs() []SubCC`

GetCcs returns the Ccs field if non-nil, zero value otherwise.

### GetCcsOk

`func (o *SignatureRequestSendWithTemplateRequest) GetCcsOk() (*[]SubCC, bool)`

GetCcsOk returns a tuple with the Ccs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcs

`func (o *SignatureRequestSendWithTemplateRequest) SetCcs(v []SubCC)`

SetCcs sets Ccs field to given value.

### HasCcs

`func (o *SignatureRequestSendWithTemplateRequest) HasCcs() bool`

HasCcs returns a boolean if a field has been set.

### GetClientId

`func (o *SignatureRequestSendWithTemplateRequest) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *SignatureRequestSendWithTemplateRequest) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *SignatureRequestSendWithTemplateRequest) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *SignatureRequestSendWithTemplateRequest) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetCustomFields

`func (o *SignatureRequestSendWithTemplateRequest) GetCustomFields() []SubCustomField`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *SignatureRequestSendWithTemplateRequest) GetCustomFieldsOk() (*[]SubCustomField, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *SignatureRequestSendWithTemplateRequest) SetCustomFields(v []SubCustomField)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *SignatureRequestSendWithTemplateRequest) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### GetFiles

`func (o *SignatureRequestSendWithTemplateRequest) GetFiles() []*os.File`

GetFiles returns the Files field if non-nil, zero value otherwise.

### GetFilesOk

`func (o *SignatureRequestSendWithTemplateRequest) GetFilesOk() (*[]*os.File, bool)`

GetFilesOk returns a tuple with the Files field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiles

`func (o *SignatureRequestSendWithTemplateRequest) SetFiles(v []*os.File)`

SetFiles sets Files field to given value.

### HasFiles

`func (o *SignatureRequestSendWithTemplateRequest) HasFiles() bool`

HasFiles returns a boolean if a field has been set.

### GetFileUrls

`func (o *SignatureRequestSendWithTemplateRequest) GetFileUrls() []string`

GetFileUrls returns the FileUrls field if non-nil, zero value otherwise.

### GetFileUrlsOk

`func (o *SignatureRequestSendWithTemplateRequest) GetFileUrlsOk() (*[]string, bool)`

GetFileUrlsOk returns a tuple with the FileUrls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileUrls

`func (o *SignatureRequestSendWithTemplateRequest) SetFileUrls(v []string)`

SetFileUrls sets FileUrls field to given value.

### HasFileUrls

`func (o *SignatureRequestSendWithTemplateRequest) HasFileUrls() bool`

HasFileUrls returns a boolean if a field has been set.

### GetIsQualifiedSignature

`func (o *SignatureRequestSendWithTemplateRequest) GetIsQualifiedSignature() bool`

GetIsQualifiedSignature returns the IsQualifiedSignature field if non-nil, zero value otherwise.

### GetIsQualifiedSignatureOk

`func (o *SignatureRequestSendWithTemplateRequest) GetIsQualifiedSignatureOk() (*bool, bool)`

GetIsQualifiedSignatureOk returns a tuple with the IsQualifiedSignature field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsQualifiedSignature

`func (o *SignatureRequestSendWithTemplateRequest) SetIsQualifiedSignature(v bool)`

SetIsQualifiedSignature sets IsQualifiedSignature field to given value.

### HasIsQualifiedSignature

`func (o *SignatureRequestSendWithTemplateRequest) HasIsQualifiedSignature() bool`

HasIsQualifiedSignature returns a boolean if a field has been set.

### GetIsEid

`func (o *SignatureRequestSendWithTemplateRequest) GetIsEid() bool`

GetIsEid returns the IsEid field if non-nil, zero value otherwise.

### GetIsEidOk

`func (o *SignatureRequestSendWithTemplateRequest) GetIsEidOk() (*bool, bool)`

GetIsEidOk returns a tuple with the IsEid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsEid

`func (o *SignatureRequestSendWithTemplateRequest) SetIsEid(v bool)`

SetIsEid sets IsEid field to given value.

### HasIsEid

`func (o *SignatureRequestSendWithTemplateRequest) HasIsEid() bool`

HasIsEid returns a boolean if a field has been set.

### GetMessage

`func (o *SignatureRequestSendWithTemplateRequest) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SignatureRequestSendWithTemplateRequest) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SignatureRequestSendWithTemplateRequest) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *SignatureRequestSendWithTemplateRequest) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetMetadata

`func (o *SignatureRequestSendWithTemplateRequest) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *SignatureRequestSendWithTemplateRequest) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *SignatureRequestSendWithTemplateRequest) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *SignatureRequestSendWithTemplateRequest) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetSigners

`func (o *SignatureRequestSendWithTemplateRequest) GetSigners() []SubSignatureRequestTemplateSigner`

GetSigners returns the Signers field if non-nil, zero value otherwise.

### GetSignersOk

`func (o *SignatureRequestSendWithTemplateRequest) GetSignersOk() (*[]SubSignatureRequestTemplateSigner, bool)`

GetSignersOk returns a tuple with the Signers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigners

`func (o *SignatureRequestSendWithTemplateRequest) SetSigners(v []SubSignatureRequestTemplateSigner)`

SetSigners sets Signers field to given value.


### GetSigningOptions

`func (o *SignatureRequestSendWithTemplateRequest) GetSigningOptions() SubSigningOptions`

GetSigningOptions returns the SigningOptions field if non-nil, zero value otherwise.

### GetSigningOptionsOk

`func (o *SignatureRequestSendWithTemplateRequest) GetSigningOptionsOk() (*SubSigningOptions, bool)`

GetSigningOptionsOk returns a tuple with the SigningOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigningOptions

`func (o *SignatureRequestSendWithTemplateRequest) SetSigningOptions(v SubSigningOptions)`

SetSigningOptions sets SigningOptions field to given value.

### HasSigningOptions

`func (o *SignatureRequestSendWithTemplateRequest) HasSigningOptions() bool`

HasSigningOptions returns a boolean if a field has been set.

### GetSigningRedirectUrl

`func (o *SignatureRequestSendWithTemplateRequest) GetSigningRedirectUrl() string`

GetSigningRedirectUrl returns the SigningRedirectUrl field if non-nil, zero value otherwise.

### GetSigningRedirectUrlOk

`func (o *SignatureRequestSendWithTemplateRequest) GetSigningRedirectUrlOk() (*string, bool)`

GetSigningRedirectUrlOk returns a tuple with the SigningRedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigningRedirectUrl

`func (o *SignatureRequestSendWithTemplateRequest) SetSigningRedirectUrl(v string)`

SetSigningRedirectUrl sets SigningRedirectUrl field to given value.

### HasSigningRedirectUrl

`func (o *SignatureRequestSendWithTemplateRequest) HasSigningRedirectUrl() bool`

HasSigningRedirectUrl returns a boolean if a field has been set.

### GetSubject

`func (o *SignatureRequestSendWithTemplateRequest) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *SignatureRequestSendWithTemplateRequest) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *SignatureRequestSendWithTemplateRequest) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *SignatureRequestSendWithTemplateRequest) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### GetTestMode

`func (o *SignatureRequestSendWithTemplateRequest) GetTestMode() bool`

GetTestMode returns the TestMode field if non-nil, zero value otherwise.

### GetTestModeOk

`func (o *SignatureRequestSendWithTemplateRequest) GetTestModeOk() (*bool, bool)`

GetTestModeOk returns a tuple with the TestMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTestMode

`func (o *SignatureRequestSendWithTemplateRequest) SetTestMode(v bool)`

SetTestMode sets TestMode field to given value.

### HasTestMode

`func (o *SignatureRequestSendWithTemplateRequest) HasTestMode() bool`

HasTestMode returns a boolean if a field has been set.

### GetTitle

`func (o *SignatureRequestSendWithTemplateRequest) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *SignatureRequestSendWithTemplateRequest) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *SignatureRequestSendWithTemplateRequest) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *SignatureRequestSendWithTemplateRequest) HasTitle() bool`

HasTitle returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


