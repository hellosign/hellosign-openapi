import * as HelloSign from "hellosign-sdk";

const fs = require('fs');

const templateApi = new HelloSign.TemplateApi();

// Configure HTTP basic authorization: api_key
templateApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// templateApi.accessToken = "YOUR_ACCESS_TOKEN";

const role1: HelloSign.SubTemplateRole = {
  name: "Client",
  order: 0,
};

const role2: HelloSign.SubTemplateRole = {
  name: "Witness",
  order: 1,
};

const mergeField1: HelloSign.SubMergeField = {
  name: "Full Name",
  type: HelloSign.SubMergeField.TypeEnum.Text,
};

const mergeField2: HelloSign.SubMergeField = {
  name: "Is Registered?",
  type: HelloSign.SubMergeField.TypeEnum.Checkbox,
};

const fieldOptions: HelloSign.SubFieldOptions = {
  dateFormat: HelloSign.SubFieldOptions.DateFormatEnum.DD_MM_YYYY,
};

const data: HelloSign.TemplateCreateEmbeddedDraftRequest = {
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

const result = templateApi.templateCreateEmbeddedDraft(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
