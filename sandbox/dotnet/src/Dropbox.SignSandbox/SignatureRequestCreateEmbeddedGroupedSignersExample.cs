using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class SignatureRequestCreateEmbeddedGroupedSignersExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var groupedSigners2Signers1 = new SubSignatureRequestSigner(
            name: "Bob",
            emailAddress: "bob@example.com"
        );

        var groupedSigners2Signers2 = new SubSignatureRequestSigner(
            name: "Charlie",
            emailAddress: "charlie@example.com"
        );

        var groupedSigners2Signers = new List<SubSignatureRequestSigner>
        {
            groupedSigners2Signers1,
            groupedSigners2Signers2,
        };

        var groupedSigners1Signers1 = new SubSignatureRequestSigner(
            name: "Jack",
            emailAddress: "jack@example.com"
        );

        var groupedSigners1Signers2 = new SubSignatureRequestSigner(
            name: "Jill",
            emailAddress: "jill@example.com"
        );

        var groupedSigners1Signers = new List<SubSignatureRequestSigner>
        {
            groupedSigners1Signers1,
            groupedSigners1Signers2,
        };

        var signingOptions = new SubSigningOptions(
            defaultType: SubSigningOptions.DefaultTypeEnum.Draw,
            draw: true,
            phone: false,
            type: true,
            upload: true
        );

        var groupedSigners1 = new SubSignatureRequestGroupedSigners(
            group: "Group #1",
            order: 0,
            signers: groupedSigners1Signers
        );

        var groupedSigners2 = new SubSignatureRequestGroupedSigners(
            group: "Group #2",
            order: 1,
            signers: groupedSigners2Signers
        );

        var groupedSigners = new List<SubSignatureRequestGroupedSigners>
        {
            groupedSigners1,
            groupedSigners2,
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
            groupedSigners: groupedSigners
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
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestCreateEmbedded: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
