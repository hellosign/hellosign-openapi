import * as DropboxSign from "@dropbox/sign";

const fs = require('fs');

const templateApi = new DropboxSign.TemplateApi();

// Configure HTTP basic authorization: api_key
templateApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// templateApi.accessToken = "YOUR_ACCESS_TOKEN";

const role1 = {
  name: "Client",
  order: 0,
};

const role2 = {
  name: "Witness",
  order: 1,
};

const mergeField1 = {
  name: "Full Name",
  type: "text",
};

const mergeField2 = {
  name: "Is Registered?",
  type: "checkbox",
};

const fieldOptions = {
  dateFormat: "DD - MM - YYYY",
};

const data = {
  clientId: "37dee8d8440c66d54cfa05d92c160882",
  files: [fs.createReadStream("example_signature_request.pdf")],
  title: "Test Template",
  subject: "Please sign this document",
  message: "For your approval",
  signerRoles: [
    role1,
    role2,
  ],
  ccRoles: ["Manager"],
  mergeFields: [
    mergeField1,
    mergeField2,
  ],
  fieldOptions,
  testMode: true,
};

const result = templateApi.templateCreateEmbedded(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
