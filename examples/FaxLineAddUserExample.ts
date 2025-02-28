import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxLineApi();
apiCaller.username = "YOUR_API_KEY";

const faxLineAddUserRequest = new models.FaxLineAddUserRequest();
faxLineAddUserRequest.number = "[FAX_NUMBER]";
faxLineAddUserRequest.emailAddress = "member@dropboxsign.com";

apiCaller.faxLineAddUser(
  faxLineAddUserRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling FaxLineApi#faxLineAddUser:");
  console.log(error.body);
});
