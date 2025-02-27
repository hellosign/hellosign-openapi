import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxApi();
apiCaller.username = "YOUR_API_KEY";

apiCaller.faxGet(
  "fa5c8a0b0f492d768749333ad6fcc214c111e967", // faxId
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling FaxApi#faxGet:");
  console.log(error.body);
});
