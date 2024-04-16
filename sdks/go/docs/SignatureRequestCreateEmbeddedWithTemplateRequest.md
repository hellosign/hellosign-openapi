# SignatureRequestCreateEmbeddedWithTemplateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateIds** | **[]string** | Use &#x60;template_ids&#x60; to create a SignatureRequest from one or more templates, in the order in which the template will be used. | 
**AllowDecline** | Pointer to **bool** | Allows signers to decline to sign a document if &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**Ccs** | Pointer to [**[]SubCC**](SubCC.md) | Add CC email recipients. Required when a CC role exists for the Template. | [optional] 
**ClientId** | **string** | Client id of the app you&#39;re using to create this embedded signature request. Used for security purposes. | 
**CustomFields** | Pointer to [**[]SubCustomField**](SubCustomField.md) | An array defining values and options for custom fields. Required when a custom field exists in the Template. | [optional] 
**Files** | Pointer to **[]*os.File** | Use &#x60;files[]&#x60; to indicate the uploaded file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both. | [optional] 
**FileUrls** | Pointer to **[]string** | Use &#x60;file_urls[]&#x60; to have Dropbox Sign download the file(s) to send for signature.  This endpoint requires either **files** or **file_urls[]**, but not both. | [optional] 
**Message** | Pointer to **string** | The custom message in the email that will be sent to the signers. | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer&#39;s order number for look up when receiving events for the signature request.  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. | [optional] 
**Signers** | [**[]SubSignatureRequestTemplateSigner**](SubSignatureRequestTemplateSigner.md) | Add Signers to your Templated-based Signature Request. | 
**SigningOptions** | Pointer to [**SubSigningOptions**](SubSigningOptions.md) |  | [optional] 
**Subject** | Pointer to **string** | The subject in the email that will be sent to the signers. | [optional] 
**TestMode** | Pointer to **bool** | Whether this is a test, the signature request will not be legally binding if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**Title** | Pointer to **string** | The title you want to assign to the SignatureRequest. | [optional] 
**PopulateAutoFillFields** | Pointer to **bool** | Controls whether [auto fill fields](https://faq.hellosign.com/hc/en-us/articles/360051467511-Auto-Fill-Fields) can automatically populate a signer&#39;s information during signing.  ⚠️ **Note** ⚠️: Keep your signer&#39;s information safe by ensuring that the _signer on your signature request is the intended party_ before using this feature. | [optional] [default to false]

## Methods

### NewSignatureRequestCreateEmbeddedWithTemplateRequest

`func NewSignatureRequestCreateEmbeddedWithTemplateRequest(templateIds []string, clientId string, signers []SubSignatureRequestTemplateSigner, ) *SignatureRequestCreateEmbeddedWithTemplateRequest`

NewSignatureRequestCreateEmbeddedWithTemplateRequest instantiates a new SignatureRequestCreateEmbeddedWithTemplateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSignatureRequestCreateEmbeddedWithTemplateRequestWithDefaults

`func NewSignatureRequestCreateEmbeddedWithTemplateRequestWithDefaults() *SignatureRequestCreateEmbeddedWithTemplateRequest`

NewSignatureRequestCreateEmbeddedWithTemplateRequestWithDefaults instantiates a new SignatureRequestCreateEmbeddedWithTemplateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateIds

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetTemplateIds() []string`

GetTemplateIds returns the TemplateIds field if non-nil, zero value otherwise.

### GetTemplateIdsOk

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetTemplateIdsOk() (*[]string, bool)`

GetTemplateIdsOk returns a tuple with the TemplateIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateIds

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) SetTemplateIds(v []string)`

SetTemplateIds sets TemplateIds field to given value.


### GetAllowDecline

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetAllowDecline() bool`

GetAllowDecline returns the AllowDecline field if non-nil, zero value otherwise.

### GetAllowDeclineOk

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetAllowDeclineOk() (*bool, bool)`

GetAllowDeclineOk returns a tuple with the AllowDecline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowDecline

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) SetAllowDecline(v bool)`

