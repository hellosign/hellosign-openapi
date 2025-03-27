import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.UnclaimedDraftApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const unclaimedDraftEditAndResendRequest: models.UnclaimedDraftEditAndResendRequest = {
  clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
  testMode: false,
};

apiCaller.unclaimedDraftEditAndResend(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
  unclaimedDraftEditAndResendRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling UnclaimedDraftApi#unclaimedDraftEditAndResend:");
  console.log(error.body);
});
