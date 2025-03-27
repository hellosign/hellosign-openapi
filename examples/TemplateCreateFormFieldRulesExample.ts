import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TemplateApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const formFieldRules1Triggers1: models.SubFormFieldRuleTrigger = {
  id: "uniqueIdHere_1",
  operator: models.SubFormFieldRuleTrigger.OperatorEnum.Is,
  value: "foo",
};

const formFieldRules1Triggers = [
  formFieldRules1Triggers1,
];

const formFieldRules1Actions1: models.SubFormFieldRuleAction = {
  hidden: true,
  type: models.SubFormFieldRuleAction.TypeEnum.ChangeFieldVisibility,
  fieldId: "uniqueIdHere_2",
};

const formFieldRules1Actions = [
  formFieldRules1Actions1,
];

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
  signer: "0",
  width: 100,
  height: 16,
  x: 112,
  y: 328,
  name: "",
  page: 1,
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

const formFieldRules1: models.SubFormFieldRule = {
  id: "rule_1",
  triggerOperator: "AND",
  triggers: formFieldRules1Triggers,
  actions: formFieldRules1Actions,
};

const formFieldRules = [
  formFieldRules1,
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
  fileUrls: [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
  ],
  ccRoles: [
    "Manager",
  ],
  fieldOptions: fieldOptions,
  signerRoles: signerRoles,
  formFieldsPerDocument: formFieldsPerDocument,
  formFieldRules: formFieldRules,
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
