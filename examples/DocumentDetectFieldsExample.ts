import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.DocumentApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const documentFieldDetectionRequest: models.DocumentFieldDetectionRequest = {
  detectionMode: "annotations",
  file: fs.createReadStream("./example_document.pdf"),
  pageRange: "all",
};

apiCaller.documentDetectFields(
  documentFieldDetectionRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling DocumentApi#documentDetectFields:");
  console.log(error.body);
});
