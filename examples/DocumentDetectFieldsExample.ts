import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.SignatureRequestApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.documentDetectFields(
  "annotations", // detectionMode
  fs.createReadStream("./example_document.pdf"), // file
  undefined, // fileUrl
  "all", // pageRange
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling SignatureRequestApi#documentDetectFields:");
  console.log(error.body);
});
