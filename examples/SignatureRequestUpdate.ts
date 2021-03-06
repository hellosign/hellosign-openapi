import * as HelloSignSDK
  from "@hellosign/openapi-javascript-sdk";

const api = new HelloSignSDK.SignatureRequestApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// $config->setAccessToken("YOUR_ACCESS_TOKEN");

const data: HelloSignSDK.SignatureRequestUpdateRequest = {
  emailAddress: "john@example.com",
  signatureId: "78caf2a1d01cd39cea2bc1cbb340dac3",
};

const signatureRequestId = "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f";

const result = api.signatureRequestUpdate(signatureRequestId, data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
