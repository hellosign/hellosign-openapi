import * as DropboxSign from "@dropbox/sign";

const templateApi = new DropboxSign.TemplateApi();

// Configure HTTP basic authorization: api_key
templateApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// templateApi.accessToken = "YOUR_ACCESS_TOKEN";

const data = {
  emailAddress: "george@dropboxsign.com",
};

const templateId = "21f920ec2b7f4b6bb64d3ed79f26303843046536";

const result = templateApi.templateRemoveUser(templateId, data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
