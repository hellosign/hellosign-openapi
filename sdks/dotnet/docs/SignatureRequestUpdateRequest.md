# Dropbox.Sign.Model.SignatureRequestUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SignatureId** | **string** | REPLACE_ME_WITH_DESCRIPTION_BEGIN The signature ID for the recipient. REPLACE_ME_WITH_DESCRIPTION_END | **EmailAddress** | **string** | REPLACE_ME_WITH_DESCRIPTION_BEGIN The new email address for the recipient.

This will generate a new &#x60;signature_id&#x60; value.

**NOTE:** Optional if &#x60;name&#x60; is provided. REPLACE_ME_WITH_DESCRIPTION_END | [optional] **Name** | **string** | REPLACE_ME_WITH_DESCRIPTION_BEGIN The new name for the recipient.

**NOTE:** Optional if &#x60;email_address&#x60; is provided. REPLACE_ME_WITH_DESCRIPTION_END | [optional] **ExpiresAt** | **int?** | REPLACE_ME_WITH_DESCRIPTION_BEGIN The new time when the signature request will expire. Unsigned signatures will be moved to the expired status, and no longer signable. See [Signature Request Expiration Date](https://developers.hellosign.com/docs/signature-request/expiration/) for details. REPLACE_ME_WITH_DESCRIPTION_END | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

