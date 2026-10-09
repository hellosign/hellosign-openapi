import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.AccountApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const accountSettingsUpdateRequest: models.AccountSettingsUpdateRequest = {
  dateFormat: models.DateFormat.MmDdYyyy,
  requiredSignatureTypes: [
    models.RequiredSignatureType.Draw,
    models.RequiredSignatureType.Type,
  ],
  shouldEnableTamperProof: false,
  unset: ["company"],
};

apiCaller.accountSettingsUpdate(
  accountSettingsUpdateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling AccountApi#accountSettingsUpdate:");
  console.log(error.body);
});
