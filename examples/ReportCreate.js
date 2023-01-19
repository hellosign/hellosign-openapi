import * as DropboxSign from "@dropbox/sign";

const reportApi = new DropboxSign.ReportApi();

// Configure HTTP basic authorization: api_key
reportApi.username = "YOUR_API_KEY";

const data = {
  startDate: "09/01/2020",
  endDate: "09/01/2020",
  reportType: [
    "user_activity",
    "document_status",
  ]
};

const result = reportApi.reportCreate(data);
result.then(response => {
  console.log(response.body);
}).catch(error => {
  console.log("Exception when calling Dropbox Sign API:");
  console.log(error.body);
});
