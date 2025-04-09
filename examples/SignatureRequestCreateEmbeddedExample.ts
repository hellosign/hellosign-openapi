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

const signers1: models.SubSignatureRequestSigner = {
  name: "Jack",
  emailAddress: "jack@example.com",
  order: 0,
};

const signers2: models.SubSignatureRequestSigner = {
  name: "Jill",
  emailAddress: "jill@example.com",
  order: 1,
};

const signers = [
  signers1,
  signers2,
];

const signatureRequestCreateEmbeddedRequest: models.SignatureRequestCreateEmbeddedRequest = {
  clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
  message: "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
  subject: "The NDA we talked about",
  testMode: true,
  title: "NDA with Acme Co.",
  ccEmailAddresses: [
    "lawyer1@dropboxsign.com",
    "lawyer2@dropboxsign.com",
  ],
  files: [
    fs.createReadStream("./example_signature_request.pdf"),
  ],
  signingOptions: signingOptions,
  signers: signers,
};

apiCaller.signatureRequestCreateEmbedded(
  signatureRequestCreateEmbeddedRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestCreateEmbedded:");
  console.log(error.body);
});
