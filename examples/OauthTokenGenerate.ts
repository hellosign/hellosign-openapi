import * as DropboxSign from "@dropbox/sign";

const oAuthApi = new DropboxSign.OAuthApi();

const data = new DropboxSign.OAuthTokenGenerateRequest();
data.state = "900e06e2";
data.code = "1b0d28d90c86c141";
data.clientId = "cc91c61d00f8bb2ece1428035716b";
data.clientSecret = "1d14434088507ffa390e6f5528465";

const result = oAuthApi.oauthTokenGenerate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
