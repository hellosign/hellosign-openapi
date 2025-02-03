import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();

const teamAddMemberRequest = new models.TeamAddMemberRequest();
teamAddMemberRequest.emailAddress = "george@example.com";

const teamId = "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c";

apiCaller.teamAddMember(
    teamAddMemberRequest,
    teamId,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Team#teamAddMember:");
  console.log(error.body);
});
