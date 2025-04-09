import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.UnclaimedDraftApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const formFieldGroups1: models.SubFormFieldGroup = {
  groupId: "RadioItemGroup1",
  groupLabel: "Radio Item Group 1",
  requirement: "require_0-1",
};

const formFieldGroups = [
  formFieldGroups1,
];

const formFieldsPerDocument1: models.SubFormFieldsPerDocumentRadio = {
  documentIndex: 0,
  apiId: "uniqueIdHere_1",
  type: "radio",
  required: false,
  signer: "0",
  width: 18,
  height: 18,
  x: 112,
  y: 328,
  group: "RadioItemGroup1",
  isChecked: true,
  name: "",
  page: 1,
};

const formFieldsPerDocument2: models.SubFormFieldsPerDocumentRadio = {
  documentIndex: 0,
  apiId: "uniqueIdHere_2",
  type: "radio",
  required: false,
  signer: "0",
  width: 18,
  height: 18,
  x: 112,
  y: 370,
  group: "RadioItemGroup1",
  isChecked: false,
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
  formFieldGroups: formFieldGroups,
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
