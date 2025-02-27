using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class TeamRemoveMemberExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var teamRemoveMemberRequest = new TeamRemoveMemberRequest(
            emailAddress: "teammate@dropboxsign.com",
            newOwnerEmailAddress: "new_teammate@dropboxsign.com"
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
            Console.WriteLine("Exception when calling TeamApi#TeamRemoveMember: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
