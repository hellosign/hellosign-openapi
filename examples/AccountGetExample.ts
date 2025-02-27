import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.AccountApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.accountGet().then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling AccountApi#accountGet:");
  console.log(error.body);
});
