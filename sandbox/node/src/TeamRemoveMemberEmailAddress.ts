import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();

const teamRemoveMemberRequest = new models.TeamRemoveMemberRequest();
teamRemoveMemberRequest.emailAddress = "teammate@dropboxsign.com";
teamRemoveMemberRequest.newOwnerEmailAddress = "new_teammate@dropboxsign.com";

apiCaller.teamRemoveMember(
    teamRemoveMemberRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Team#teamRemoveMember:");
  console.log(error.body);
});
