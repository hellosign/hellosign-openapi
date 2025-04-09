import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const signingOptions: models.SubSigningOptions = {
  defaultType: models.SubSigningOptions.DefaultTypeEnum.Draw,
  draw: true,
  phone: false,
  type: true,
  upload: true,
};

const signers1: models.SubSignatureRequestTemplateSigner = {
  role: "Client",
  name: "George",
  emailAddress: "george@example.com",
};

const signers = [
  signers1,
];

const ccs1: models.SubCC = {
  role: "Accounting",
  emailAddress: "accounting@example.com",
};

const ccs = [
  ccs1,
];

const customFields1: models.SubCustomField = {
  name: "Cost",
  editor: "Client",
  required: true,
  value: "$20,000",
};

const customFields = [
  customFields1,
];

const signatureRequestSendWithTemplateRequest: models.SignatureRequestSendWithTemplateRequest = {
  templateIds: [
    "61a832ff0d8423f91d503e76bfbcc750f7417c78",
  ],
  message: "Glad we could come to an agreement.",
  subject: "Purchase Order",
  testMode: true,
  signingOptions: signingOptions,
  signers: signers,
  ccs: ccs,
  customFields: customFields,
};

apiCaller.signatureRequestSendWithTemplate(
  signatureRequestSendWithTemplateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestSendWithTemplate:");
  console.log(error.body);
});
