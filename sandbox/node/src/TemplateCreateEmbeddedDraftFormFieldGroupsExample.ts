import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TemplateApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const fieldOptions: models.SubFieldOptions = {
  dateFormat: models.SubFieldOptions.DateFormatEnum.DdMmYyyy,
};

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

const mergeFields1: models.SubMergeField = {
  name: "Full Name",
  type: models.SubMergeField.TypeEnum.Text,
};

const mergeFields2: models.SubMergeField = {
  name: "Is Registered?",
  type: models.SubMergeField.TypeEnum.Checkbox,
};

const mergeFields = [
  mergeFields1,
  mergeFields2,
];

const signerRoles1: models.SubTemplateRole = {
  name: "Client",
  order: 0,
};

const signerRoles2: models.SubTemplateRole = {
  name: "Witness",
  order: 1,
};

const signerRoles = [
  signerRoles1,
  signerRoles2,
];

const templateCreateEmbeddedDraftRequest: models.TemplateCreateEmbeddedDraftRequest = {
  clientId: "37dee8d8440c66d54cfa05d92c160882",
  message: "For your approval",
  subject: "Please sign this document",
  testMode: true,
  title: "Test Template",
  fileUrls: [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
  ],
  ccRoles: [
    "Manager",
  ],
  fieldOptions: fieldOptions,
  formFieldGroups: formFieldGroups,
  formFieldsPerDocument: formFieldsPerDocument,
  mergeFields: mergeFields,
  signerRoles: signerRoles,
};

apiCaller.templateCreateEmbeddedDraft(
  templateCreateEmbeddedDraftRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling TemplateApi#templateCreateEmbeddedDraft:");
  console.log(error.body);
});
