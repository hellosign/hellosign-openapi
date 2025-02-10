import * as DropboxSign from "@dropbox/sign";

const templateApi = new DropboxSign.TemplateApi();

// Configure HTTP basic authorization: api_key
templateApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// templateApi.accessToken = "YOUR_ACCESS_TOKEN";

const templateId = "5de8179668f2033afac48da1868d0093bf133266";

const result = templateApi.templateFilesAsDataUri(templateId);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
