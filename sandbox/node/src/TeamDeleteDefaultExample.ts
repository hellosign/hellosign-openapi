import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();

apiCaller.teamDelete().catch(error => {
  console.log("Exception when calling Team#teamDelete:");
  console.log(error.body);
});
