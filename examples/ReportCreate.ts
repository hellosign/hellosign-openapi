import * as HelloSignSDK
  from "@hellosign/openapi-javascript-sdk";

const api = new HelloSignSDK.ReportApi();

// Configure HTTP basic authorization: api_key
api.username = "YOUR_API_KEY";

const data: HelloSignSDK.ReportCreateRequest = {
  startDate: "09/01/2020",
  endDate: "09/01/2020",
  reportType: [
    HelloSignSDK.ReportCreateRequest.ReportTypeEnum.UserActivity,
    HelloSignSDK.ReportCreateRequest.ReportTypeEnum.DocumentStatus,
  ]
};

const result = api.reportCreate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling HelloSign API:");
  console.log(error.body);
});
