using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class TemplateRemoveUserExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var templateRemoveUserRequest = new TemplateRemoveUserRequest(
            emailAddress: "george@dropboxsign.com"
        );

        try
        {
            var response = new TemplateApi(config).TemplateRemoveUser(
                templateId: "f57db65d3f933b5316d398057a36176831451a35",
                templateRemoveUserRequest: templateRemoveUserRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling TemplateApi#TemplateRemoveUser: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
