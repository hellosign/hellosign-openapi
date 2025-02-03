import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.AccountApi();

const accountId = undefined;
const emailAddress = undefined;

apiCaller.accountGet(
    accountId,
    emailAddress,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Account#accountGet:");
  console.log(error.body);
});
