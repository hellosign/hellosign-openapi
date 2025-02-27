using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class SignatureRequestBulkSendWithTemplateExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var signerList2CustomFields1 = new SubBulkSignerListCustomField(
            name: "company",
            value: "123 LLC"
        );

        var signerList2CustomFields = new List<SubBulkSignerListCustomField>
        {
            signerList2CustomFields1,
        };

        var signerList2Signers1 = new SubSignatureRequestTemplateSigner(
            role: "Client",
            name: "Mary",
            emailAddress: "mary@example.com",
            pin: "gd9as5b"
        );

        var signerList2Signers = new List<SubSignatureRequestTemplateSigner>
        {
            signerList2Signers1,
        };

        var signerList1CustomFields1 = new SubBulkSignerListCustomField(
            name: "company",
            value: "ABC Corp"
        );

        var signerList1CustomFields = new List<SubBulkSignerListCustomField>
        {
            signerList1CustomFields1,
        };

        var signerList1Signers1 = new SubSignatureRequestTemplateSigner(
            role: "Client",
            name: "George",
            emailAddress: "george@example.com",
            pin: "d79a3td"
        );

        var signerList1Signers = new List<SubSignatureRequestTemplateSigner>
        {
            signerList1Signers1,
        };

        var signerList1 = new SubBulkSignerList(
            customFields: signerList1CustomFields,
            signers: signerList1Signers
        );

        var signerList2 = new SubBulkSignerList(
            customFields: signerList2CustomFields,
            signers: signerList2Signers
        );

        var signerList = new List<SubBulkSignerList>
        {
            signerList1,
            signerList2,
        };

        var ccs1 = new SubCC(
            role: "Accounting",
            emailAddress: "accounting@example.com"
        );

        var ccs = new List<SubCC>
        {
            ccs1,
        };

        var signatureRequestBulkSendWithTemplateRequest = new SignatureRequestBulkSendWithTemplateRequest(
            templateIds: [
                "c26b8a16784a872da37ea946b9ddec7c1e11dff6",
            ],
            message: "Glad we could come to an agreement.",
            subject: "Purchase Order",
            testMode: true,
            signerList: signerList,
            ccs: ccs
        );

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestBulkSendWithTemplate(
                signatureRequestBulkSendWithTemplateRequest: signatureRequestBulkSendWithTemplateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequestApi#SignatureRequestBulkSendWithTemplate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
