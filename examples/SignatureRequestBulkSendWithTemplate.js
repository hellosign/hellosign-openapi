import * as HelloSignSDK
  from "@hellosign/openapi-javascript-sdk";

const api = new HelloSignSDK.SignatureRequestApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

const signerList1Signer = {
  role: "Client",
  name: "George",
  emailAddress: "george@example.com",
  pin: "d79a3td",
};

const signerList1CustomFields = {
  name: "company",
  value: "ABC Corp",
};

const signerList1 = {
  signers: [ signerList1Signer ],
  customFields: [ signerList1CustomFields ],
};

const signerList2Signer = {
  role: "Client",
  name: "Mary",
  emailAddress: "mary@example.com",
  pin: "gd9as5b",
};

const signerList2CustomFields = {
  name: "company",
  value: "123 LLC",
};

const signerList2 = {
  signers: [ signerList2Signer ],
  customFields: [ signerList2CustomFields ],
};

const cc1 = {
  role: "Accounting",
  emailAddress: "accounting@example.com",
};

const data = {
  templateIds: ["c26b8a16784a872da37ea946b9ddec7c1e11dff6"],
  subject: "Purchase Order",
  message: "Glad we could come to an agreement.",
  signerList: [ signerList1, signerList2 ],
  ccs: [ cc1 ],
  testMode: true,
};

const result = api.signatureRequestBulkSendWithTemplate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