SetAllowDecline sets AllowDecline field to given value.

### HasAllowDecline

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) HasAllowDecline() bool`

HasAllowDecline returns a boolean if a field has been set.

### GetCcs

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetCcs() []SubCC`

GetCcs returns the Ccs field if non-nil, zero value otherwise.

### GetCcsOk

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetCcsOk() (*[]SubCC, bool)`

GetCcsOk returns a tuple with the Ccs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcs

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) SetCcs(v []SubCC)`

SetCcs sets Ccs field to given value.

### HasCcs

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) HasCcs() bool`

HasCcs returns a boolean if a field has been set.

### GetClientId

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) SetClientId(v string)`

SetClientId sets ClientId field to given value.


### GetCustomFields

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetCustomFields() []SubCustomField`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetCustomFieldsOk() (*[]SubCustomField, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) SetCustomFields(v []SubCustomField)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### GetFiles

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetFiles() []*os.File`

GetFiles returns the Files field if non-nil, zero value otherwise.

### GetFilesOk

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetFilesOk() (*[]*os.File, bool)`

GetFilesOk returns a tuple with the Files field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiles

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) SetFiles(v []*os.File)`

SetFiles sets Files field to given value.

### HasFiles

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) HasFiles() bool`

HasFiles returns a boolean if a field has been set.

### GetFileUrls

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetFileUrls() []string`

GetFileUrls returns the FileUrls field if non-nil, zero value otherwise.

### GetFileUrlsOk

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetFileUrlsOk() (*[]string, bool)`

GetFileUrlsOk returns a tuple with the FileUrls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileUrls

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) SetFileUrls(v []string)`

SetFileUrls sets FileUrls field to given value.

### HasFileUrls

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) HasFileUrls() bool`

HasFileUrls returns a boolean if a field has been set.

### GetMessage

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetMetadata

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetSigners

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetSigners() []SubSignatureRequestTemplateSigner`

GetSigners returns the Signers field if non-nil, zero value otherwise.

### GetSignersOk

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetSignersOk() (*[]SubSignatureRequestTemplateSigner, bool)`

GetSignersOk returns a tuple with the Signers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigners

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) SetSigners(v []SubSignatureRequestTemplateSigner)`

SetSigners sets Signers field to given value.


### GetSigningOptions

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetSigningOptions() SubSigningOptions`

GetSigningOptions returns the SigningOptions field if non-nil, zero value otherwise.

### GetSigningOptionsOk

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetSigningOptionsOk() (*SubSigningOptions, bool)`

GetSigningOptionsOk returns a tuple with the SigningOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigningOptions

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) SetSigningOptions(v SubSigningOptions)`

SetSigningOptions sets SigningOptions field to given value.

### HasSigningOptions

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) HasSigningOptions() bool`

HasSigningOptions returns a boolean if a field has been set.

### GetSubject

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### GetTestMode

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetTestMode() bool`

GetTestMode returns the TestMode field if non-nil, zero value otherwise.

### GetTestModeOk

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetTestModeOk() (*bool, bool)`

GetTestModeOk returns a tuple with the TestMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTestMode

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) SetTestMode(v bool)`

SetTestMode sets TestMode field to given value.

### HasTestMode

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) HasTestMode() bool`

HasTestMode returns a boolean if a field has been set.

### GetTitle

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetPopulateAutoFillFields

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetPopulateAutoFillFields() bool`

GetPopulateAutoFillFields returns the PopulateAutoFillFields field if non-nil, zero value otherwise.

### GetPopulateAutoFillFieldsOk

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) GetPopulateAutoFillFieldsOk() (*bool, bool)`

GetPopulateAutoFillFieldsOk returns a tuple with the PopulateAutoFillFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPopulateAutoFillFields

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) SetPopulateAutoFillFields(v bool)`

SetPopulateAutoFillFields sets PopulateAutoFillFields field to given value.

### HasPopulateAutoFillFields

`func (o *SignatureRequestCreateEmbeddedWithTemplateRequest) HasPopulateAutoFillFields() bool`

HasPopulateAutoFillFields returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


