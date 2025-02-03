import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxLineApi();

const faxLineDeleteRequest = new models.FaxLineDeleteRequest();
faxLineDeleteRequest.number = "[FAX_NUMBER]";

apiCaller.faxLineDelete(
    faxLineDeleteRequest,
).catch(error => {
  console.log("Exception when calling FaxLine#faxLineDelete:");
  console.log(error.body);
});
