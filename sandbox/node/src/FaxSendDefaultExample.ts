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
faxSendRequest.fileUrls = [
    "https://api.hellosign.com/v3/fax/files/2b388914e3ae3b738bd4e2ee2850c677e6dc53d2",
];

apiCaller.faxSend(
    faxSendRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Fax#faxSend:");
  console.log(error.body);
});
