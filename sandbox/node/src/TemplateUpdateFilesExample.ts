import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TemplateApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const templateUpdateFilesRequest: models.TemplateUpdateFilesRequest = {
  files: [
    fs.createReadStream("./example_signature_request.pdf"),
  ],
};

apiCaller.templateUpdateFiles(
  "f57db65d3f933b5316d398057a36176831451a35", // templateId
  templateUpdateFilesRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling TemplateApi#templateUpdateFiles:");
  console.log(error.body);
});
