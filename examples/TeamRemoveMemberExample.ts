import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

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
