import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.signatureRequestCancel(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestCancel:");
  console.log(error.body);
});
