import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxLineApi();
apiCaller.username = "YOUR_API_KEY";

apiCaller.faxLineList(
  "ab55cd14a97219e36b5ff5fe23f2f9329b0c1e97", // accountId
  1, // page
  20, // pageSize
  undefined, // showTeamLines
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling FaxLineApi#faxLineList:");
  console.log(error.body);
});
