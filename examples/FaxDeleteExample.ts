import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxApi();
apiCaller.username = "YOUR_API_KEY";

const faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

apiCaller.faxDelete(
    faxId,
).catch(error => {
  console.log("Exception when calling Fax#faxDelete:");
  console.log(error.body);
});
