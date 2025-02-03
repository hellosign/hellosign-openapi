import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.AccountApi();

const accountCreateRequest = new models.AccountCreateRequest();
accountCreateRequest.emailAddress = "newuser@dropboxsign.com";

apiCaller.accountCreate(
    accountCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Account#accountCreate:");
  console.log(error.body);
});
