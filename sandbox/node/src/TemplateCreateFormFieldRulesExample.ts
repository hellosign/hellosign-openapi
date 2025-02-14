import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TemplateApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const formFieldRules1Triggers1 = new models.SubFormFieldRuleTrigger();
formFieldRules1Triggers1.id = "uniqueIdHere_1";
formFieldRules1Triggers1.operator = models.SubFormFieldRuleTrigger.OperatorEnum.Is;
formFieldRules1Triggers1.value = "foo";

const formFieldRules1Triggers = [
    formFieldRules1Triggers1,
];

const formFieldRules1Actions1 = new models.SubFormFieldRuleAction();
formFieldRules1Actions1.hidden = true;
formFieldRules1Actions1.type = models.SubFormFieldRuleAction.TypeEnum.FieldVisibility;
formFieldRules1Actions1.fieldId = "uniqueIdHere_2";

const formFieldRules1Actions = [
    formFieldRules1Actions1,
];

const fieldOptions = new models.SubFieldOptions();
fieldOptions.dateFormat = models.SubFieldOptions.DateFormatEnum.DD_MM_YYYY;

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

const formFieldsPerDocument1 = new models.SubFormFieldsPerDocumentText();
formFieldsPerDocument1.documentIndex = 0;
formFieldsPerDocument1.apiId = "uniqueIdHere_1";
formFieldsPerDocument1.type = "text";
formFieldsPerDocument1.required = true;
formFieldsPerDocument1.signer = "0";
formFieldsPerDocument1.width = 100;
formFieldsPerDocument1.height = 16;
formFieldsPerDocument1.x = 112;
formFieldsPerDocument1.y = 328;
formFieldsPerDocument1.name = "";
formFieldsPerDocument1.page = 1;
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

const formFieldRules1 = new models.SubFormFieldRule();
formFieldRules1.id = "rule_1";
formFieldRules1.triggerOperator = "AND";
formFieldRules1.triggers = formFieldRules1Triggers;
formFieldRules1.actions = formFieldRules1Actions;

const formFieldRules = [
    formFieldRules1,
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

const templateCreateRequest = new models.TemplateCreateRequest();
templateCreateRequest.clientId = "37dee8d8440c66d54cfa05d92c160882";
templateCreateRequest.message = "For your approval";
templateCreateRequest.subject = "Please sign this document";
templateCreateRequest.testMode = true;
templateCreateRequest.title = "Test Template";
templateCreateRequest.fileUrls = [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
];
templateCreateRequest.ccRoles = [
    "Manager",
];
templateCreateRequest.fieldOptions = fieldOptions;
templateCreateRequest.signerRoles = signerRoles;
templateCreateRequest.formFieldsPerDocument = formFieldsPerDocument;
templateCreateRequest.formFieldRules = formFieldRules;
templateCreateRequest.mergeFields = mergeFields;

apiCaller.templateCreate(
    templateCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Template#templateCreate:");
  console.log(error.body);
});
