import * as DropboxSign from "@dropbox/sign";

const signatureRequestApi = new DropboxSign.SignatureRequestApi();

// Configure HTTP basic authorization: api_key
signatureRequestApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// signatureRequestApi.accessToken = "YOUR_ACCESS_TOKEN";

const signer1 = {
  role: "Client",
  emailAddress: "george@example.com",
  name: "George",
};

const cc1 = {
  role: "Accounting",
  emailAddress: "accounting@example.com",
};

const customField1 = {
  name: "Cost",
  value: "$20,000",
  editor: "Client",
  required: true,
};

const signingOptions = {
  draw: true,
  type: true,
  upload: true,
  phone: false,
  defaultType: "draw",
};

const data = {
  templateIds: ["c26b8a16784a872da37ea946b9ddec7c1e11dff6"],
  subject: "Purchase Order",
  message: "Glad we could come to an agreement.",
  signers: [ signer1 ],
  ccs: [ cc1 ],
  customFields: [ customField1 ],
  signingOptions,
  testMode: true,
};

const signatureRequestId = "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f";

const result = signatureRequestApi.signatureRequestEditWithTemplate(
    signatureRequestId,
    data,
);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
