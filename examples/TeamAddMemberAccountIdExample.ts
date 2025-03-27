import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const teamAddMemberRequest: models.TeamAddMemberRequest = {
  accountId: "f57db65d3f933b5316d398057a36176831451a35",
};

apiCaller.teamAddMember(
  teamAddMemberRequest,
  "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c", // teamId
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling TeamApi#teamAddMember:");
  console.log(error.body);
});
