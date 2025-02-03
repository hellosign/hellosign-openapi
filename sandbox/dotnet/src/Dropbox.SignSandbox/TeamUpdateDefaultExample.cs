using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class TeamUpdateDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();

        var teamUpdateRequest = new TeamUpdateRequest(
            name: "New Team Name"
        );

        try
        {
            var response = new TeamApi(config).TeamUpdate(
                teamUpdateRequest: teamUpdateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Team#TeamUpdate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
