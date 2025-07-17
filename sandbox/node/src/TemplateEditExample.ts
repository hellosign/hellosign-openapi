import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TemplateApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const templateEditRequest: models.TemplateEditRequest = {
  ccRoles: [
    "Role 1",
    "Role 2",
  ],
};

apiCaller.templateEdit(
  "f57db65d3f933b5316d398057a36176831451a35", // templateId
  templateEditRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling TemplateApi#templateEdit:");
  console.log(error.body);
});
