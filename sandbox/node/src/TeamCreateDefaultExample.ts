import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();

const teamCreateRequest = new models.TeamCreateRequest();
teamCreateRequest.name = "New Team Name";

apiCaller.teamCreate(
    teamCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Team#teamCreate:");
  console.log(error.body);
});
