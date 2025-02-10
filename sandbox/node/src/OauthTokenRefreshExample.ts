import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.OAuthApi();

const oauthTokenRefreshRequest = new models.OAuthTokenRefreshRequest();
oauthTokenRefreshRequest.grantType = "refresh_token";
oauthTokenRefreshRequest.refreshToken = "hNTI2MTFmM2VmZDQxZTZjOWRmZmFjZmVmMGMyNGFjMzI2MGI5YzgzNmE3";

apiCaller.oauthTokenRefresh(
    oauthTokenRefreshRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Oauth#oauthTokenRefresh:");
  console.log(error.body);
});
