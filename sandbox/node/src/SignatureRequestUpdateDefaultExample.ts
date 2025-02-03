import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();

const signatureRequestUpdateRequest = new models.SignatureRequestUpdateRequest();
signatureRequestUpdateRequest.signatureId = "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f";
signatureRequestUpdateRequest.emailAddress = "john@example.com";

const signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

apiCaller.signatureRequestUpdate(
    signatureRequestId,
    signatureRequestUpdateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequest#signatureRequestUpdate:");
  console.log(error.body);
});
