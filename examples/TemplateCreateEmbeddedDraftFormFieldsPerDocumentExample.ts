import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TemplateApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const fieldOptions = new models.SubFieldOptions();
fieldOptions.dateFormat = models.SubFieldOptions.DateFormatEnum.DD_MM_YYYY;

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
templateCreateEmbeddedDraftRequest.formFieldsPerDocument = formFieldsPerDocument;
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
