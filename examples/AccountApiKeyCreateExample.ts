import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.ApiKeyApi();
apiCaller.username = "YOUR_API_KEY";

const request: models.AccountApiKeyCreateRequest = {
  name: "Production",
};

apiCaller.apiKeyCreate(
  request,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling ApiKeyApi#apiKeyCreate:");
  console.log(error.body);
});
