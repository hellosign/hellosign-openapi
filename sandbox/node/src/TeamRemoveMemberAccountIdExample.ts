import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const teamRemoveMemberRequest: models.TeamRemoveMemberRequest = {
  accountId: "f57db65d3f933b5316d398057a36176831451a35",
};

apiCaller.teamRemoveMember(
  teamRemoveMemberRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling TeamApi#teamRemoveMember:");
  console.log(error.body);
});
