import * as DropboxSign from "@dropbox/sign";

const faxLineApi = new DropboxSign.FaxLineApi();

// Configure HTTP basic authorization: api_key
faxLineApi.username = "YOUR_API_KEY";

const data: DropboxSign.FaxLineDeleteRequest = {
  number: "[FAX_NUMBER]",
};

const result = faxLineApi.faxLineDelete(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
