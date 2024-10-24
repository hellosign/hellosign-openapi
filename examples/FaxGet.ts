import * as DropboxSign from "@dropbox/sign";

const faxApi = new DropboxSign.ApiAppApi();

// Configure HTTP basic authorization: api_key
faxApi.username = "YOUR_API_KEY";

const faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967"

const result = faxApi.faxGet(faxId);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
