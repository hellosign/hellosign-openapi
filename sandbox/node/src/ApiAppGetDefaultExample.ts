import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.ApiAppApi();

const clientId = "0dd3b823a682527788c4e40cb7b6f7e9";

apiCaller.apiAppGet(
    clientId,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling ApiApp#apiAppGet:");
  console.log(error.body);
});
