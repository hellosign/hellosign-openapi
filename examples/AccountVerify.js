import * as HelloSignSDK
  from "@hellosign/openapi-javascript-sdk";

const api = new HelloSignSDK.AccountApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const data = {
  emailAddress: "some_user@hellosign.com",
};

const result = api.accountVerify(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
