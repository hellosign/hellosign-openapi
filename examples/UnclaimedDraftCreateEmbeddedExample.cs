using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class UnclaimedDraftCreateEmbeddedExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var unclaimedDraftCreateEmbeddedRequest = new UnclaimedDraftCreateEmbeddedRequest(
            clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
            requesterEmailAddress: "jack@dropboxsign.com",
            testMode: true,
            files: new List<Stream>
            {
                new FileStream(
                    path: "./example_signature_request.pdf",
                    mode: FileMode.Open
                ),
            }
        );

        try
        {
            var response = new UnclaimedDraftApi(config).UnclaimedDraftCreateEmbedded(
                unclaimedDraftCreateEmbeddedRequest: unclaimedDraftCreateEmbeddedRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling UnclaimedDraftApi#UnclaimedDraftCreateEmbedded: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
