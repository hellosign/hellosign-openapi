import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TemplateApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const fieldOptions: models.SubFieldOptions = {
  dateFormat: models.SubFieldOptions.DateFormatEnum.DdMmYyyy,
};

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

const templateCreateRequest: models.TemplateCreateRequest = {
  clientId: "37dee8d8440c66d54cfa05d92c160882",
  message: "For your approval",
  subject: "Please sign this document",
  testMode: true,
  title: "Test Template",
  ccRoles: [
    "Manager",
  ],
  files: [
    fs.createReadStream("./example_signature_request.pdf"),
  ],
  fieldOptions: fieldOptions,
  signerRoles: signerRoles,
  formFieldsPerDocument: formFieldsPerDocument,
  mergeFields: mergeFields,
};

apiCaller.templateCreate(
  templateCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling TemplateApi#templateCreate:");
  console.log(error.body);
});
