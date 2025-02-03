import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();

const groupedSigners2Signers1 = new models.SubSignatureRequestSigner();
groupedSigners2Signers1.name = "Bob";
groupedSigners2Signers1.emailAddress = "bob@example.com";

const groupedSigners2Signers2 = new models.SubSignatureRequestSigner();
groupedSigners2Signers2.name = "Charlie";
groupedSigners2Signers2.emailAddress = "charlie@example.com";

const groupedSigners2Signers = [
    groupedSigners2Signers1,
    groupedSigners2Signers2,
];

const groupedSigners1Signers1 = new models.SubSignatureRequestSigner();
groupedSigners1Signers1.name = "Jack";
groupedSigners1Signers1.emailAddress = "jack@example.com";

const groupedSigners1Signers2 = new models.SubSignatureRequestSigner();
groupedSigners1Signers2.name = "Jill";
groupedSigners1Signers2.emailAddress = "jill@example.com";

const groupedSigners1Signers = [
    groupedSigners1Signers1,
    groupedSigners1Signers2,
];

const signingOptions = new models.SubSigningOptions();
signingOptions.defaultType = models.SubSigningOptions.DefaultTypeEnum.Draw;
signingOptions.draw = true;
signingOptions.phone = false;
signingOptions.type = true;
signingOptions.upload = true;

const groupedSigners1 = new models.SubSignatureRequestGroupedSigners();
groupedSigners1.group = "Group #1";
groupedSigners1.order = 0;
groupedSigners1.signers = groupedSigners1Signers;

const groupedSigners2 = new models.SubSignatureRequestGroupedSigners();
groupedSigners2.group = "Group #2";
groupedSigners2.order = 1;
groupedSigners2.signers = groupedSigners2Signers;

const groupedSigners = [
    groupedSigners1,
    groupedSigners2,
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
signatureRequestCreateEmbeddedRequest.groupedSigners = groupedSigners;

apiCaller.signatureRequestCreateEmbedded(
    signatureRequestCreateEmbeddedRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequest#signatureRequestCreateEmbedded:");
  console.log(error.body);
});
