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

const signers1 = new models.SubSignatureRequestTemplateSigner();
signers1.role = "Client";
signers1.name = "George";
signers1.emailAddress = "george@example.com";

const signers = [
  signers1,
];

const signatureRequestCreateEmbeddedWithTemplateRequest = new models.SignatureRequestCreateEmbeddedWithTemplateRequest();
signatureRequestCreateEmbeddedWithTemplateRequest.clientId = "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a";
signatureRequestCreateEmbeddedWithTemplateRequest.templateIds = [
  "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
];
signatureRequestCreateEmbeddedWithTemplateRequest.message = "Glad we could come to an agreement.";
signatureRequestCreateEmbeddedWithTemplateRequest.subject = "Purchase Order";
signatureRequestCreateEmbeddedWithTemplateRequest.testMode = true;
signatureRequestCreateEmbeddedWithTemplateRequest.signingOptions = signingOptions;
signatureRequestCreateEmbeddedWithTemplateRequest.signers = signers;

apiCaller.signatureRequestCreateEmbeddedWithTemplate(
  signatureRequestCreateEmbeddedWithTemplateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestCreateEmbeddedWithTemplate:");
  console.log(error.body);
});
