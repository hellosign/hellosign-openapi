# UnclaimedDraftEditAndResendRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | **string** | Client id of the app used to create the draft. Used to apply the branding and callback url defined for the app. | 
**EditorOptions** | Pointer to [**SubEditorOptions**](SubEditorOptions.md) |  | [optional] 
**IsForEmbeddedSigning** | Pointer to **bool** | The request created from this draft will also be signable in embedded mode if set to &#x60;true&#x60;. | [optional] 
**RequesterEmailAddress** | Pointer to **string** | The email address of the user that should be designated as the requester of this draft. If not set, original requester&#39;s email address will be used. | [optional] 
**RequestingRedirectUrl** | Pointer to **string** | The URL you want signers redirected to after they successfully request a signature. | [optional] 
**ShowProgressStepper** | Pointer to **bool** | When only one step remains in the signature request process and this parameter is set to &#x60;false&#x60; then the progress stepper will be hidden. | [optional] [default to true]
**SigningRedirectUrl** | Pointer to **string** | The URL you want signers redirected to after they successfully sign. | [optional] 
**TestMode** | Pointer to **bool** | Whether this is a test, the signature request created from this draft will not be legally binding if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;. | [optional] [default to false]

## Methods

### NewUnclaimedDraftEditAndResendRequest

`func NewUnclaimedDraftEditAndResendRequest(clientId string, ) *UnclaimedDraftEditAndResendRequest`

NewUnclaimedDraftEditAndResendRequest instantiates a new UnclaimedDraftEditAndResendRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUnclaimedDraftEditAndResendRequestWithDefaults

`func NewUnclaimedDraftEditAndResendRequestWithDefaults() *UnclaimedDraftEditAndResendRequest`

NewUnclaimedDraftEditAndResendRequestWithDefaults instantiates a new UnclaimedDraftEditAndResendRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClientId

`func (o *UnclaimedDraftEditAndResendRequest) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *UnclaimedDraftEditAndResendRequest) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *UnclaimedDraftEditAndResendRequest) SetClientId(v string)`

SetClientId sets ClientId field to given value.


### GetEditorOptions

`func (o *UnclaimedDraftEditAndResendRequest) GetEditorOptions() SubEditorOptions`

GetEditorOptions returns the EditorOptions field if non-nil, zero value otherwise.

### GetEditorOptionsOk

`func (o *UnclaimedDraftEditAndResendRequest) GetEditorOptionsOk() (*SubEditorOptions, bool)`

GetEditorOptionsOk returns a tuple with the EditorOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditorOptions

`func (o *UnclaimedDraftEditAndResendRequest) SetEditorOptions(v SubEditorOptions)`

SetEditorOptions sets EditorOptions field to given value.

### HasEditorOptions

`func (o *UnclaimedDraftEditAndResendRequest) HasEditorOptions() bool`

HasEditorOptions returns a boolean if a field has been set.

### GetIsForEmbeddedSigning

`func (o *UnclaimedDraftEditAndResendRequest) GetIsForEmbeddedSigning() bool`

GetIsForEmbeddedSigning returns the IsForEmbeddedSigning field if non-nil, zero value otherwise.

### GetIsForEmbeddedSigningOk

`func (o *UnclaimedDraftEditAndResendRequest) GetIsForEmbeddedSigningOk() (*bool, bool)`

GetIsForEmbeddedSigningOk returns a tuple with the IsForEmbeddedSigning field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsForEmbeddedSigning

`func (o *UnclaimedDraftEditAndResendRequest) SetIsForEmbeddedSigning(v bool)`

SetIsForEmbeddedSigning sets IsForEmbeddedSigning field to given value.

### HasIsForEmbeddedSigning

`func (o *UnclaimedDraftEditAndResendRequest) HasIsForEmbeddedSigning() bool`

HasIsForEmbeddedSigning returns a boolean if a field has been set.

### GetRequesterEmailAddress

`func (o *UnclaimedDraftEditAndResendRequest) GetRequesterEmailAddress() string`

