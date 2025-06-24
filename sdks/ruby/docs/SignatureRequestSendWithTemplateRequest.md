# Dropbox::Sign::SignatureRequestSendWithTemplateRequest



## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| `template_ids`<sup>*_required_</sup> | ```Array<String>``` |  Use `template_ids` to create a SignatureRequest from one or more templates, in the order in which the template will be used.  |  |
| `signers`<sup>*_required_</sup> | [```Array<SubSignatureRequestTemplateSigner>```](SubSignatureRequestTemplateSigner.md) |  _t__Sub::SignatureRequestTemplateSigner::DESCRIPTION  |  |
| `allow_decline` | ```Boolean``` |  Allows signers to decline to sign a document if `true`. Defaults to `false`.  |  [default to false] |
| `ccs` | [```Array<SubCC>```](SubCC.md) |  Add CC email recipients. Required when a CC role exists for the Template.  |  |
| `client_id` | ```String``` |  Client id of the app to associate with the signature request. Used to apply the branding and callback url defined for the app.  |  |
| `custom_fields` | [```Array<SubCustomField>```](SubCustomField.md) |  An array defining values and options for custom fields. Required when a custom field exists in the Template.  |  |
| `files` | ```Array<File>``` |  Use `files[]` to indicate the uploaded file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  |  |
| `file_urls` | ```Array<String>``` |  Use `file_urls[]` to have Dropbox Sign download the file(s) to send for signature.<br><br>This endpoint requires either **files** or **file_urls[]**, but not both.  |  |
| `is_qualified_signature` | ```Boolean``` |  Send with a value of `true` if you wish to enable [Qualified Electronic Signatures](https://www.hellosign.com/features/qualified-electronic-signatures) (QES), which requires a face-to-face call to verify the signer&#39;s identity.&lt;br&gt;<br>**NOTE:** QES is only available on the Premium API plan as an add-on purchase. Cannot be used in `test_mode`. Only works on requests with one signer.  |  [default to false] |
| `is_eid` | ```Boolean``` |  Send with a value of `true` if you wish to enable [electronic identification (eID)](https://www.hellosign.com/features/electronic-id), which requires the signer to verify their identity with an eID provider to sign a document.&lt;br&gt;<br>**NOTE:** eID is only available on the Premium API plan. Cannot be used in `test_mode`. Only works on requests with one signer.  |  [default to false] |
| `message` | ```String``` |  The custom message in the email that will be sent to the signers.  |  |
| `metadata` | ```Hash<String, Object>``` |  _t__Sub::Metadata::DESCRIPTION  |  |
| `signing_options` | [```SubSigningOptions```](SubSigningOptions.md) |    |  |
| `signing_redirect_url` | ```String``` |  The URL you want signers redirected to after they successfully sign.  |  |
| `subject` | ```String``` |  The subject in the email that will be sent to the signers.  |  |
| `test_mode` | ```Boolean``` |  Whether this is a test, the signature request will not be legally binding if set to `true`. Defaults to `false`.  |  [default to false] |
| `title` | ```String``` |  The title you want to assign to the SignatureRequest.  |  |

