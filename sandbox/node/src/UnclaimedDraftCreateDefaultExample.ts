import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.UnclaimedDraftApi();

const signers1 = new models.SubUnclaimedDraftSigner();
signers1.name = "Jack";
signers1.emailAddress = "jack@example.com";
signers1.order = 0;

const signers = [
    signers1,
];

const unclaimedDraftCreateRequest = new models.UnclaimedDraftCreateRequest();
unclaimedDraftCreateRequest.type = models.UnclaimedDraftCreateRequest.TypeEnum.RequestSignature;
unclaimedDraftCreateRequest.testMode = true;
unclaimedDraftCreateRequest.fileUrls = [
    "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
];
unclaimedDraftCreateRequest.signers = signers;

apiCaller.unclaimedDraftCreate(
    unclaimedDraftCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling UnclaimedDraft#unclaimedDraftCreate:");
  console.log(error.body);
});
