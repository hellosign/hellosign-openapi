import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const teamUpdateRequest: models.TeamUpdateRequest = {
  name: "New Team Name",
};

apiCaller.teamUpdate(
  teamUpdateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling TeamApi#teamUpdate:");
  console.log(error.body);
});
