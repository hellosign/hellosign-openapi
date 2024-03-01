# # SubSignatureRequestSigner



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
| `name`<sup>*_required_</sup> | ```string``` |  The name of the signer.  |  |
| `email_address`<sup>*_required_</sup> | ```string``` |  The email address of the signer.  |  |
| `order` | ```int``` |  The order the signer is required to sign in.  |  |
| `pin` | ```string``` |  The 4- to 12-character access code that will secure this signer&#39;s signature page.  |  |
| `sms_phone_number` | ```string``` |  An E.164 formatted phone number.<br><br>By using the feature, you agree you are responsible for obtaining a signer&#39;s consent to receive text messages from Dropbox Sign related to this signature request and confirm you have obtained such consent from all signers prior to enabling SMS delivery for this signature request. [Learn more](https://faq.hellosign.com/hc/en-us/articles/15815316468877-Dropbox-Sign-SMS-tools-add-on).<br><br>**Note**: Not available in test mode and requires a Standard plan or higher.  |  |
| `sms_phone_number_type` | ```string``` |  Specifies the feature used with the `sms_phone_number`. Default `authentication`.<br><br>If `authentication`, signer is sent a verification code via SMS that is required to access the document.<br><br>If `delivery`, a link to complete the signature request is delivered via SMS (_and_ email).  |  |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
