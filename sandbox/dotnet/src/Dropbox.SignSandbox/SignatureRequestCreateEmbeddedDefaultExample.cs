using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class SignatureRequestCreateEmbeddedDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();

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

        var signatureRequestCreateEmbeddedRequest = new SignatureRequestCreateEmbeddedRequest(
            clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
            message: "Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.",
            subject: "The NDA we talked about",
            testMode: true,
            title: "NDA with Acme Co.",
            fileUrls: [
                "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
            ],
            ccEmailAddresses: [
                "lawyer1@dropboxsign.com",
                "lawyer2@dropboxsign.com",
            ],
            signingOptions: signingOptions,
            signers: signers
        );

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestCreateEmbedded(
                signatureRequestCreateEmbeddedRequest: signatureRequestCreateEmbeddedRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequest#SignatureRequestCreateEmbedded: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
