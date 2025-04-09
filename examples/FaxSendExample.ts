import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxApi();
apiCaller.username = "YOUR_API_KEY";

const faxSendRequest: models.FaxSendRequest = {
  recipient: "16690000001",
  sender: "16690000000",
  testMode: true,
  coverPageTo: "Jill Fax",
  coverPageFrom: "Faxer Faxerson",
  coverPageMessage: "I'm sending you a fax!",
  title: "This is what the fax is about!",
  files: [
    fs.createReadStream("./example_fax.pdf"),
  ],
};

apiCaller.faxSend(
  faxSendRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling FaxApi#faxSend:");
  console.log(error.body);
});
