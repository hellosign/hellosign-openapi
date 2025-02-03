import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.ApiAppApi();

const clientId = "0dd3b823a682527788c4e40cb7b6f7e9";

apiCaller.apiAppDelete(
    clientId,
).catch(error => {
  console.log("Exception when calling ApiApp#apiAppDelete:");
  console.log(error.body);
});
