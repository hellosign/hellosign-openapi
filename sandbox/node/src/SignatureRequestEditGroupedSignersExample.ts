import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const groupedSigners2Signers1: models.SubSignatureRequestSigner = {
  name: "Bob",
  emailAddress: "bob@example.com",
};

const groupedSigners2Signers2: models.SubSignatureRequestSigner = {
  name: "Charlie",
  emailAddress: "charlie@example.com",
};

const groupedSigners2Signers = [
  groupedSigners2Signers1,
  groupedSigners2Signers2,
];

const groupedSigners1Signers1: models.SubSignatureRequestSigner = {
  name: "Jack",
  emailAddress: "jack@example.com",
};

const groupedSigners1Signers2: models.SubSignatureRequestSigner = {
  name: "Jill",
  emailAddress: "jill@example.com",
};

const groupedSigners1Signers = [
  groupedSigners1Signers1,
  groupedSigners1Signers2,
];

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

const groupedSigners1: models.SubSignatureRequestGroupedSigners = {
  group: "Group #1",
  order: 0,
  signers: groupedSigners1Signers,
};

const groupedSigners2: models.SubSignatureRequestGroupedSigners = {
  group: "Group #2",
  order: 1,
  signers: groupedSigners2Signers,
};

const groupedSigners = [
  groupedSigners1,
  groupedSigners2,
];

const signatureRequestEditRequest: models.SignatureRequestEditRequest = {
  message: "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
  subject: "The NDA we talked about",
  testMode: true,
  title: "NDA with Acme Co.",
  fileUrls: [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
  ],
  ccEmailAddresses: [
    "lawyer1@dropboxsign.com",
    "lawyer2@dropboxsign.com",
  ],
  metadata: {
    "custom_id": 1234,
    "custom_text": "NDA #9"
  },
  fieldOptions: fieldOptions,
  signingOptions: signingOptions,
  groupedSigners: groupedSigners,
};

apiCaller.signatureRequestEdit(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
  signatureRequestEditRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestEdit:");
  console.log(error.body);
});
