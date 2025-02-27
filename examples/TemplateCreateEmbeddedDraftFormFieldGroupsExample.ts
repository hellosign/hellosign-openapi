import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TemplateApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const fieldOptions = new models.SubFieldOptions();
fieldOptions.dateFormat = models.SubFieldOptions.DateFormatEnum.DD_MM_YYYY;

const formFieldGroups1 = new models.SubFormFieldGroup();
formFieldGroups1.groupId = "RadioItemGroup1";
formFieldGroups1.groupLabel = "Radio Item Group 1";
formFieldGroups1.requirement = "require_0-1";

const formFieldGroups = [
  formFieldGroups1,
];

const formFieldsPerDocument1 = new models.SubFormFieldsPerDocumentRadio();
formFieldsPerDocument1.documentIndex = 0;
formFieldsPerDocument1.apiId = "uniqueIdHere_1";
formFieldsPerDocument1.type = "radio";
formFieldsPerDocument1.required = false;
formFieldsPerDocument1.signer = "0";
formFieldsPerDocument1.width = 18;
formFieldsPerDocument1.height = 18;
formFieldsPerDocument1.x = 112;
formFieldsPerDocument1.y = 328;
formFieldsPerDocument1.group = "RadioItemGroup1";
formFieldsPerDocument1.isChecked = true;
formFieldsPerDocument1.name = "";
formFieldsPerDocument1.page = 1;

const formFieldsPerDocument2 = new models.SubFormFieldsPerDocumentRadio();
formFieldsPerDocument2.documentIndex = 0;
formFieldsPerDocument2.apiId = "uniqueIdHere_2";
formFieldsPerDocument2.type = "radio";
formFieldsPerDocument2.required = false;
formFieldsPerDocument2.signer = "0";
formFieldsPerDocument2.width = 18;
formFieldsPerDocument2.height = 18;
formFieldsPerDocument2.x = 112;
formFieldsPerDocument2.y = 370;
formFieldsPerDocument2.group = "RadioItemGroup1";
formFieldsPerDocument2.isChecked = false;
formFieldsPerDocument2.name = "";
formFieldsPerDocument2.page = 1;

const formFieldsPerDocument = [
  formFieldsPerDocument1,
  formFieldsPerDocument2,
];

const mergeFields1 = new models.SubMergeField();
mergeFields1.name = "Full Name";
mergeFields1.type = models.SubMergeField.TypeEnum.Text;

const mergeFields2 = new models.SubMergeField();
mergeFields2.name = "Is Registered?";
mergeFields2.type = models.SubMergeField.TypeEnum.Checkbox;

const mergeFields = [
  mergeFields1,
  mergeFields2,
];

const signerRoles1 = new models.SubTemplateRole();
signerRoles1.name = "Client";
signerRoles1.order = 0;

const signerRoles2 = new models.SubTemplateRole();
signerRoles2.name = "Witness";
signerRoles2.order = 1;

const signerRoles = [
  signerRoles1,
  signerRoles2,
];

const templateCreateEmbeddedDraftRequest = new models.TemplateCreateEmbeddedDraftRequest();
templateCreateEmbeddedDraftRequest.clientId = "37dee8d8440c66d54cfa05d92c160882";
templateCreateEmbeddedDraftRequest.message = "For your approval";
templateCreateEmbeddedDraftRequest.subject = "Please sign this document";
templateCreateEmbeddedDraftRequest.testMode = true;
templateCreateEmbeddedDraftRequest.title = "Test Template";
templateCreateEmbeddedDraftRequest.fileUrls = [
  "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
];
templateCreateEmbeddedDraftRequest.ccRoles = [
  "Manager",
];
templateCreateEmbeddedDraftRequest.fieldOptions = fieldOptions;
templateCreateEmbeddedDraftRequest.formFieldGroups = formFieldGroups;
templateCreateEmbeddedDraftRequest.formFieldsPerDocument = formFieldsPerDocument;
templateCreateEmbeddedDraftRequest.mergeFields = mergeFields;
templateCreateEmbeddedDraftRequest.signerRoles = signerRoles;

apiCaller.templateCreateEmbeddedDraft(
  templateCreateEmbeddedDraftRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling TemplateApi#templateCreateEmbeddedDraft:");
  console.log(error.body);
});
