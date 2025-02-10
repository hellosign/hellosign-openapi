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

const apiAppCreateRequest = new models.ApiAppCreateRequest();
apiAppCreateRequest.name = "My Production App";
apiAppCreateRequest.domains = [
    "example.com",
];
apiAppCreateRequest.customLogoFile = fs.createReadStream("CustomLogoFile.png");
apiAppCreateRequest.oauth = oauth;
apiAppCreateRequest.whiteLabelingOptions = whiteLabelingOptions;

apiCaller.apiAppCreate(
    apiAppCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling ApiApp#apiAppCreate:");
  console.log(error.body);
});
