import * as HelloSignSDK from "hellosign-sdk";

const fs = require('fs');

const templateApi = new HelloSignSDK.TemplateApi();

// Configure HTTP basic authorization: api_key
templateApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// templateApi.accessToken = "YOUR_ACCESS_TOKEN";

const data: HelloSignSDK.TemplateUpdateFilesRequest = {
  files: [fs.createReadStream("example_signature_request.pdf")],
};

const templateId = "5de8179668f2033afac48da1868d0093bf133266";

const result = templateApi.templateUpdateFiles(templateId, data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
