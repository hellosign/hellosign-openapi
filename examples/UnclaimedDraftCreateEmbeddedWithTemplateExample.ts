import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.UnclaimedDraftApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const ccs1 = new models.SubCC();
ccs1.role = "Accounting";
ccs1.emailAddress = "accounting@dropboxsign.com";

const ccs = [
  ccs1,
];

const signers1 = new models.SubUnclaimedDraftTemplateSigner();
signers1.role = "Client";
signers1.name = "George";
signers1.emailAddress = "george@example.com";

const signers = [
  signers1,
];

const unclaimedDraftCreateEmbeddedWithTemplateRequest = new models.UnclaimedDraftCreateEmbeddedWithTemplateRequest();
unclaimedDraftCreateEmbeddedWithTemplateRequest.clientId = "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a";
unclaimedDraftCreateEmbeddedWithTemplateRequest.requesterEmailAddress = "jack@dropboxsign.com";
unclaimedDraftCreateEmbeddedWithTemplateRequest.templateIds = [
  "61a832ff0d8423f91d503e76bfbcc750f7417c78",
];
unclaimedDraftCreateEmbeddedWithTemplateRequest.testMode = false;
unclaimedDraftCreateEmbeddedWithTemplateRequest.ccs = ccs;
unclaimedDraftCreateEmbeddedWithTemplateRequest.signers = signers;

apiCaller.unclaimedDraftCreateEmbeddedWithTemplate(
  unclaimedDraftCreateEmbeddedWithTemplateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling UnclaimedDraftApi#unclaimedDraftCreateEmbeddedWithTemplate:");
  console.log(error.body);
});
