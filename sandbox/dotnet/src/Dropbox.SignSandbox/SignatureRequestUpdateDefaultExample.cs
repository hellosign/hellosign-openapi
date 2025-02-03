using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class SignatureRequestUpdateDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();

        var signatureRequestUpdateRequest = new SignatureRequestUpdateRequest(
            signatureId: "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f",
            emailAddress: "john@example.com"
        );

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestUpdate(
                signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
                signatureRequestUpdateRequest: signatureRequestUpdateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequest#SignatureRequestUpdate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
