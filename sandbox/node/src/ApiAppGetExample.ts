import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.ApiAppApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

apiCaller.apiAppGet(
  "0dd3b823a682527788c4e40cb7b6f7e9", // clientId
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling ApiAppApi#apiAppGet:");
  console.log(error.body);
});
