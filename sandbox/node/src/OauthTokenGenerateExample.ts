import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.OAuthApi();

const oAuthTokenGenerateRequest: models.OAuthTokenGenerateRequest = {
  clientId: "cc91c61d00f8bb2ece1428035716b",
  clientSecret: "1d14434088507ffa390e6f5528465",
  code: "1b0d28d90c86c141",
  state: "900e06e2",
  grantType: "authorization_code",
};

apiCaller.oauthTokenGenerate(
  oAuthTokenGenerateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling OAuthApi#oauthTokenGenerate:");
  console.log(error.body);
});
