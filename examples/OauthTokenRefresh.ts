import * as DropboxSign from "@dropbox/sign";

const oAuthApi = new DropboxSign.OAuthApi();

const data = new DropboxSign.OAuthTokenRefreshRequest();
data.refreshToken = "hNTI2MTFmM2VmZDQxZTZjOWRmZmFjZmVmMGMyNGFjMzI2MGI5YzgzNmE3";

const result = oAuthApi.oauthTokenRefresh(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
