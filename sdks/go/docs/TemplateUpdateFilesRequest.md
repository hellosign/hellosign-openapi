# TemplateUpdateFilesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | Pointer to **string** | Client id of the app you&#39;re using to update this template. | [optional] 
**Files** | Pointer to **[]*os.File** | Use &#x60;files[]&#x60; to indicate the uploaded file(s) to use for the template.  This endpoint requires either **files** or **file_urls[]**, but not both. | [optional] 
**FileUrls** | Pointer to **[]string** | Use &#x60;file_urls[]&#x60; to have Dropbox Sign download the file(s) to use for the template.  This endpoint requires either **files** or **file_urls[]**, but not both. | [optional] 
**Message** | Pointer to **string** | The new default template email message. | [optional] 
**Subject** | Pointer to **string** | The new default template email subject. | [optional] 
**TestMode** | Pointer to **bool** | Whether this is a test, the signature request created from this draft will not be legally binding if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]

## Methods

### NewTemplateUpdateFilesRequest

`func NewTemplateUpdateFilesRequest() *TemplateUpdateFilesRequest`

NewTemplateUpdateFilesRequest instantiates a new TemplateUpdateFilesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateUpdateFilesRequestWithDefaults

`func NewTemplateUpdateFilesRequestWithDefaults() *TemplateUpdateFilesRequest`

NewTemplateUpdateFilesRequestWithDefaults instantiates a new TemplateUpdateFilesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClientId

`func (o *TemplateUpdateFilesRequest) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *TemplateUpdateFilesRequest) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *TemplateUpdateFilesRequest) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *TemplateUpdateFilesRequest) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetFiles

`func (o *TemplateUpdateFilesRequest) GetFiles() []*os.File`

GetFiles returns the Files field if non-nil, zero value otherwise.

### GetFilesOk

`func (o *TemplateUpdateFilesRequest) GetFilesOk() (*[]*os.File, bool)`

GetFilesOk returns a tuple with the Files field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiles

`func (o *TemplateUpdateFilesRequest) SetFiles(v []*os.File)`

SetFiles sets Files field to given value.

### HasFiles

`func (o *TemplateUpdateFilesRequest) HasFiles() bool`

HasFiles returns a boolean if a field has been set.

### GetFileUrls

`func (o *TemplateUpdateFilesRequest) GetFileUrls() []string`

GetFileUrls returns the FileUrls field if non-nil, zero value otherwise.

### GetFileUrlsOk

`func (o *TemplateUpdateFilesRequest) GetFileUrlsOk() (*[]string, bool)`

GetFileUrlsOk returns a tuple with the FileUrls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileUrls

`func (o *TemplateUpdateFilesRequest) SetFileUrls(v []string)`

SetFileUrls sets FileUrls field to given value.

### HasFileUrls

`func (o *TemplateUpdateFilesRequest) HasFileUrls() bool`

HasFileUrls returns a boolean if a field has been set.

### GetMessage

`func (o *TemplateUpdateFilesRequest) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *TemplateUpdateFilesRequest) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *TemplateUpdateFilesRequest) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *TemplateUpdateFilesRequest) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetSubject

`func (o *TemplateUpdateFilesRequest) GetSubject() string`

GetSubject returns the Subject field if non-nil, zero value otherwise.

### GetSubjectOk

`func (o *TemplateUpdateFilesRequest) GetSubjectOk() (*string, bool)`

GetSubjectOk returns a tuple with the Subject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubject

`func (o *TemplateUpdateFilesRequest) SetSubject(v string)`

SetSubject sets Subject field to given value.

### HasSubject

`func (o *TemplateUpdateFilesRequest) HasSubject() bool`

HasSubject returns a boolean if a field has been set.

### GetTestMode

`func (o *TemplateUpdateFilesRequest) GetTestMode() bool`

GetTestMode returns the TestMode field if non-nil, zero value otherwise.

### GetTestModeOk

`func (o *TemplateUpdateFilesRequest) GetTestModeOk() (*bool, bool)`

GetTestModeOk returns a tuple with the TestMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTestMode

`func (o *TemplateUpdateFilesRequest) SetTestMode(v bool)`

SetTestMode sets TestMode field to given value.

### HasTestMode

`func (o *TemplateUpdateFilesRequest) HasTestMode() bool`

HasTestMode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


