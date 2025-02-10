import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.BulkSendJobApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const bulkSendJobId = "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174";
const page = 1;
const pageSize = 20;

apiCaller.bulkSendJobGet(
    bulkSendJobId,
    page,
    pageSize,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling BulkSendJob#bulkSendJobGet:");
  console.log(error.body);
});
