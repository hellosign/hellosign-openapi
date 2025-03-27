import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TemplateApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const fieldOptions: models.SubFieldOptions = {
  dateFormat: models.SubFieldOptions.DateFormatEnum.DdMmYyyy,
};

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
  ccRoles: [
    "Manager",
  ],
  files: [
    fs.createReadStream("./example_signature_request.pdf"),
  ],
  fieldOptions: fieldOptions,
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
