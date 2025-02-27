import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.EmbeddedApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.embeddedSignUrl(
  "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b", // signatureId
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling EmbeddedApi#embeddedSignUrl:");
  console.log(error.body);
});
