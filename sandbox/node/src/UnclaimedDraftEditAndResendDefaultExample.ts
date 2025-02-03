import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.UnclaimedDraftApi();

const unclaimedDraftEditAndResendRequest = new models.UnclaimedDraftEditAndResendRequest();
unclaimedDraftEditAndResendRequest.clientId = "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a";
unclaimedDraftEditAndResendRequest.testMode = false;

const signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

apiCaller.unclaimedDraftEditAndResend(
    signatureRequestId,
    unclaimedDraftEditAndResendRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling UnclaimedDraft#unclaimedDraftEditAndResend:");
  console.log(error.body);
});
