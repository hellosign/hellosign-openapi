import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TemplateApi();

const accountId = undefined;
const page = 1;
const pageSize = 20;
const query = undefined;

apiCaller.templateList(
    accountId,
    page,
    pageSize,
    query,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Template#templateList:");
  console.log(error.body);
});
