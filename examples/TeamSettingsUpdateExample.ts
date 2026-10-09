import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.TeamApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const teamSettingsUpdateRequest: models.TeamSettingsUpdateRequest = {
  dataResidency: models.DataResidency.Eu,
  company: "Northwind",
  companyLock: models.TeamSettingLock.OrganizationAdmins,
};

apiCaller.teamSettingsUpdate(
  teamSettingsUpdateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling TeamApi#teamSettingsUpdate:");
  console.log(error.body);
});
