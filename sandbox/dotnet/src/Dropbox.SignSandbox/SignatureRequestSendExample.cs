using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class SignatureRequestSendExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var fieldOptions = new SubFieldOptions(
            dateFormat: SubFieldOptions.DateFormatEnum.DD_MM_YYYY
        );

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

        var signatureRequestSendRequest = new SignatureRequestSendRequest(
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
            metadata: JsonSerializer.Deserialize<Dictionary<string, object>>("""
                {
                    "custom_id": 1234,
                    "custom_text": "NDA #9"
                }
            """),
            fieldOptions: fieldOptions,
            signingOptions: signingOptions,
            signers: signers
        );

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestSend(
                signatureRequestSendRequest: signatureRequestSendRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestSend: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
