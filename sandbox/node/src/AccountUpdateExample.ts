import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.AccountApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const accountUpdateRequest: models.AccountUpdateRequest = {
  callbackUrl: "https://www.example.com/callback",
  locale: "en-US",
};

apiCaller.accountUpdate(
  accountUpdateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling AccountApi#accountUpdate:");
  console.log(error.body);
});
