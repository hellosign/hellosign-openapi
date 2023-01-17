import * as DropboxSign from "@dropbox/sign";

const teamApi = new DropboxSign.TeamApi();

// Configure HTTP basic authorization: api_key
teamApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// teamApi.accessToken = "YOUR_ACCESS_TOKEN";

const data = {
  emailAddress: "teammate@dropboxsign.com",
  newOwnerEmailAddress: "new_teammate@dropboxsign.com",
};

const result = teamApi.teamRemoveMember(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