GetRequesterEmailAddress returns the RequesterEmailAddress field if non-nil, zero value otherwise.

### GetRequesterEmailAddressOk

`func (o *UnclaimedDraftEditAndResendRequest) GetRequesterEmailAddressOk() (*string, bool)`

GetRequesterEmailAddressOk returns a tuple with the RequesterEmailAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterEmailAddress

`func (o *UnclaimedDraftEditAndResendRequest) SetRequesterEmailAddress(v string)`

SetRequesterEmailAddress sets RequesterEmailAddress field to given value.

### HasRequesterEmailAddress

`func (o *UnclaimedDraftEditAndResendRequest) HasRequesterEmailAddress() bool`

HasRequesterEmailAddress returns a boolean if a field has been set.

### GetRequestingRedirectUrl

`func (o *UnclaimedDraftEditAndResendRequest) GetRequestingRedirectUrl() string`

GetRequestingRedirectUrl returns the RequestingRedirectUrl field if non-nil, zero value otherwise.

### GetRequestingRedirectUrlOk

`func (o *UnclaimedDraftEditAndResendRequest) GetRequestingRedirectUrlOk() (*string, bool)`

GetRequestingRedirectUrlOk returns a tuple with the RequestingRedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestingRedirectUrl

`func (o *UnclaimedDraftEditAndResendRequest) SetRequestingRedirectUrl(v string)`

SetRequestingRedirectUrl sets RequestingRedirectUrl field to given value.

### HasRequestingRedirectUrl

`func (o *UnclaimedDraftEditAndResendRequest) HasRequestingRedirectUrl() bool`

HasRequestingRedirectUrl returns a boolean if a field has been set.

### GetShowProgressStepper

`func (o *UnclaimedDraftEditAndResendRequest) GetShowProgressStepper() bool`

GetShowProgressStepper returns the ShowProgressStepper field if non-nil, zero value otherwise.

### GetShowProgressStepperOk

`func (o *UnclaimedDraftEditAndResendRequest) GetShowProgressStepperOk() (*bool, bool)`

GetShowProgressStepperOk returns a tuple with the ShowProgressStepper field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShowProgressStepper

`func (o *UnclaimedDraftEditAndResendRequest) SetShowProgressStepper(v bool)`

SetShowProgressStepper sets ShowProgressStepper field to given value.

### HasShowProgressStepper

`func (o *UnclaimedDraftEditAndResendRequest) HasShowProgressStepper() bool`

HasShowProgressStepper returns a boolean if a field has been set.

### GetSigningRedirectUrl

`func (o *UnclaimedDraftEditAndResendRequest) GetSigningRedirectUrl() string`

GetSigningRedirectUrl returns the SigningRedirectUrl field if non-nil, zero value otherwise.

### GetSigningRedirectUrlOk

`func (o *UnclaimedDraftEditAndResendRequest) GetSigningRedirectUrlOk() (*string, bool)`

GetSigningRedirectUrlOk returns a tuple with the SigningRedirectUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigningRedirectUrl

`func (o *UnclaimedDraftEditAndResendRequest) SetSigningRedirectUrl(v string)`

SetSigningRedirectUrl sets SigningRedirectUrl field to given value.

### HasSigningRedirectUrl

`func (o *UnclaimedDraftEditAndResendRequest) HasSigningRedirectUrl() bool`

HasSigningRedirectUrl returns a boolean if a field has been set.

### GetTestMode

`func (o *UnclaimedDraftEditAndResendRequest) GetTestMode() bool`

GetTestMode returns the TestMode field if non-nil, zero value otherwise.

### GetTestModeOk

`func (o *UnclaimedDraftEditAndResendRequest) GetTestModeOk() (*bool, bool)`

GetTestModeOk returns a tuple with the TestMode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTestMode

`func (o *UnclaimedDraftEditAndResendRequest) SetTestMode(v bool)`

SetTestMode sets TestMode field to given value.

### HasTestMode

`func (o *UnclaimedDraftEditAndResendRequest) HasTestMode() bool`

HasTestMode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


