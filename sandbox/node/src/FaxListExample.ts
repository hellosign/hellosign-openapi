import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxApi();
apiCaller.username = "YOUR_API_KEY";

const page = 1;
const pageSize = 20;

apiCaller.faxList(
    page,
    pageSize,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Fax#faxList:");
  console.log(error.body);
});
