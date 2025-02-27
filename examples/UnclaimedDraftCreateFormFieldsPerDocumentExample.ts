import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.UnclaimedDraftApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const formFieldsPerDocument1 = new models.SubFormFieldsPerDocumentText();
formFieldsPerDocument1.documentIndex = 0;
formFieldsPerDocument1.apiId = "uniqueIdHere_1";
formFieldsPerDocument1.type = "text";
formFieldsPerDocument1.required = true;
formFieldsPerDocument1.signer = "1";
formFieldsPerDocument1.width = 100;
formFieldsPerDocument1.height = 16;
formFieldsPerDocument1.x = 112;
formFieldsPerDocument1.y = 328;
formFieldsPerDocument1.name = "";
formFieldsPerDocument1.page = 1;
formFieldsPerDocument1.placeholder = "";
formFieldsPerDocument1.validationType = models.SubFormFieldsPerDocumentText.ValidationTypeEnum.NumbersOnly;

const formFieldsPerDocument2 = new models.SubFormFieldsPerDocumentSignature();
formFieldsPerDocument2.documentIndex = 0;
formFieldsPerDocument2.apiId = "uniqueIdHere_2";
formFieldsPerDocument2.type = "signature";
formFieldsPerDocument2.required = true;
formFieldsPerDocument2.signer = "0";
formFieldsPerDocument2.width = 120;
formFieldsPerDocument2.height = 30;
formFieldsPerDocument2.x = 530;
formFieldsPerDocument2.y = 415;
formFieldsPerDocument2.name = "";
formFieldsPerDocument2.page = 1;

const formFieldsPerDocument = [
  formFieldsPerDocument1,
  formFieldsPerDocument2,
];

const unclaimedDraftCreateRequest = new models.UnclaimedDraftCreateRequest();
unclaimedDraftCreateRequest.type = models.UnclaimedDraftCreateRequest.TypeEnum.RequestSignature;
unclaimedDraftCreateRequest.testMode = false;
unclaimedDraftCreateRequest.fileUrls = [
  "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
];
unclaimedDraftCreateRequest.formFieldsPerDocument = formFieldsPerDocument;

apiCaller.unclaimedDraftCreate(
  unclaimedDraftCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling UnclaimedDraftApi#unclaimedDraftCreate:");
  console.log(error.body);
});
