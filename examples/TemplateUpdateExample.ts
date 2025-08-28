import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TemplateApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const signerExperience: models.SubSignerExperience = {
  formView: models.SubSignerExperience.FormViewEnum.Disabled,
};

const formFields1: models.SubUpdateFormField = {
  apiId: "uniqueIdHere_1",
  name: "New name 1",
};

const formFields2: models.SubUpdateFormField = {
  apiId: "uniqueIdHere_2",
  name: "New name 2",
};

const formFields = [
  formFields1,
  formFields2,
];

const templateUpdateRequest: models.TemplateUpdateRequest = {
  title: "Test Title",
  subject: "Test Subject",
  message: "Test Message",
  ccRoles: [
    "CC Role 1",
    "CC Role 2",
  ],
  signerExperience: signerExperience,
  formFields: formFields,
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
