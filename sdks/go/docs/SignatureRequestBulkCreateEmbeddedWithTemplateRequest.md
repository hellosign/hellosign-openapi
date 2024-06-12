# SignatureRequestBulkCreateEmbeddedWithTemplateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateIds** | **[]string** | Use &#x60;template_ids&#x60; to create a SignatureRequest from one or more templates, in the order in which the template will be used. | 
**SignerFile** | Pointer to ***os.File** | &#x60;signer_file&#x60; is a CSV file defining values and options for signer fields. Required unless a &#x60;signer_list&#x60; is used, you may not use both. The CSV can have the following columns:  - &#x60;name&#x60;: the name of the signer filling the role of RoleName - &#x60;email_address&#x60;: email address of the signer filling the role of RoleName - &#x60;pin&#x60;: the 4- to 12-character access code that will secure this signer&#39;s signature page (optional) - &#x60;sms_phone_number&#x60;: An E.164 formatted phone number that will receive a code via SMS to access this signer&#39;s signature page. (optional)      By using the feature, you agree you are responsible for obtaining a signer&#39;s consent to receive text messages from Dropbox Sign related to this signature request and confirm you have obtained such consent from all signers prior to enabling SMS delivery for this signature request. [Learn more](https://faq.hellosign.com/hc/en-us/articles/15815316468877-Dropbox-Sign-SMS-tools-add-on).      **Note**: Not available in test mode and requires a Standard plan or higher. - &#x60;*_field&#x60;: any column with a _field\&quot; suffix will be treated as a custom field (optional)      You may only specify field values here, any other options should be set in the custom_fields request parameter.  Example CSV:  &#x60;&#x60;&#x60; name, email_address, pin, company_field George, george@example.com, d79a3td, ABC Corp Mary, mary@example.com, gd9as5b, 123 LLC &#x60;&#x60;&#x60; | [optional] 
**SignerList** | Pointer to [**[]SubBulkSignerList**](SubBulkSignerList.md) | &#x60;signer_list&#x60; is an array defining values and options for signer fields. Required unless a &#x60;signer_file&#x60; is used, you may not use both. | [optional] 
**AllowDecline** | Pointer to **bool** | Allows signers to decline to sign a document if &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**Ccs** | Pointer to [**[]SubCC**](SubCC.md) | Add CC email recipients. Required when a CC role exists for the Template. | [optional] 
**ClientId** | **string** | Client id of the app you&#39;re using to create this embedded signature request. Used for security purposes. | 
**CustomFields** | Pointer to [**[]SubCustomField**](SubCustomField.md) | When used together with merge fields, &#x60;custom_fields&#x60; allows users to add pre-filled data to their signature requests.  Pre-filled data can be used with \&quot;send-once\&quot; signature requests by adding merge fields with &#x60;form_fields_per_document&#x60; or [Text Tags](https://app.hellosign.com/api/textTagsWalkthrough#TextTagIntro) while passing values back with &#x60;custom_fields&#x60; together in one API call.  For using pre-filled on repeatable signature requests, merge fields are added to templates in the Dropbox Sign UI or by calling [/template/create_embedded_draft](/api/reference/operation/templateCreateEmbeddedDraft) and then passing &#x60;custom_fields&#x60; on subsequent signature requests referencing that template. | [optional] 
**Message** | Pointer to **string** | The custom message in the email that will be sent to the signers. | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer&#39;s order number for look up when receiving events for the signature request.  Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. | [optional] 
**SigningRedirectUrl** | Pointer to **string** | The URL you want signers redirected to after they successfully sign. | [optional] 
**Subject** | Pointer to **string** | The subject in the email that will be sent to the signers. | [optional] 
**TestMode** | Pointer to **bool** | Whether this is a test, the signature request will not be legally binding if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]
**Title** | Pointer to **string** | The title you want to assign to the SignatureRequest. | [optional] 

## Methods

### NewSignatureRequestBulkCreateEmbeddedWithTemplateRequest

`func NewSignatureRequestBulkCreateEmbeddedWithTemplateRequest(templateIds []string, clientId string, ) *SignatureRequestBulkCreateEmbeddedWithTemplateRequest`

NewSignatureRequestBulkCreateEmbeddedWithTemplateRequest instantiates a new SignatureRequestBulkCreateEmbeddedWithTemplateRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSignatureRequestBulkCreateEmbeddedWithTemplateRequestWithDefaults

`func NewSignatureRequestBulkCreateEmbeddedWithTemplateRequestWithDefaults() *SignatureRequestBulkCreateEmbeddedWithTemplateRequest`

