import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.BulkSendJobApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const page = 1;
const pageSize = 20;

apiCaller.bulkSendJobList(
    page,
    pageSize,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling BulkSendJob#bulkSendJobList:");
  console.log(error.body);
});
