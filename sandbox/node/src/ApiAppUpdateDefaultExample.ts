import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.ApiAppApi();

const whiteLabelingOptions = new models.SubWhiteLabelingOptions();
whiteLabelingOptions.primaryButtonColor = "#00b3e6";
whiteLabelingOptions.primaryButtonTextColor = "#ffffff";

const apiAppUpdateRequest = new models.ApiAppUpdateRequest();
apiAppUpdateRequest.callbackUrl = "https://example.com/dropboxsign";
apiAppUpdateRequest.name = "New Name";
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
