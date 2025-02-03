using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class AccountCreateDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();

        var accountCreateRequest = new AccountCreateRequest(
            emailAddress: "newuser@dropboxsign.com"
        );

        try
        {
            var response = new AccountApi(config).AccountCreate(
                accountCreateRequest: accountCreateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Account#AccountCreate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
