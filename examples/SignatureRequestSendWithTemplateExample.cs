using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class SignatureRequestSendWithTemplateExample
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

        var ccs1 = new SubCC(
            role: "Accounting",
            emailAddress: "accounting@example.com"
        );

        var ccs = new List<SubCC>
        {
            ccs1,
        };

        var customFields1 = new SubCustomField(
            name: "Cost",
            editor: "Client",
            required: true,
            value: "$20,000"
        );

        var customFields = new List<SubCustomField>
        {
            customFields1,
        };

        var signatureRequestSendWithTemplateRequest = new SignatureRequestSendWithTemplateRequest(
            templateIds: [
                "61a832ff0d8423f91d503e76bfbcc750f7417c78",
            ],
            message: "Glad we could come to an agreement.",
            subject: "Purchase Order",
            testMode: true,
            signingOptions: signingOptions,
            signers: signers,
            ccs: ccs,
            customFields: customFields
        );

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestSendWithTemplate(
                signatureRequestSendWithTemplateRequest: signatureRequestSendWithTemplateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestSendWithTemplate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
