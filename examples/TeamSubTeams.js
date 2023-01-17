import * as DropboxSign from "@dropbox/sign";

const teamApi = new DropboxSign.TeamApi();

// Configure HTTP basic authorization: api_key
teamApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// teamApi.accessToken = "YOUR_ACCESS_TOKEN";

const teamId = "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c";

const result = teamApi.teamSubTeams(teamId);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
