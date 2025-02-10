using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class TemplateUpdateFilesDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var templateUpdateFilesRequest = new TemplateUpdateFilesRequest(
            fileUrls: [
                "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
            ]
        );

        try
        {
            var response = new TemplateApi(config).TemplateUpdateFiles(
                templateId: "f57db65d3f933b5316d398057a36176831451a35",
                templateUpdateFilesRequest: templateUpdateFilesRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Template#TemplateUpdateFiles: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
