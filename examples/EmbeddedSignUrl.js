import * as HelloSignSDK from "hellosign-sdk";

const embeddedApi = new HelloSignSDK.EmbeddedApi();

// Configure HTTP basic authorization: api_key
embeddedApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// embeddedApi.accessToken = "YOUR_ACCESS_TOKEN";

const signatureId = "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b";

const result = embeddedApi.embeddedSignUrl(signatureId);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
