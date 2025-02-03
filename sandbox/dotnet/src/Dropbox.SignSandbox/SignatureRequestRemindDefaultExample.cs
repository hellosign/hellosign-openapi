using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class SignatureRequestRemindDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();

        var signatureRequestRemindRequest = new SignatureRequestRemindRequest(
            emailAddress: "john@example.com"
        );

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestRemind(
                signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
                signatureRequestRemindRequest: signatureRequestRemindRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequest#SignatureRequestRemind: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
