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

const signatureRequestEditEmbeddedRequest = new models.SignatureRequestEditEmbeddedRequest();
signatureRequestEditEmbeddedRequest.clientId = "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a";
signatureRequestEditEmbeddedRequest.message = "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.";
signatureRequestEditEmbeddedRequest.subject = "The NDA we talked about";
signatureRequestEditEmbeddedRequest.testMode = true;
signatureRequestEditEmbeddedRequest.title = "NDA with Acme Co.";
signatureRequestEditEmbeddedRequest.fileUrls = [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
];
signatureRequestEditEmbeddedRequest.ccEmailAddresses = [
    "lawyer1@dropboxsign.com",
    "lawyer2@dropboxsign.com",
];
signatureRequestEditEmbeddedRequest.signingOptions = signingOptions;
signatureRequestEditEmbeddedRequest.signers = signers;

const signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

apiCaller.signatureRequestEditEmbedded(
    signatureRequestId,
    signatureRequestEditEmbeddedRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequest#signatureRequestEditEmbedded:");
  console.log(error.body);
});
