import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.EmbeddedApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const mergeFields = [
];

const embeddedEditUrlRequest: models.EmbeddedEditUrlRequest = {
  ccRoles: [
    "",
  ],
  mergeFields: mergeFields,
};

apiCaller.embeddedEditUrl(
  "f57db65d3f933b5316d398057a36176831451a35", // templateId
  embeddedEditUrlRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling EmbeddedApi#embeddedEditUrl:");
  console.log(error.body);
});
