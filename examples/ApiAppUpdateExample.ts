import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.ApiAppApi();
apiCaller.username = "YOUR_API_KEY";
// apiCaller.accessToken = "YOUR_ACCESS_TOKEN";

const oauth = new models.SubOAuth();
oauth.callbackUrl = "https://example.com/oauth";
oauth.scopes = [
    models.SubOAuth.ScopesEnum.BasicAccountInfo,
    models.SubOAuth.ScopesEnum.RequestSignature,
];

const whiteLabelingOptions = new models.SubWhiteLabelingOptions();
whiteLabelingOptions.primaryButtonColor = "#00b3e6";
whiteLabelingOptions.primaryButtonTextColor = "#ffffff";

const apiAppUpdateRequest = new models.ApiAppUpdateRequest();
apiAppUpdateRequest.callbackUrl = "https://example.com/dropboxsign";
apiAppUpdateRequest.name = "New Name";
apiAppUpdateRequest.domains = [
    "example.com",
];
apiAppUpdateRequest.customLogoFile = fs.createReadStream("CustomLogoFile.png");
apiAppUpdateRequest.oauth = oauth;
apiAppUpdateRequest.whiteLabelingOptions = whiteLabelingOptions;

const clientId = "0dd3b823a682527788c4e40cb7b6f7e9";

apiCaller.apiAppUpdate(
    clientId,
    apiAppUpdateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling ApiApp#apiAppUpdate:");
  console.log(error.body);
});
