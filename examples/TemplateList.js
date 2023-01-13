import * as HelloSign from "hellosign-sdk";

const templateApi = new HelloSign.TemplateApi();

// Configure HTTP basic authorization: api_key
templateApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// templateApi.accessToken = "YOUR_ACCESS_TOKEN";

const accountId = "f57db65d3f933b5316d398057a36176831451a35";

const result = templateApi.templateList(accountId);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
