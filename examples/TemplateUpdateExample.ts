import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TemplateApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const templateUpdateRequest: models.TemplateUpdateRequest = {
  allowFormView: false,
  title: "Test Title",
  subject: "Test Subject",
  message: "Test Message",
  ccRoles: [
    "CC Role 1",
    "CC Role 2",
  ],
};

apiCaller.templateUpdate(
  "f57db65d3f933b5316d398057a36176831451a35", // templateId
  templateUpdateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling TemplateApi#templateUpdate:");
  console.log(error.body);
});
