using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class FaxLineRemoveUserExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        var faxLineRemoveUserRequest = new FaxLineRemoveUserRequest(
            number: "[FAX_NUMBER]",
            emailAddress: "member@dropboxsign.com"
        );

        try
        {
            var response = new FaxLineApi(config).FaxLineRemoveUser(
                faxLineRemoveUserRequest: faxLineRemoveUserRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling FaxLineApi#FaxLineRemoveUser: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
