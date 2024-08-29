# SignatureRequestSendWithTemplateRequest



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `template_ids`<sup>*_required_</sup> | ```List[str]``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Use &#x60;template_ids&#x60; to create a SignatureRequest from one or more templates, in the order in which the template will be used. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `signers`<sup>*_required_</sup> | [```List[SubSignatureRequestTemplateSigner]```](SubSignatureRequestTemplateSigner.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN Add Signers to your Templated-based Signature Request. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `allow_decline` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Allows signers to decline to sign a document if &#x60;true&#x60;. Defaults to &#x60;false&#x60;. REPLACE_ME_WITH_DESCRIPTION_END |  [default to False] |
| `ccs` | [```List[SubCC]```](SubCC.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN Add CC email recipients. Required when a CC role exists for the Template. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `client_id` | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Client id of the app to associate with the signature request. Used to apply the branding and callback url defined for the app. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `custom_fields` | [```List[SubCustomField]```](SubCustomField.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN An array defining values and options for custom fields. Required when a custom field exists in the Template. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `files` | ```List[io.IOBase]``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Use &#x60;files[]&#x60; to indicate the uploaded file(s) to send for signature.

This endpoint requires either **files** or **file_urls[]**, but not both. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `file_urls` | ```List[str]``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Use &#x60;file_urls[]&#x60; to have Dropbox Sign download the file(s) to send for signature.

This endpoint requires either **files** or **file_urls[]**, but not both. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `is_qualified_signature` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Send with a value of &#x60;true&#x60; if you wish to enable
[Qualified Electronic Signatures](https://www.hellosign.com/features/qualified-electronic-signatures) (QES),
which requires a face-to-face call to verify the signer&#39;s identity.&lt;br&gt;
**NOTE:** QES is only available on the Premium API plan as an add-on purchase.
Cannot be used in &#x60;test_mode&#x60;. Only works on requests with one signer. REPLACE_ME_WITH_DESCRIPTION_END |  [default to False] |
| `is_eid` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Send with a value of &#x60;true&#x60; if you wish to enable
[electronic identification (eID)](https://www.hellosign.com/features/electronic-id),
which requires the signer to verify their identity with an eID provider to sign a document.&lt;br&gt;
**NOTE:** eID is only available on the Premium API plan. Cannot be used in &#x60;test_mode&#x60;. Only works on requests with one signer. REPLACE_ME_WITH_DESCRIPTION_END |  [default to False] |
| `message` | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The custom message in the email that will be sent to the signers. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `metadata` | ```Dict[str, object]``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Key-value data that should be attached to the signature request. This metadata is included in all API responses and events involving the signature request. For example, use the metadata field to store a signer&#39;s order number for look up when receiving events for the signature request.

Each request can include up to 10 metadata keys (or 50 nested metadata keys), with key names up to 40 characters long and values up to 1000 characters long. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `signing_options` | [```SubSigningOptions```](SubSigningOptions.md) | REPLACE_ME_WITH_DESCRIPTION_BEGIN  REPLACE_ME_WITH_DESCRIPTION_END |  |
| `signing_redirect_url` | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The URL you want signers redirected to after they successfully sign. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `subject` | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The subject in the email that will be sent to the signers. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `test_mode` | ```bool``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Whether this is a test, the signature request will not be legally binding if set to &#x60;true&#x60;. Defaults to &#x60;false&#x60;. REPLACE_ME_WITH_DESCRIPTION_END |  [default to False] |
| `title` | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The title you want to assign to the SignatureRequest. REPLACE_ME_WITH_DESCRIPTION_END |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

