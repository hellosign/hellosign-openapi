import * as DropboxSign from "@dropbox/sign";

const fs = require('fs');

const signatureRequestApi = new DropboxSign.SignatureRequestApi();

// Configure HTTP basic authorization: api_key
signatureRequestApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// signatureRequestApi.accessToken = "YOUR_ACCESS_TOKEN";

const signer1 = {
  emailAddress: "jack@example.com",
  name: "Jack",
  order: 0,
};

const signer2 = {
  emailAddress: "jill@example.com",
  name: "Jill",
  order: 1,
};

const signingOptions = {
  draw: true,
  type: true,
  upload: true,
  phone: false,
  defaultType: "draw",
};

const fieldOptions = {
  dateFormat: "DD - MM - YYYY",
};

// Upload a local file
const file = fs.createReadStream("example_signature_request.pdf");

// or, upload from buffer
const fileBuffer = {
  value: fs.readFileSync("example_signature_request.pdf"),
  options: {
    filename: "example_signature_request.pdf",
    contentType: "application/pdf",
  },
};

// or, upload from buffer alternative
const fileBufferAlt = {
  value: Buffer.from("abc-123"),
  options: {
    filename: "txt-sample.txt",
    contentType: "text/plain",
  },
};

const data = {
  title: "NDA with Acme Co.",
  subject: "The NDA we talked about",
  message: "Please sign this NDA and then we can discuss more. Let me know if you have any questions.",
  signers: [ signer1, signer2 ],
  ccEmailAddresses: [
    "lawyer1@dropboxsign.com",
    "lawyer2@example.com",
  ],
  files: [ file, fileBuffer, fileBufferAlt ],
  metadata: {
    "custom_id": 1234,
    "custom_text": "NDA #9",
  },
  signingOptions,
  fieldOptions,
  testMode: true,
};

const result = signatureRequestApi.signatureRequestSend(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
