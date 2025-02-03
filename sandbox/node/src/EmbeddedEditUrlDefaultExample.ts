import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.EmbeddedApi();

const mergeFields = [
];

const embeddedEditUrlRequest = new models.EmbeddedEditUrlRequest();
embeddedEditUrlRequest.ccRoles = [
    "",
];
embeddedEditUrlRequest.mergeFields = mergeFields;

const templateId = "f57db65d3f933b5316d398057a36176831451a35";

apiCaller.embeddedEditUrl(
    templateId,
    embeddedEditUrlRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Embedded#embeddedEditUrl:");
  console.log(error.body);
});
