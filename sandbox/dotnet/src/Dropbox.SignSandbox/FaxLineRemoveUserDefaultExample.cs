using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class FaxLineRemoveUserDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();

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
            Console.WriteLine("Exception when calling FaxLine#FaxLineRemoveUser: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
