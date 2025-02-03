import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();

apiCaller.teamGet().then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Team#teamGet:");
  console.log(error.body);
});
