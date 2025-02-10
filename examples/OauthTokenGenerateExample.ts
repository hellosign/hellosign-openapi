import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.OAuthApi();

const oauthTokenGenerateRequest = new models.OAuthTokenGenerateRequest();
oauthTokenGenerateRequest.clientId = "cc91c61d00f8bb2ece1428035716b";
oauthTokenGenerateRequest.clientSecret = "1d14434088507ffa390e6f5528465";
oauthTokenGenerateRequest.code = "1b0d28d90c86c141";
oauthTokenGenerateRequest.state = "900e06e2";
oauthTokenGenerateRequest.grantType = "authorization_code";

apiCaller.oauthTokenGenerate(
    oauthTokenGenerateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Oauth#oauthTokenGenerate:");
  console.log(error.body);
});
