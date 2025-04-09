import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.BulkSendJobApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.bulkSendJobList(
  1, // page
  20, // pageSize
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling BulkSendJobApi#bulkSendJobList:");
  console.log(error.body);
});
