import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.AccountApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const accountSettingsUpdateRequest: models.AccountSettingsUpdateRequest = {
  set: {
    date_format: models.DateFormat.MmDdYyyy,
    required_signature_types: [
      models.RequiredSignatureType.Draw,
      models.RequiredSignatureType.Type,
    ],
    should_enable_tamper_proof: false,
  },
  unset: new Set(["company"]),
};

apiCaller.accountSettingsUpdate(
  accountSettingsUpdateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling AccountApi#accountSettingsUpdate:");
  console.log(error.body);
});
