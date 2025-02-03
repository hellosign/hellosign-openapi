import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();

const signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

apiCaller.signatureRequestRemove(
    signatureRequestId,
).catch(error => {
  console.log("Exception when calling SignatureRequest#signatureRequestRemove:");
  console.log(error.body);
});
