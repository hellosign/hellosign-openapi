import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.ApiAppApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const oauth: models.SubOAuth = {
  callbackUrl: "https://example.com/oauth",
  scopes: [
    models.SubOAuth.ScopesEnum.BasicAccountInfo,
    models.SubOAuth.ScopesEnum.RequestSignature,
  ],
};

const whiteLabelingOptions: models.SubWhiteLabelingOptions = {
  primaryButtonColor: "#00b3e6",
  primaryButtonTextColor: "#ffffff",
};

const apiAppCreateRequest: models.ApiAppCreateRequest = {
  name: "My Production App",
  domains: [
    "example.com",
  ],
  customLogoFile: fs.createReadStream("CustomLogoFile.png"),
  oauth: oauth,
  whiteLabelingOptions: whiteLabelingOptions,
};

apiCaller.apiAppCreate(
  apiAppCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling ApiAppApi#apiAppCreate:");
  console.log(error.body);
});
