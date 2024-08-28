

# SubSignatureRequestSigner



## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| `name`<sup>*_required_</sup> | ```String``` |  The name of the signer.  |  |
| `emailAddress`<sup>*_required_</sup> | ```String``` |  The email address of the signer.  |  |
| `order` | ```Integer``` |  The order the signer is required to sign in.  |  |
| `pin` | ```String``` |  The 4- to 12-character access code that will secure this signer&#39;s signature page.  |  |
| `smsPhoneNumber` | ```String``` |  An E.164 formatted phone number.<br><br>By using the feature, you agree you are responsible for obtaining a signer&#39;s consent to receive text messages from Dropbox Sign related to this signature request and confirm you have obtained such consent from all signers prior to enabling SMS delivery for this signature request. [Learn more](https://faq.hellosign.com/hc/en-us/articles/15815316468877-Dropbox-Sign-SMS-tools-add-on).<br><br>**NOTE:** Not available in test mode and requires a Standard plan or higher.  |  |
| `smsPhoneNumberType` | [```SmsPhoneNumberTypeEnum```](#SmsPhoneNumberTypeEnum) |  Specifies the feature used with the `sms_phone_number`. Default `authentication`.<br><br>If `authentication`, signer is sent a verification code via SMS that is required to access the document.<br><br>If `delivery`, a link to complete the signature request is delivered via SMS (_and_ email).  |  |



## Enum: SmsPhoneNumberTypeEnum

| Name | Value |
---- | -----
| AUTHENTICATION | &quot;authentication&quot; |
| DELIVERY | &quot;delivery&quot; |



