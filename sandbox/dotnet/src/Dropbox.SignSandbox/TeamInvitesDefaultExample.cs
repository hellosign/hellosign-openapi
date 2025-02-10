using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class TeamInvitesDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        try
        {
            var response = new TeamApi(config).TeamInvites();

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Team#TeamInvites: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
