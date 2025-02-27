import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxLineApi();
apiCaller.username = "YOUR_API_KEY";

apiCaller.faxLineAreaCodeGet(
  "US", // country
  undefined, // state
  undefined, // province
  undefined, // city
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling FaxLineApi#faxLineAreaCodeGet:");
  console.log(error.body);
});
