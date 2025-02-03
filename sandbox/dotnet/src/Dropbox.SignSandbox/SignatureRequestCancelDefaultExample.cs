using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class SignatureRequestCancelDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();

        try
        {
            new SignatureRequestApi(config).SignatureRequestCancel(
                signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967"
            );
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequest#SignatureRequestCancel: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
