import * as DropboxSign from "@dropbox/sign";

const faxApi = new DropboxSign.FaxApi();

// Configure HTTP basic authorization: api_key
faxApi.username = "YOUR_API_KEY";

const result = faxApi.deleteFax("[FAX_NUMBER]");

result.catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
