import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();

const emailAddress = undefined;

apiCaller.teamInvites(
    emailAddress,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Team#teamInvites:");
  console.log(error.body);
});
