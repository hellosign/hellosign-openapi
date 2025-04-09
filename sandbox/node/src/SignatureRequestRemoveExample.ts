import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";

apiCaller.signatureRequestRemove(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
).catch(error => {
  console.log("Exception when calling SignatureRequestApi#signatureRequestRemove:");
  console.log(error.body);
});
