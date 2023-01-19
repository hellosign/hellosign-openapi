import * as DropboxSign from "@dropbox/sign";

const embeddedApi = new DropboxSign.EmbeddedApi();

// Configure HTTP basic authorization: api_key
embeddedApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// embeddedApi.accessToken = "YOUR_ACCESS_TOKEN";

const signatureId = "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b";

const result = embeddedApi.embeddedSignUrl(signatureId);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
