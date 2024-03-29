import * as DropboxSign from "@dropbox/sign";

const api = new DropboxSign.AccountApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// api.accessToken = "YOUR_ACCESS_TOKEN";

const data: DropboxSign.AccountCreateRequest = {
  emailAddress: "newuser@dropboxsign.com",
};

const result = api.accountCreate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
