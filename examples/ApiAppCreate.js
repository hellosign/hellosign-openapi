import * as DropboxSign from "@dropbox/sign";
import * as fs from 'fs';

const apiAppApi = new DropboxSign.ApiAppApi();

// Configure HTTP basic authorization: api_key
apiAppApi.username = "YOUR_API_KEY";

// or, configure Bearer (JWT) authorization: oauth2
// apiAppApi.accessToken = "YOUR_ACCESS_TOKEN";

const oauth = {
  callbackUrl: "https://example.com/oauth",
  scopes: [
    "basic_account_info",
    "request_signature",
  ],
};

const whiteLabelingOptions = {
  primaryButtonColor: "#00b3e6",
  primaryButtonTextColor: "#ffffff",
};

const data = {
  name: "My Production App",
  domains: ["example.com"],
  customLogoFile: fs.createReadStream("CustomLogoFile.png"),
  oauth,
  whiteLabelingOptions,
};

const result = apiAppApi.apiAppCreate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
