using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class TeamAddMemberExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var teamAddMemberRequest = new TeamAddMemberRequest(
            emailAddress: "george@example.com"
        );

        try
        {
            var response = new TeamApi(config).TeamAddMember(
                teamAddMemberRequest: teamAddMemberRequest,
                teamId: "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c"
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling TeamApi#TeamAddMember: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
