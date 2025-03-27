import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxLineApi();
apiCaller.username = "YOUR_API_KEY";

const faxLineDeleteRequest: models.FaxLineDeleteRequest = {
  number: "[FAX_NUMBER]",
};

apiCaller.faxLineDelete(
  faxLineDeleteRequest,
).catch(error => {
  console.log("Exception when calling FaxLineApi#faxLineDelete:");
  console.log(error.body);
});
