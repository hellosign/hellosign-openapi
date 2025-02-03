import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.EmbeddedApi();

const signatureId = "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b";

apiCaller.embeddedSignUrl(
    signatureId,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Embedded#embeddedSignUrl:");
  console.log(error.body);
});
