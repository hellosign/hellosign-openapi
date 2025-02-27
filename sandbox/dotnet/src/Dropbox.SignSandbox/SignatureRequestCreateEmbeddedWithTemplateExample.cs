using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class SignatureRequestCreateEmbeddedWithTemplateExample
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

        var signers1 = new SubSignatureRequestTemplateSigner(
            role: "Client",
            name: "George",
            emailAddress: "george@example.com"
        );

        var signers = new List<SubSignatureRequestTemplateSigner>
        {
            signers1,
        };

        var signatureRequestCreateEmbeddedWithTemplateRequest = new SignatureRequestCreateEmbeddedWithTemplateRequest(
            clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
            templateIds: [
                "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
            ],
            message: "Glad we could come to an agreement.",
            subject: "Purchase Order",
            testMode: true,
            signingOptions: signingOptions,
            signers: signers
        );

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestCreateEmbeddedWithTemplate(
                signatureRequestCreateEmbeddedWithTemplateRequest: signatureRequestCreateEmbeddedWithTemplateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestCreateEmbeddedWithTemplate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
