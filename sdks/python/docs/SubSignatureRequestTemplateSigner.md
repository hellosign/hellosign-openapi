# SubSignatureRequestTemplateSigner



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `role`<sup>*_required_</sup> | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Must match an existing role in chosen Template(s). It&#39;s case-sensitive. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `name`<sup>*_required_</sup> | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The name of the signer. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `email_address`<sup>*_required_</sup> | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The email address of the signer. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `pin` | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN The 4- to 12-character access code that will secure this signer&#39;s signature page. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `sms_phone_number` | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN An E.164 formatted phone number.

By using the feature, you agree you are responsible for obtaining a signer&#39;s consent to receive text messages from Dropbox Sign related to this signature request and confirm you have obtained such consent from all signers prior to enabling SMS delivery for this signature request. [Learn more](https://faq.hellosign.com/hc/en-us/articles/15815316468877-Dropbox-Sign-SMS-tools-add-on).

**NOTE:** Not available in test mode and requires a Standard plan or higher. REPLACE_ME_WITH_DESCRIPTION_END |  |
| `sms_phone_number_type` | ```str``` | REPLACE_ME_WITH_DESCRIPTION_BEGIN Specifies the feature used with the &#x60;sms_phone_number&#x60;. Default &#x60;authentication&#x60;.

If &#x60;authentication&#x60;, signer is sent a verification code via SMS that is required to access the document.

If &#x60;delivery&#x60;, a link to complete the signature request is delivered via SMS (_and_ email). REPLACE_ME_WITH_DESCRIPTION_END |  |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

