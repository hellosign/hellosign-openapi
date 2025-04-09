import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxLineApi();
apiCaller.username = "YOUR_API_KEY";

const faxLineRemoveUserRequest: models.FaxLineRemoveUserRequest = {
  number: "[FAX_NUMBER]",
  emailAddress: "member@dropboxsign.com",
};

apiCaller.faxLineRemoveUser(
  faxLineRemoveUserRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling FaxLineApi#faxLineRemoveUser:");
  console.log(error.body);
});
