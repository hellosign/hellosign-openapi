import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TemplateApi();

const templateAddUserRequest = new models.TemplateAddUserRequest();
templateAddUserRequest.emailAddress = "george@dropboxsign.com";

const templateId = "f57db65d3f933b5316d398057a36176831451a35";

apiCaller.templateAddUser(
    templateId,
    templateAddUserRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Template#templateAddUser:");
  console.log(error.body);
});
