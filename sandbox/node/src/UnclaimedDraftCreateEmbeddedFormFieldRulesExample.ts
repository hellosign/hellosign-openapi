import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.UnclaimedDraftApi();
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

const formFieldRules1 = new models.SubFormFieldRule();
formFieldRules1.id = "rule_1";
formFieldRules1.triggerOperator = "AND";
formFieldRules1.triggers = formFieldRules1Triggers;
formFieldRules1.actions = formFieldRules1Actions;

const formFieldRules = [
    formFieldRules1,
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

const unclaimedDraftCreateEmbeddedRequest = new models.UnclaimedDraftCreateEmbeddedRequest();
unclaimedDraftCreateEmbeddedRequest.clientId = "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a";
unclaimedDraftCreateEmbeddedRequest.requesterEmailAddress = "jack@dropboxsign.com";
unclaimedDraftCreateEmbeddedRequest.testMode = false;
unclaimedDraftCreateEmbeddedRequest.fileUrls = [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
];
unclaimedDraftCreateEmbeddedRequest.formFieldRules = formFieldRules;
unclaimedDraftCreateEmbeddedRequest.formFieldsPerDocument = formFieldsPerDocument;

apiCaller.unclaimedDraftCreateEmbedded(
    unclaimedDraftCreateEmbeddedRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling UnclaimedDraft#unclaimedDraftCreateEmbedded:");
  console.log(error.body);
});
