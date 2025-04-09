import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.ReportApi();
apiCaller.username = "YOUR_API_KEY";

const reportCreateRequest: models.ReportCreateRequest = {
  startDate: "09/01/2020",
  endDate: "09/01/2020",
  reportType: [
    models.ReportCreateRequest.ReportTypeEnum.UserActivity,
    models.ReportCreateRequest.ReportTypeEnum.DocumentStatus,
  ],
};

apiCaller.reportCreate(
  reportCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling ReportApi#reportCreate:");
  console.log(error.body);
});
