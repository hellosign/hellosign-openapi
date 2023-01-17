import * as DropboxSign from "@dropbox/sign";

const embeddedApi = new DropboxSign.EmbeddedApi();

// Configure HTTP basic authorization: api_key
embeddedApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// embeddedApi.accessToken = "YOUR_ACCESS_TOKEN";

const data = {
  ccRoles: [""],
  mergeFields: [],
};

const templateId = "5de8179668f2033afac48da1868d0093bf133266";

const result = embeddedApi.embeddedEditUrl(templateId, data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
