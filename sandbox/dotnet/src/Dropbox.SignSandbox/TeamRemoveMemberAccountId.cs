using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class TeamRemoveMemberAccountId
{
    public static void Run()
    {
        var config = new Configuration();

        var teamRemoveMemberRequest = new TeamRemoveMemberRequest(
            accountId: "f57db65d3f933b5316d398057a36176831451a35"
        );

        try
        {
            var response = new TeamApi(config).TeamRemoveMember(
                teamRemoveMemberRequest: teamRemoveMemberRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Team#TeamRemoveMember: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
