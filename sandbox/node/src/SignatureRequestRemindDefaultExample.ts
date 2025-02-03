import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();

const signatureRequestRemindRequest = new models.SignatureRequestRemindRequest();
signatureRequestRemindRequest.emailAddress = "john@example.com";

const signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

apiCaller.signatureRequestRemind(
    signatureRequestId,
    signatureRequestRemindRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequest#signatureRequestRemind:");
  console.log(error.body);
});
