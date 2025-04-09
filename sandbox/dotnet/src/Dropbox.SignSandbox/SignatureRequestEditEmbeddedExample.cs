using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class SignatureRequestEditEmbeddedExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var signingOptions = new SubSigningOptions(
            defaultType: SubSigningOptions.DefaultTypeEnum.Draw,
            draw: true,
            phone: false,
            type: true,
            upload: true
        );

        var signers1 = new SubSignatureRequestSigner(
            name: "Jack",
            emailAddress: "jack@example.com",
            order: 0
        );

        var signers2 = new SubSignatureRequestSigner(
            name: "Jill",
            emailAddress: "jill@example.com",
            order: 1
        );

        var signers = new List<SubSignatureRequestSigner>
        {
            signers1,
            signers2,
        };

        var signatureRequestEditEmbeddedRequest = new SignatureRequestEditEmbeddedRequest(
            clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
            message: "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
            subject: "The NDA we talked about",
            testMode: true,
            title: "NDA with Acme Co.",
            ccEmailAddresses: [
                "lawyer1@dropboxsign.com",
                "lawyer2@dropboxsign.com",
            ],
            files: new List<Stream>
            {
                new FileStream(
                    path: "./example_signature_request.pdf",
                    mode: FileMode.Open
                ),
            },
            signingOptions: signingOptions,
            signers: signers
        );

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestEditEmbedded(
                signatureRequestId: "fa5c8a0b0f492d768749333ad6fcc214c111e967",
                signatureRequestEditEmbeddedRequest: signatureRequestEditEmbeddedRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestEditEmbedded: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
