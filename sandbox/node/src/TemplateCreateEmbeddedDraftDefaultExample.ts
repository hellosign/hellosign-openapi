import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TemplateApi();

const fieldOptions = new models.SubFieldOptions();
fieldOptions.dateFormat = models.SubFieldOptions.DateFormatEnum.DD_MM_YYYY;

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
templateCreateEmbeddedDraftRequest.mergeFields = mergeFields;
templateCreateEmbeddedDraftRequest.signerRoles = signerRoles;

apiCaller.templateCreateEmbeddedDraft(
    templateCreateEmbeddedDraftRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Template#templateCreateEmbeddedDraft:");
  console.log(error.body);
});
