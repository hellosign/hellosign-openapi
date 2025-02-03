import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();

const teamUpdateRequest = new models.TeamUpdateRequest();
teamUpdateRequest.name = "New Team Name";

apiCaller.teamUpdate(
    teamUpdateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Team#teamUpdate:");
  console.log(error.body);
});
