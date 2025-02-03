using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class TeamCreateDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();

        var teamCreateRequest = new TeamCreateRequest(
            name: "New Team Name"
        );

        try
        {
            var response = new TeamApi(config).TeamCreate(
                teamCreateRequest: teamCreateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Team#TeamCreate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
