# Dropbox.Sign.Model.SubSignatureRequestGroupedSigners

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Group** | **string** |  The name of the group.  | 
**Signers** | [**List&lt;SubSignatureRequestSigner&gt;**](SubSignatureRequestSigner.md) |  Signers belonging to this Group.<br><br>**NOTE**: Only `name`, `email_address`, and `pin` are available to Grouped Signers. We will ignore all other properties, even though they are listed below.  | 
**Order** | **int?** |  The order the group is required to sign in. Use this instead of Signer-level `order`.  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

