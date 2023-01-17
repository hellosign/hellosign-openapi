import * as DropboxSign from "@dropbox/sign";

const fs = require('fs');

const apiAppApi = new DropboxSign.ApiAppApi();

// Configure HTTP basic authorization: api_key
apiAppApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// apiAppApi.accessToken = "YOUR_ACCESS_TOKEN";

const whiteLabelingOptions = {
  primaryButtonColor: "#00b3e6",
  primaryButtonTextColor: "#ffffff",
};

const data = {
  name: "New Name",
  callbackUrl: "http://example.com/dropboxsign",
  customLogoFile: fs.createReadStream("CustomLogoFile.png"),
  whiteLabelingOptions,
};

const clientId = "0dd3b823a682527788c4e40cb7b6f7e9";

const result = apiAppApi.apiAppUpdate(clientId, data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
