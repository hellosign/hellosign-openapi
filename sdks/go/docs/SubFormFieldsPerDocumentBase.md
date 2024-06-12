# SubFormFieldsPerDocumentBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DocumentIndex** | **int32** | Represents the integer index of the &#x60;file&#x60; or &#x60;file_url&#x60; document the field should be attached to. | 
**ApiId** | **string** | An identifier for the field that is unique across all documents in the request. | 
**Height** | **int32** | Size of the field in pixels. | 
**Name** | Pointer to **string** | Display name for the field. | [optional] 
**Page** | Pointer to **NullableInt32** | Page in the document where the field should be placed (requires documents be PDF files).  - When the page number parameter is supplied, the API will use the new coordinate system. - Check out the differences between both [coordinate systems](https://faq.hellosign.com/hc/en-us/articles/217115577) and how to use them. | [optional] 
**Required** | **bool** | Whether this field is required. | 
**Signer** | **string** | Signer index identified by the offset in the signers parameter (0-based indexing), indicating which signer should fill out the field.  **NOTE**: To set the value of the field as the preparer you must set this to &#x60;me_now&#x60;  **NOTE**: If type is &#x60;text-merge&#x60; or &#x60;checkbox-merge&#x60;, you must set this to sender in order to use pre-filled data. | 
**Type** | **string** |  | 
**Width** | **int32** | Size of the field in pixels. | 
**X** | **int32** | Location coordinates of the field in pixels. | 
**Y** | **int32** | Location coordinates of the field in pixels. | 

## Methods

### NewSubFormFieldsPerDocumentBase

`func NewSubFormFieldsPerDocumentBase(documentIndex int32, apiId string, height int32, required bool, signer string, type_ string, width int32, x int32, y int32, ) *SubFormFieldsPerDocumentBase`

NewSubFormFieldsPerDocumentBase instantiates a new SubFormFieldsPerDocumentBase object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubFormFieldsPerDocumentBaseWithDefaults

`func NewSubFormFieldsPerDocumentBaseWithDefaults() *SubFormFieldsPerDocumentBase`

NewSubFormFieldsPerDocumentBaseWithDefaults instantiates a new SubFormFieldsPerDocumentBase object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDocumentIndex

`func (o *SubFormFieldsPerDocumentBase) GetDocumentIndex() int32`

GetDocumentIndex returns the DocumentIndex field if non-nil, zero value otherwise.

### GetDocumentIndexOk

`func (o *SubFormFieldsPerDocumentBase) GetDocumentIndexOk() (*int32, bool)`

GetDocumentIndexOk returns a tuple with the DocumentIndex field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocumentIndex

`func (o *SubFormFieldsPerDocumentBase) SetDocumentIndex(v int32)`

SetDocumentIndex sets DocumentIndex field to given value.


### GetApiId

`func (o *SubFormFieldsPerDocumentBase) GetApiId() string`

GetApiId returns the ApiId field if non-nil, zero value otherwise.

### GetApiIdOk

`func (o *SubFormFieldsPerDocumentBase) GetApiIdOk() (*string, bool)`

GetApiIdOk returns a tuple with the ApiId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiId

`func (o *SubFormFieldsPerDocumentBase) SetApiId(v string)`

SetApiId sets ApiId field to given value.


### GetHeight

`func (o *SubFormFieldsPerDocumentBase) GetHeight() int32`

GetHeight returns the Height field if non-nil, zero value otherwise.

### GetHeightOk

`func (o *SubFormFieldsPerDocumentBase) GetHeightOk() (*int32, bool)`

GetHeightOk returns a tuple with the Height field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHeight

`func (o *SubFormFieldsPerDocumentBase) SetHeight(v int32)`

SetHeight sets Height field to given value.


### GetName

`func (o *SubFormFieldsPerDocumentBase) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SubFormFieldsPerDocumentBase) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SubFormFieldsPerDocumentBase) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SubFormFieldsPerDocumentBase) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPage

`func (o *SubFormFieldsPerDocumentBase) GetPage() int32`

GetPage returns the Page field if non-nil, zero value otherwise.

### GetPageOk

`func (o *SubFormFieldsPerDocumentBase) GetPageOk() (*int32, bool)`

GetPageOk returns a tuple with the Page field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPage

`func (o *SubFormFieldsPerDocumentBase) SetPage(v int32)`

SetPage sets Page field to given value.

### HasPage

`func (o *SubFormFieldsPerDocumentBase) HasPage() bool`

HasPage returns a boolean if a field has been set.

### SetPageNil

`func (o *SubFormFieldsPerDocumentBase) SetPageNil(b bool)`

 SetPageNil sets the value for Page to be an explicit nil

### UnsetPage
`func (o *SubFormFieldsPerDocumentBase) UnsetPage()`

UnsetPage ensures that no value is present for Page, not even an explicit nil
### GetRequired

`func (o *SubFormFieldsPerDocumentBase) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *SubFormFieldsPerDocumentBase) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *SubFormFieldsPerDocumentBase) SetRequired(v bool)`

SetRequired sets Required field to given value.


### GetSigner

`func (o *SubFormFieldsPerDocumentBase) GetSigner() string`

GetSigner returns the Signer field if non-nil, zero value otherwise.

### GetSignerOk

`func (o *SubFormFieldsPerDocumentBase) GetSignerOk() (*string, bool)`

GetSignerOk returns a tuple with the Signer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigner

`func (o *SubFormFieldsPerDocumentBase) SetSigner(v string)`

SetSigner sets Signer field to given value.


### GetType

`func (o *SubFormFieldsPerDocumentBase) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SubFormFieldsPerDocumentBase) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SubFormFieldsPerDocumentBase) SetType(v string)`

SetType sets Type field to given value.


### GetWidth

`func (o *SubFormFieldsPerDocumentBase) GetWidth() int32`

GetWidth returns the Width field if non-nil, zero value otherwise.

### GetWidthOk

`func (o *SubFormFieldsPerDocumentBase) GetWidthOk() (*int32, bool)`

GetWidthOk returns a tuple with the Width field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWidth

`func (o *SubFormFieldsPerDocumentBase) SetWidth(v int32)`

SetWidth sets Width field to given value.


### GetX

`func (o *SubFormFieldsPerDocumentBase) GetX() int32`

GetX returns the X field if non-nil, zero value otherwise.

### GetXOk

`func (o *SubFormFieldsPerDocumentBase) GetXOk() (*int32, bool)`

GetXOk returns a tuple with the X field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetX

`func (o *SubFormFieldsPerDocumentBase) SetX(v int32)`

SetX sets X field to given value.


### GetY

`func (o *SubFormFieldsPerDocumentBase) GetY() int32`

GetY returns the Y field if non-nil, zero value otherwise.

### GetYOk

`func (o *SubFormFieldsPerDocumentBase) GetYOk() (*int32, bool)`

GetYOk returns a tuple with the Y field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetY

`func (o *SubFormFieldsPerDocumentBase) SetY(v int32)`

SetY sets Y field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


