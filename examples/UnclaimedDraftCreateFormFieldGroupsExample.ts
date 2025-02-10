import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.UnclaimedDraftApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

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

const unclaimedDraftCreateRequest = new models.UnclaimedDraftCreateRequest();
unclaimedDraftCreateRequest.type = models.UnclaimedDraftCreateRequest.TypeEnum.RequestSignature;
unclaimedDraftCreateRequest.testMode = false;
unclaimedDraftCreateRequest.fileUrls = [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
];
unclaimedDraftCreateRequest.formFieldGroups = formFieldGroups;
unclaimedDraftCreateRequest.formFieldsPerDocument = formFieldsPerDocument;

apiCaller.unclaimedDraftCreate(
    unclaimedDraftCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling UnclaimedDraft#unclaimedDraftCreate:");
  console.log(error.body);
});
