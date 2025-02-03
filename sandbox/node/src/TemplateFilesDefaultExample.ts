import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TemplateApi();

const templateId = "f57db65d3f933b5316d398057a36176831451a35";
const fileType = undefined;

apiCaller.templateFiles(
    templateId,
    fileType,
).then(response => {
  fs.createWriteStream('file_response.zip').write(response.body);
}).catch(error => {
  console.log("Exception when calling Template#templateFiles:");
  console.log(error.body);
});
