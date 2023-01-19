import * as DropboxSign from "@dropbox/sign";
import * as fs from 'fs';

const templateApi = new DropboxSign.TemplateApi();

// Configure HTTP basic authorization: api_key
templateApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// templateApi.accessToken = "YOUR_ACCESS_TOKEN";

const templateId = "5de8179668f2033afac48da1868d0093bf133266";
const fileType = "pdf";

const result = templateApi.templateFiles(templateId, fileType);
result.then(response => {
  fs.createWriteStream('file_response.pdf').write(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
