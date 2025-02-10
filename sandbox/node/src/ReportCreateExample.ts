import * as fs from 'fs';
import api from "@dropbox/sign"
import models from "@dropbox/sign"

const apiCaller = new api.ReportApi();
apiCaller.username = "YOUR_API_KEY";

const reportCreateRequest = new models.ReportCreateRequest();
reportCreateRequest.startDate = "09/01/2020";
reportCreateRequest.endDate = "09/01/2020";
reportCreateRequest.reportType = [
    models.ReportCreateRequest.ReportTypeEnum.UserActivity,
    models.ReportCreateRequest.ReportTypeEnum.DocumentStatus,
];

apiCaller.reportCreate(
    reportCreateRequest,
).then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Report#reportCreate:");
  console.log(error.body);
});
