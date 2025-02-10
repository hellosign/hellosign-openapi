import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const fieldOptions = new models.SubFieldOptions();
fieldOptions.dateFormat = models.SubFieldOptions.DateFormatEnum.DD_MM_YYYY;

const signingOptions = new models.SubSigningOptions();
signingOptions.defaultType = models.SubSigningOptions.DefaultTypeEnum.Draw;
signingOptions.draw = true;
signingOptions.phone = false;
signingOptions.type = true;
signingOptions.upload = true;

const signers1 = new models.SubSignatureRequestSigner();
signers1.name = "Jack";
signers1.emailAddress = "jack@example.com";
signers1.order = 0;

const signers2 = new models.SubSignatureRequestSigner();
signers2.name = "Jill";
signers2.emailAddress = "jill@example.com";
signers2.order = 1;

const signers = [
    signers1,
    signers2,
];

const signatureRequestEditRequest = new models.SignatureRequestEditRequest();
signatureRequestEditRequest.message = "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.";
signatureRequestEditRequest.subject = "The NDA we talked about";
signatureRequestEditRequest.testMode = true;
signatureRequestEditRequest.title = "NDA with Acme Co.";
signatureRequestEditRequest.fileUrls = [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
];
signatureRequestEditRequest.ccEmailAddresses = [
    "lawyer1@dropboxsign.com",
    "lawyer2@dropboxsign.com",
];
signatureRequestEditRequest.metadata = {
    "custom_id": 1234,
    "custom_text": "NDA #9",
};
signatureRequestEditRequest.fieldOptions = fieldOptions;
signatureRequestEditRequest.signingOptions = signingOptions;
signatureRequestEditRequest.signers = signers;

const signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

apiCaller.signatureRequestEdit(
    signatureRequestId,
    signatureRequestEditRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequest#signatureRequestEdit:");
  console.log(error.body);
});
