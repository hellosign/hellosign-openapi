import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.FaxLineApi();
apiCaller.username = "YOUR_API_KEY";

const faxLineCreateRequest: models.FaxLineCreateRequest = {
  areaCode: 209,
  country: models.FaxLineCreateRequest.CountryEnum.Us,
};

apiCaller.faxLineCreate(
  faxLineCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling FaxLineApi#faxLineCreate:");
  console.log(error.body);
});
