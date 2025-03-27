import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const signatureRequestUpdateRequest: models.SignatureRequestUpdateRequest = {
  signatureId: "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f",
  emailAddress: "john@example.com",
};

apiCaller.signatureRequestUpdate(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
  signatureRequestUpdateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestUpdate:");
  console.log(error.body);
});
