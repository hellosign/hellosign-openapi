import * as HelloSignSDK from "hellosign-sdk";

const teamApi = new HelloSignSDK.TeamApi();

// Configure HTTP basic authorization: api_key
teamApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// teamApi.accessToken = "YOUR_ACCESS_TOKEN";

const data = {
  emailAddress: "teammate@hellosign.com",
  newOwnerEmailAddress: "new_teammate@hellosign.com",
};

const result = teamApi.teamRemoveMember(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
