using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class TemplateDeleteDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        try
        {
            new TemplateApi(config).TemplateDelete(
                templateId: "f57db65d3f933b5316d398057a36176831451a35"
            );
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Template#TemplateDelete: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
