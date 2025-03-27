import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.AccountApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const accountCreateRequest: models.AccountCreateRequest = {
  emailAddress: "newuser@dropboxsign.com",
};

apiCaller.accountCreate(
  accountCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling AccountApi#accountCreate:");
  console.log(error.body);
});
