import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.AccountApi();

const accountCreateRequest = new models.AccountCreateRequest();
accountCreateRequest.emailAddress = "newuser@dropboxsign.com";
accountCreateRequest.clientId = "cc91c61d00f8bb2ece1428035716b";
accountCreateRequest.clientSecret = "1d14434088507ffa390e6f5528465";

apiCaller.accountCreate(
    accountCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Account#accountCreate:");
  console.log(error.body);
});
