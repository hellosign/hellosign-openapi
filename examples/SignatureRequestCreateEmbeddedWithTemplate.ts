import * as HelloSign from "hellosign-sdk";

const signatureRequestApi = new HelloSign.SignatureRequestApi();

// Configure HTTP basic authorization: api_key
signatureRequestApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// signatureRequestApi.accessToken = "YOUR_ACCESS_TOKEN";

const signer1: HelloSign.SubSignatureRequestTemplateSigner = {
  role: "Client",
  emailAddress: "george@example.com",
  name: "George",
};

const signingOptions: HelloSign.SubSigningOptions = {
  draw: true,
  type: true,
  upload: true,
  phone: false,
  defaultType: HelloSign.SubSigningOptions.DefaultTypeEnum.Draw,
};

const data: HelloSign.SignatureRequestCreateEmbeddedWithTemplateRequest = {
  clientId: "ec64a202072370a737edf4a0eb7f4437",
  templateIds: ["c26b8a16784a872da37ea946b9ddec7c1e11dff6"],
  subject: "Purchase Order",
  message: "Glad we could come to an agreement.",
  signers: [ signer1 ],
  signingOptions,
  testMode: true,
};

const result = signatureRequestApi.signatureRequestCreateEmbeddedWithTemplate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
