import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.UnclaimedDraftApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const formFieldsPerDocument1: models.SubFormFieldsPerDocumentText = {
  documentIndex: 0,
  apiId: "uniqueIdHere_1",
  type: "text",
  required: true,
  signer: "1",
  width: 100,
  height: 16,
  x: 112,
  y: 328,
  name: "",
  page: 1,
  placeholder: "",
  validationType: models.SubFormFieldsPerDocumentText.ValidationTypeEnum.NumbersOnly,
};

const formFieldsPerDocument2: models.SubFormFieldsPerDocumentSignature = {
  documentIndex: 0,
  apiId: "uniqueIdHere_2",
  type: "signature",
  required: true,
  signer: "0",
  width: 120,
  height: 30,
  x: 530,
  y: 415,
  name: "",
  page: 1,
};

const formFieldsPerDocument = [
  formFieldsPerDocument1,
  formFieldsPerDocument2,
];

const unclaimedDraftCreateRequest: models.UnclaimedDraftCreateRequest = {
  type: models.UnclaimedDraftCreateRequest.TypeEnum.RequestSignature,
  testMode: false,
  fileUrls: [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
  ],
  formFieldsPerDocument: formFieldsPerDocument,
};

apiCaller.unclaimedDraftCreate(
  unclaimedDraftCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling UnclaimedDraftApi#unclaimedDraftCreate:");
  console.log(error.body);
});
