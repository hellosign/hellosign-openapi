using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class AccountVerifyDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();

        var accountVerifyRequest = new AccountVerifyRequest(
            emailAddress: "some_user@dropboxsign.com"
        );

        try
        {
            var response = new AccountApi(config).AccountVerify(
                accountVerifyRequest: accountVerifyRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Account#AccountVerify: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
