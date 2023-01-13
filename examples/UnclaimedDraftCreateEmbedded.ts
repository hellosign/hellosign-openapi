import * as HelloSign from "hellosign-sdk";

const fs = require('fs');

const unclaimedDraftApi = new HelloSign.UnclaimedDraftApi();

// Configure HTTP basic authorization: api_key
unclaimedDraftApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// unclaimedDraftApi.accessToken = "YOUR_ACCESS_TOKEN";

const data: HelloSign.UnclaimedDraftCreateEmbeddedRequest = {
  clientId: "ec64a202072370a737edf4a0eb7f4437",
  files: [fs.createReadStream("example_signature_request.pdf")],
  requesterEmailAddress: "jack@hellosign.com",
  testMode: true,
};

const result = unclaimedDraftApi.unclaimedDraftCreateEmbedded(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
