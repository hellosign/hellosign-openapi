import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.ApiKeyApi();
apiCaller.username = "YOUR_API_KEY";

const request: models.AccountApiKeyUpdateRequest = {
  name: "Billing",
  isPrimary: true,
};

apiCaller.apiKeyUpdate(
  "c3d4e5f6a7b8490c1d2e3f4a5b6c7d8e9f012345", // apiKeyId
  request,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling ApiKeyApi#apiKeyUpdate:");
  console.log(error.body);
});
