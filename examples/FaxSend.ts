import * as DropboxSign from "@dropbox/sign";

const faxApi = new DropboxSign.FaxApi();

// Configure HTTP basic authorization: api_key
faxApi.username = "YOUR_API_KEY";

const data: DropboxSign.FaxCreateRequest = {
  areaCode: 209,
  country: "US",
};

const result = faxApi.faxCreate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
