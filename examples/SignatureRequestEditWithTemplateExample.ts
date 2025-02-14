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

const ccs1 = new models.SubCC();
ccs1.role = "Accounting";
ccs1.emailAddress = "accounting@example.com";

const ccs = [
    ccs1,
];

const customFields1 = new models.SubCustomField();
customFields1.name = "Cost";
customFields1.editor = "Client";
customFields1.required = true;
customFields1.value = "$20,000";

const customFields = [
    customFields1,
];

const signatureRequestEditWithTemplateRequest = new models.SignatureRequestEditWithTemplateRequest();
signatureRequestEditWithTemplateRequest.templateIds = [
    "61a832ff0d8423f91d503e76bfbcc750f7417c78",
];
signatureRequestEditWithTemplateRequest.message = "Glad we could come to an agreement.";
signatureRequestEditWithTemplateRequest.subject = "Purchase Order";
signatureRequestEditWithTemplateRequest.testMode = true;
signatureRequestEditWithTemplateRequest.signingOptions = signingOptions;
signatureRequestEditWithTemplateRequest.signers = signers;
signatureRequestEditWithTemplateRequest.ccs = ccs;
signatureRequestEditWithTemplateRequest.customFields = customFields;

const signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

apiCaller.signatureRequestEditWithTemplate(
    signatureRequestId,
    signatureRequestEditWithTemplateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequest#signatureRequestEditWithTemplate:");
  console.log(error.body);
});
