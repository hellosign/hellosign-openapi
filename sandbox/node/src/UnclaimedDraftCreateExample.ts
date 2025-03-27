import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.UnclaimedDraftApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const signers1: models.SubUnclaimedDraftSigner = {
  name: "Jack",
  emailAddress: "jack@example.com",
  order: 0,
};

const signers = [
  signers1,
];

const unclaimedDraftCreateRequest: models.UnclaimedDraftCreateRequest = {
  type: models.UnclaimedDraftCreateRequest.TypeEnum.RequestSignature,
  testMode: true,
  files: [
    fs.createReadStream("./example_signature_request.pdf"),
  ],
  signers: signers,
};

apiCaller.unclaimedDraftCreate(
  unclaimedDraftCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling UnclaimedDraftApi#unclaimedDraftCreate:");
  console.log(error.body);
});
