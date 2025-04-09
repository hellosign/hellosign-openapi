import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.UnclaimedDraftApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const ccs1: models.SubCC = {
  role: "Accounting",
  emailAddress: "accounting@dropboxsign.com",
};

const ccs = [
  ccs1,
];

const signers1: models.SubUnclaimedDraftTemplateSigner = {
  role: "Client",
  name: "George",
  emailAddress: "george@example.com",
};

const signers = [
  signers1,
];

const unclaimedDraftCreateEmbeddedWithTemplateRequest: models.UnclaimedDraftCreateEmbeddedWithTemplateRequest = {
  clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
  requesterEmailAddress: "jack@dropboxsign.com",
  templateIds: [
    "61a832ff0d8423f91d503e76bfbcc750f7417c78",
  ],
  testMode: false,
  ccs: ccs,
  signers: signers,
};

apiCaller.unclaimedDraftCreateEmbeddedWithTemplate(
  unclaimedDraftCreateEmbeddedWithTemplateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling UnclaimedDraftApi#unclaimedDraftCreateEmbeddedWithTemplate:");
  console.log(error.body);
});
