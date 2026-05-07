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

const signatureRequestEditEmbeddedWithTemplateRequest: models.SignatureRequestEditEmbeddedWithTemplateRequest = {
  clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
  templateIds: [
    "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
  ],
  message: "Glad we could come to an agreement.",
  subject: "Purchase Order",
  testMode: true,
  signingOptions: signingOptions,
  signers: signers,
};

apiCaller.signatureRequestEditEmbeddedWithTemplate(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
  signatureRequestEditEmbeddedWithTemplateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestEditEmbeddedWithTemplate:");
  console.log(error.body);
});
