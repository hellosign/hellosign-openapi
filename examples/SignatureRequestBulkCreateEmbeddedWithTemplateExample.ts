import * as DropboxSign from "@dropbox/sign";

const signatureRequestApi = new DropboxSign.SignatureRequestApi();

// Configure HTTP basic authorization: api_key
signatureRequestApi.username = "YOUR_API_KEY";

const signerList1Signer: DropboxSign.SubSignatureRequestTemplateSigner = {
  role: "Client",
  name: "George",
  emailAddress: "george@example.com",
  pin: "d79a3td",
};

const signerList1CustomFields: DropboxSign.SubBulkSignerListCustomField = {
  name: "company",
  value: "ABC Corp",
};

const signerList1: DropboxSign.SubBulkSignerList = {
  signers: [ signerList1Signer ],
  customFields: [ signerList1CustomFields ],
};

const signerList2Signer: DropboxSign.SubSignatureRequestTemplateSigner = {
  role: "Client",
  name: "Mary",
  emailAddress: "mary@example.com",
  pin: "gd9as5b",
};

const signerList2CustomFields: DropboxSign.SubBulkSignerListCustomField = {
  name: "company",
  value: "123 LLC",
};

const signerList2: DropboxSign.SubBulkSignerList = {
  signers: [ signerList2Signer ],
  customFields: [ signerList2CustomFields ],
};

const cc1: DropboxSign.SubCC = {
  role: "Accounting",
  emailAddress: "accounting@example.com",
};

const data: DropboxSign.SignatureRequestBulkCreateEmbeddedWithTemplateRequest = {
  clientId: "1a659d9ad95bccd307ecad78d72192f8",
  templateIds: ["c26b8a16784a872da37ea946b9ddec7c1e11dff6"],
  subject: "Purchase Order",
  message: "Glad we could come to an agreement.",
  signerList: [ signerList1, signerList2 ],
  ccs: [ cc1 ],
  testMode: true,
};

const result = signatureRequestApi.signatureRequestBulkCreateEmbeddedWithTemplate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
