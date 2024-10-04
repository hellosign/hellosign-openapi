import * as DropboxSign from "@dropbox/sign";
import * as fs from 'fs';

const faxApi = new DropboxSign.FaxApi();

// Configure HTTP basic authorization: api_key
faxApi.username = "YOUR_API_KEY";

const faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

const result = faxApi.faxFiles(faxId);
result.then(response => {
  fs.createWriteStream('file_response.pdf').write(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