NewSignatureRequestBulkCreateEmbeddedWithTemplateRequestWithDefaults instantiates a new SignatureRequestBulkCreateEmbeddedWithTemplateRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateIds

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetTemplateIds() []string`

GetTemplateIds returns the TemplateIds field if non-nil, zero value otherwise.

### GetTemplateIdsOk

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetTemplateIdsOk() (*[]string, bool)`

GetTemplateIdsOk returns a tuple with the TemplateIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateIds

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) SetTemplateIds(v []string)`

SetTemplateIds sets TemplateIds field to given value.


### GetSignerFile

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetSignerFile() *os.File`

GetSignerFile returns the SignerFile field if non-nil, zero value otherwise.

### GetSignerFileOk

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetSignerFileOk() (**os.File, bool)`

GetSignerFileOk returns a tuple with the SignerFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignerFile

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) SetSignerFile(v *os.File)`

SetSignerFile sets SignerFile field to given value.

### HasSignerFile

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) HasSignerFile() bool`

HasSignerFile returns a boolean if a field has been set.

### GetSignerList

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetSignerList() []SubBulkSignerList`

GetSignerList returns the SignerList field if non-nil, zero value otherwise.

### GetSignerListOk

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetSignerListOk() (*[]SubBulkSignerList, bool)`

GetSignerListOk returns a tuple with the SignerList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSignerList

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) SetSignerList(v []SubBulkSignerList)`

SetSignerList sets SignerList field to given value.

### HasSignerList

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) HasSignerList() bool`

HasSignerList returns a boolean if a field has been set.

### GetAllowDecline

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetAllowDecline() bool`

GetAllowDecline returns the AllowDecline field if non-nil, zero value otherwise.

### GetAllowDeclineOk

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetAllowDeclineOk() (*bool, bool)`

GetAllowDeclineOk returns a tuple with the AllowDecline field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowDecline

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) SetAllowDecline(v bool)`

SetAllowDecline sets AllowDecline field to given value.

### HasAllowDecline

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) HasAllowDecline() bool`

HasAllowDecline returns a boolean if a field has been set.

### GetCcs

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetCcs() []SubCC`

GetCcs returns the Ccs field if non-nil, zero value otherwise.

### GetCcsOk

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetCcsOk() (*[]SubCC, bool)`

GetCcsOk returns a tuple with the Ccs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCcs

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) SetCcs(v []SubCC)`

SetCcs sets Ccs field to given value.

### HasCcs

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) HasCcs() bool`

HasCcs returns a boolean if a field has been set.

### GetClientId

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) SetClientId(v string)`

SetClientId sets ClientId field to given value.


### GetCustomFields

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetCustomFields() []SubCustomField`

GetCustomFields returns the CustomFields field if non-nil, zero value otherwise.

### GetCustomFieldsOk

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetCustomFieldsOk() (*[]SubCustomField, bool)`

GetCustomFieldsOk returns a tuple with the CustomFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomFields

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) SetCustomFields(v []SubCustomField)`

SetCustomFields sets CustomFields field to given value.

### HasCustomFields

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) HasCustomFields() bool`

HasCustomFields returns a boolean if a field has been set.

### GetMessage

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetMetadata

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetSigningRedirectUrl

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetSigningRedirectUrl() string`

GetSigningRedirectUrl returns the SigningRedirectUrl field if non-nil, zero value otherwise.

### GetSigningRedirectUrlOk

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetSigningRedirectUrlOk() (*string, bool)`

GetSigningRedirectUrlOk returns a tuple with the SigningRedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigningRedirectUrl

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) SetSigningRedirectUrl(v string)`

SetSigningRedirectUrl sets SigningRedirectUrl field to given value.

### HasSigningRedirectUrl

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) HasSigningRedirectUrl() bool`

HasSigningRedirectUrl returns a boolean if a field has been set.

### GetSubject

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### GetTestMode

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetTestMode() bool`

GetTestMode returns the TestMode field if non-nil, zero value otherwise.

### GetTestModeOk

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetTestModeOk() (*bool, bool)`

GetTestModeOk returns a tuple with the TestMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTestMode

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) SetTestMode(v bool)`

SetTestMode sets TestMode field to given value.

### HasTestMode

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) HasTestMode() bool`

HasTestMode returns a boolean if a field has been set.

### GetTitle

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *SignatureRequestBulkCreateEmbeddedWithTemplateRequest) HasTitle() bool`

HasTitle returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


