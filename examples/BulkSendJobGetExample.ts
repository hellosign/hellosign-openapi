import * as DropboxSign from "@dropbox/sign";

const bulkSendJobApi = new DropboxSign.BulkSendJobApi();

// Configure HTTP basic authorization: api_key
bulkSendJobApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// bulkSendJobApi.accessToken = "YOUR_ACCESS_TOKEN";

const bulkSendJobId = "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174";

const result = bulkSendJobApi.bulkSendJobGet(bulkSendJobId);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
