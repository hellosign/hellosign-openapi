import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const fieldOptions: models.SubFieldOptions = {
  dateFormat: models.SubFieldOptions.DateFormatEnum.DdMmYyyy,
};

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

const signatureRequestSendRequest: models.SignatureRequestSendRequest = {
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
  metadata: {
    "custom_id": 1234,
    "custom_text": "NDA #9"
  },
  fieldOptions: fieldOptions,
  signingOptions: signingOptions,
  signers: signers,
};

apiCaller.signatureRequestSend(
  signatureRequestSendRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestSend:");
  console.log(error.body);
});
