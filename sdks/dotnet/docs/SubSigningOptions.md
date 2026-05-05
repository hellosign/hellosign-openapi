# Dropbox.Sign.Model.SubSigningOptions
This allows the requester to specify the types allowed for creating a signature and specify another signing options.  **NOTE:** If `signing_options` are not defined in the request, the allowed types will default to those specified in the account settings.  **NOTE:** If `force_advanced_signature_details` is set, allowed types has to be defined too.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefaultType** | **string** |  The default type shown (limited to the listed types)  | **Draw** | **bool** |  Allows drawing the signature  | [optional] [default to false]**Phone** | **bool** |  Allows using a smartphone to email the signature  | [optional] [default to false]**Type** | **bool** |  Allows typing the signature  | [optional] [default to false]**Upload** | **bool** |  Allows uploading the signature  | [optional] [default to false]**ForceAdvancedSignatureDetails** | **bool** |  Turning on advanced signature details for the signature request  | [optional] [default to false]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

