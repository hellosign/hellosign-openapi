import * as HelloSign from "hellosign-sdk";

const reportApi = new HelloSign.ReportApi();

// Configure HTTP basic authorization: api_key
reportApi.username = "YOUR_API_KEY";

const data: HelloSign.ReportCreateRequest = {
  startDate: "09/01/2020",
  endDate: "09/01/2020",
  reportType: [
    HelloSign.ReportCreateRequest.ReportTypeEnum.UserActivity,
    HelloSign.ReportCreateRequest.ReportTypeEnum.DocumentStatus,
  ]
};

const result = reportApi.reportCreate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
