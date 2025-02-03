using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class TeamMembersDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();

        try
        {
            var response = new TeamApi(config).TeamMembers(
                teamId: "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c",
                page: 1,
                pageSize: 20
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Team#TeamMembers: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
