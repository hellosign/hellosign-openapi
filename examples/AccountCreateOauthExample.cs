using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class AccountCreateOauthExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var accountCreateRequest = new AccountCreateRequest(
            emailAddress: "newuser@dropboxsign.com",
            clientId: "cc91c61d00f8bb2ece1428035716b",
            clientSecret: "1d14434088507ffa390e6f5528465"
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
            Console.WriteLine("Exception when calling AccountApi#AccountCreate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
