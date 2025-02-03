import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxApi();

const faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

apiCaller.faxGet(
    faxId,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Fax#faxGet:");
  console.log(error.body);
});
