import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxApi();
apiCaller.username = "YOUR_API_KEY";

const faxSendRequest = new models.FaxSendRequest();
faxSendRequest.recipient = "16690000001";
faxSendRequest.sender = "16690000000";
faxSendRequest.testMode = true;
faxSendRequest.coverPageTo = "Jill Fax";
faxSendRequest.coverPageFrom = "Faxer Faxerson";
faxSendRequest.coverPageMessage = "I'm sending you a fax!";
faxSendRequest.title = "This is what the fax is about!";
faxSendRequest.files = [
  fs.createReadStream("./example_fax.pdf"),
];

apiCaller.faxSend(
  faxSendRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling FaxApi#faxSend:");
  console.log(error.body);
});
