import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

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

const signatureRequestCreateEmbeddedRequest = new models.SignatureRequestCreateEmbeddedRequest();
signatureRequestCreateEmbeddedRequest.clientId = "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a";
signatureRequestCreateEmbeddedRequest.message = "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.";
signatureRequestCreateEmbeddedRequest.subject = "The NDA we talked about";
signatureRequestCreateEmbeddedRequest.testMode = true;
signatureRequestCreateEmbeddedRequest.title = "NDA with Acme Co.";
signatureRequestCreateEmbeddedRequest.fileUrls = [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
];
signatureRequestCreateEmbeddedRequest.ccEmailAddresses = [
    "lawyer1@dropboxsign.com",
    "lawyer2@dropboxsign.com",
];
signatureRequestCreateEmbeddedRequest.signingOptions = signingOptions;
signatureRequestCreateEmbeddedRequest.signers = signers;

apiCaller.signatureRequestCreateEmbedded(
    signatureRequestCreateEmbeddedRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequest#signatureRequestCreateEmbedded:");
  console.log(error.body);
});
