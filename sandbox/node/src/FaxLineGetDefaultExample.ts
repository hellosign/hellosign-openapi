import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxLineApi();

const number = "[FAX_NUMBER]";

apiCaller.faxLineGet(
    number,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling FaxLine#faxLineGet:");
  console.log(error.body);
});
