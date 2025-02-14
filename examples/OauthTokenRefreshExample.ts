import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.OAuthApi();

const oAuthTokenRefreshRequest = new models.OAuthTokenRefreshRequest();
oAuthTokenRefreshRequest.grantType = "refresh_token";
oAuthTokenRefreshRequest.refreshToken = "hNTI2MTFmM2VmZDQxZTZjOWRmZmFjZmVmMGMyNGFjMzI2MGI5YzgzNmE3";

apiCaller.oauthTokenRefresh(
    oAuthTokenRefreshRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling OAuth#oauthTokenRefresh:");
  console.log(error.body);
});
