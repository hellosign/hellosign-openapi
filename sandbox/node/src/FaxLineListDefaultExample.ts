import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxLineApi();

const accountId = "ab55cd14a97219e36b5ff5fe23f2f9329b0c1e97";
const page = 1;
const pageSize = 20;
const showTeamLines = undefined;

apiCaller.faxLineList(
    accountId,
    page,
    pageSize,
    showTeamLines,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling FaxLine#faxLineList:");
  console.log(error.body);
});
