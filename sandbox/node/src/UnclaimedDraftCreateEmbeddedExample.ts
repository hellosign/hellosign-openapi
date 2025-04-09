import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.UnclaimedDraftApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const unclaimedDraftCreateEmbeddedRequest: models.UnclaimedDraftCreateEmbeddedRequest = {
  clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
  requesterEmailAddress: "jack@dropboxsign.com",
  testMode: true,
  files: [
    fs.createReadStream("./example_signature_request.pdf"),
  ],
};

apiCaller.unclaimedDraftCreateEmbedded(
  unclaimedDraftCreateEmbeddedRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling UnclaimedDraftApi#unclaimedDraftCreateEmbedded:");
  console.log(error.body);
});
