import * as DropboxSign from "@dropbox/sign";

const faxApi = new DropboxSign.FaxApi();

// Configure HTTP basic authorization: api_key
faxApi.username = "YOUR_API_KEY";

const result = faxApi.faxDelete("fa5c8a0b0f492d768749333ad6fcc214c111e967");

result.catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});