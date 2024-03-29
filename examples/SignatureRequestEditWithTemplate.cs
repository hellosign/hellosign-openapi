using System;
using System.Collections.Generic;
using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

public class Example
{
    public static void Main()
    {
        var config = new Configuration();
        // Configure HTTP basic authorization: api_key
        config.Username = "YOUR_API_KEY";

        // or, configure Bearer (JWT) authorization: oauth2
        // config.AccessToken = "YOUR_BEARER_TOKEN";

        var signatureRequestApi = new SignatureRequestApi(config);

        var signer1 = new SubSignatureRequestTemplateSigner(
            role: "Client",
            emailAddress: "george@example.com",
            name: "George"
        );

        var cc1 = new SubCC(
            role: "Accounting",
            emailAddress: "accouting@emaple.com"
        );

        var customField1 = new SubCustomField(
            name: "Cost",
            value: "$20,000",
            editor: "Client",
            required: true
        );

        var signingOptions = new SubSigningOptions(
            draw: true,
            type: true,
            upload: true,
            phone: false,
            defaultType: SubSigningOptions.DefaultTypeEnum.Draw
        );

        var data = new SignatureRequestEditWithTemplateRequest(
            templateIds: new List<string>(){"c26b8a16784a872da37ea946b9ddec7c1e11dff6"},
            subject: "Purchase Order",
            message: "Glad we could come to an agreement.",
            signers: new List<SubSignatureRequestTemplateSigner>(){signer1},
            ccs: new List<SubCC>(){cc1},
            customFields: new List<SubCustomField>(){customField1},
            signingOptions: signingOptions,
            testMode: true
        );

        var signatureRequestId = "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f";

        try
        {
            var result = signatureRequestApi.SignatureRequestEditWithTemplate(signatureRequestId, data);
            Console.WriteLine(result);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Dropbox Sign API: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
