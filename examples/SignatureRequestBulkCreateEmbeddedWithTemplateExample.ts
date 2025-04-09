import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";

const signerList2CustomFields1: models.SubBulkSignerListCustomField = {
  name: "company",
  value: "123 LLC",
};

const signerList2CustomFields = [
  signerList2CustomFields1,
];

const signerList2Signers1: models.SubSignatureRequestTemplateSigner = {
  role: "Client",
  name: "Mary",
  emailAddress: "mary@example.com",
  pin: "gd9as5b",
};

const signerList2Signers = [
  signerList2Signers1,
];

const signerList1CustomFields1: models.SubBulkSignerListCustomField = {
  name: "company",
  value: "ABC Corp",
};

const signerList1CustomFields = [
  signerList1CustomFields1,
];

const signerList1Signers1: models.SubSignatureRequestTemplateSigner = {
  role: "Client",
  name: "George",
  emailAddress: "george@example.com",
  pin: "d79a3td",
};

const signerList1Signers = [
  signerList1Signers1,
];

const signerList1: models.SubBulkSignerList = {
  customFields: signerList1CustomFields,
  signers: signerList1Signers,
};

const signerList2: models.SubBulkSignerList = {
  customFields: signerList2CustomFields,
  signers: signerList2Signers,
};

const signerList = [
  signerList1,
  signerList2,
];

const ccs1: models.SubCC = {
  role: "Accounting",
  emailAddress: "accounting@example.com",
};

const ccs = [
  ccs1,
];

const signatureRequestBulkCreateEmbeddedWithTemplateRequest: models.SignatureRequestBulkCreateEmbeddedWithTemplateRequest = {
  clientId: "1a659d9ad95bccd307ecad78d72192f8",
  templateIds: [
    "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
  ],
  message: "Glad we could come to an agreement.",
  subject: "Purchase Order",
  testMode: true,
  signerList: signerList,
  ccs: ccs,
};

apiCaller.signatureRequestBulkCreateEmbeddedWithTemplate(
  signatureRequestBulkCreateEmbeddedWithTemplateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestBulkCreateEmbeddedWithTemplate:");
  console.log(error.body);
});
