import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxLineApi();

const country = "US";
const state = undefined;
const province = undefined;
const city = undefined;

apiCaller.faxLineAreaCodeGet(
    country,
    state,
    province,
    city,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling FaxLine#faxLineAreaCodeGet:");
  console.log(error.body);
});
