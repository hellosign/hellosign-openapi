import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();

const signerList2CustomFields1 = new models.SubBulkSignerListCustomField();
signerList2CustomFields1.name = "company";
signerList2CustomFields1.value = "123 LLC";

const signerList2CustomFields = [
    signerList2CustomFields1,
];

const signerList2Signers1 = new models.SubSignatureRequestTemplateSigner();
signerList2Signers1.role = "Client";
signerList2Signers1.name = "Mary";
signerList2Signers1.emailAddress = "mary@example.com";
signerList2Signers1.pin = "gd9as5b";

const signerList2Signers = [
    signerList2Signers1,
];

const signerList1CustomFields1 = new models.SubBulkSignerListCustomField();
signerList1CustomFields1.name = "company";
signerList1CustomFields1.value = "ABC Corp";

const signerList1CustomFields = [
    signerList1CustomFields1,
];

const signerList1Signers1 = new models.SubSignatureRequestTemplateSigner();
signerList1Signers1.role = "Client";
signerList1Signers1.name = "George";
signerList1Signers1.emailAddress = "george@example.com";
signerList1Signers1.pin = "d79a3td";

const signerList1Signers = [
    signerList1Signers1,
];

const signerList1 = new models.SubBulkSignerList();
signerList1.customFields = signerList1CustomFields;
signerList1.signers = signerList1Signers;

const signerList2 = new models.SubBulkSignerList();
signerList2.customFields = signerList2CustomFields;
signerList2.signers = signerList2Signers;

const signerList = [
    signerList1,
    signerList2,
];

const ccs1 = new models.SubCC();
ccs1.role = "Accounting";
ccs1.emailAddress = "accounting@example.com";

const ccs = [
    ccs1,
];

const signatureRequestBulkSendWithTemplateRequest = new models.SignatureRequestBulkSendWithTemplateRequest();
signatureRequestBulkSendWithTemplateRequest.templateIds = [
    "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
];
signatureRequestBulkSendWithTemplateRequest.message = "Glad we could come to an agreement.";
signatureRequestBulkSendWithTemplateRequest.subject = "Purchase Order";
signatureRequestBulkSendWithTemplateRequest.testMode = true;
signatureRequestBulkSendWithTemplateRequest.signerList = signerList;
signatureRequestBulkSendWithTemplateRequest.ccs = ccs;

apiCaller.signatureRequestBulkSendWithTemplate(
    signatureRequestBulkSendWithTemplateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequest#signatureRequestBulkSendWithTemplate:");
  console.log(error.body);
});
