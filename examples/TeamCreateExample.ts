import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const teamCreateRequest: models.TeamCreateRequest = {
  name: "New Team Name",
};

apiCaller.teamCreate(
  teamCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling TeamApi#teamCreate:");
  console.log(error.body);
});
