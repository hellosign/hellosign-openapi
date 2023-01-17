import * as DropboxSign from "@dropbox/sign";

const oAuthApi = new DropboxSign.OAuthApi();

// Configure HTTP basic authorization: api_key
oAuthApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// oAuthApi.accessToken = "YOUR_ACCESS_TOKEN";

const data = new DropboxSign.OAuthTokenRefreshRequest();
data.refreshToken = "hNTI2MTFmM2VmZDQxZTZjOWRmZmFjZmVmMGMyNGFjMzI2MGI5YzgzNmE3";

const result = oAuthApi.oauthTokenRefresh(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
