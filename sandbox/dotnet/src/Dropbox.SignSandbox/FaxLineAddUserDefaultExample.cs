using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class FaxLineAddUserDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();

        var faxLineAddUserRequest = new FaxLineAddUserRequest(
            number: "[FAX_NUMBER]",
            emailAddress: "member@dropboxsign.com"
        );

        try
        {
            var response = new FaxLineApi(config).FaxLineAddUser(
                faxLineAddUserRequest: faxLineAddUserRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling FaxLine#FaxLineAddUser: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
