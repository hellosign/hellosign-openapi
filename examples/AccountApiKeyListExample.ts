import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.ApiKeyApi();
apiCaller.username = "YOUR_API_KEY";

apiCaller.apiKeyList().then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling ApiKeyApi#apiKeyList:");
  console.log(error.body);
});
