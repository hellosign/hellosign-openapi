using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class UnclaimedDraftEditAndResendExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var unclaimedDraftEditAndResendRequest = new UnclaimedDraftEditAndResendRequest(
            clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
            testMode: false
        );

        try
        {
            var response = new UnclaimedDraftApi(config).UnclaimedDraftEditAndResend(
                signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
                unclaimedDraftEditAndResendRequest: unclaimedDraftEditAndResendRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling UnclaimedDraftApi#UnclaimedDraftEditAndResend: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
