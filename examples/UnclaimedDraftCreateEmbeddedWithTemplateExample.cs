using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class UnclaimedDraftCreateEmbeddedWithTemplateExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var ccs1 = new SubCC(
            role: "Accounting",
            emailAddress: "accounting@dropboxsign.com"
        );

        var ccs = new List<SubCC>
        {
            ccs1,
        };

        var signers1 = new SubUnclaimedDraftTemplateSigner(
            role: "Client",
            name: "George",
            emailAddress: "george@example.com"
        );

        var signers = new List<SubUnclaimedDraftTemplateSigner>
        {
            signers1,
        };

        var unclaimedDraftCreateEmbeddedWithTemplateRequest = new UnclaimedDraftCreateEmbeddedWithTemplateRequest(
            clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
            requesterEmailAddress: "jack@dropboxsign.com",
            templateIds: [
                "61a832ff0d8423f91d503e76bfbcc750f7417c78",
            ],
            testMode: false,
            ccs: ccs,
            signers: signers
        );

        try
        {
            var response = new UnclaimedDraftApi(config).UnclaimedDraftCreateEmbeddedWithTemplate(
                unclaimedDraftCreateEmbeddedWithTemplateRequest: unclaimedDraftCreateEmbeddedWithTemplateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling UnclaimedDraftApi#UnclaimedDraftCreateEmbeddedWithTemplate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
