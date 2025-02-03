using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class ReportCreateDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();

        var reportCreateRequest = new ReportCreateRequest(
            startDate: "09/01/2020",
            endDate: "09/01/2020",
            reportType: [
                ReportCreateRequest.ReportTypeEnum.UserActivity,
                ReportCreateRequest.ReportTypeEnum.DocumentStatus,
            ]
        );

        try
        {
            var response = new ReportApi(config).ReportCreate(
                reportCreateRequest: reportCreateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Report#ReportCreate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
