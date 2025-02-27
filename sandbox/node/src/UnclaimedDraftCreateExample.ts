import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.UnclaimedDraftApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

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
unclaimedDraftCreateRequest.files = [
  fs.createReadStream("./example_signature_request.pdf"),
];
unclaimedDraftCreateRequest.signers = signers;

apiCaller.unclaimedDraftCreate(
  unclaimedDraftCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling UnclaimedDraftApi#unclaimedDraftCreate:");
  console.log(error.body);
});
