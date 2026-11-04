import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.ApiKeyApi();
apiCaller.username = "YOUR_API_KEY";

apiCaller.apiKeyDelete(
  "c3d4e5f6a7b8490c1d2e3f4a5b6c7d8e", // apiKeyId
).catch(error => {
  console.log("Exception when calling ApiKeyApi#apiKeyDelete:");
  console.log(error.body);
});
