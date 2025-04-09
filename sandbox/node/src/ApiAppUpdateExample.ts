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

const apiAppUpdateRequest: models.ApiAppUpdateRequest = {
  callbackUrl: "https://example.com/dropboxsign",
  name: "New Name",
  domains: [
    "example.com",
  ],
  customLogoFile: fs.createReadStream("CustomLogoFile.png"),
  oauth: oauth,
  whiteLabelingOptions: whiteLabelingOptions,
};

apiCaller.apiAppUpdate(
  "0dd3b823a682527788c4e40cb7b6f7e9", // clientId
  apiAppUpdateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling ApiAppApi#apiAppUpdate:");
  console.log(error.body);
});
