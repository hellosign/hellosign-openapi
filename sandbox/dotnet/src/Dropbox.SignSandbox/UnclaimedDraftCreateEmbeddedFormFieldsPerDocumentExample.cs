using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class UnclaimedDraftCreateEmbeddedFormFieldsPerDocumentExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var formFieldsPerDocument1 = new SubFormFieldsPerDocumentText(
            documentIndex: 0,
            apiId: "uniqueIdHere_1",
            type: "text",
            required: true,
            signer: "1",
            width: 100,
            height: 16,
            x: 112,
            y: 328,
            name: "",
            page: 1,
            placeholder: "",
            validationType: SubFormFieldsPerDocumentText.ValidationTypeEnum.NumbersOnly
        );

        var formFieldsPerDocument2 = new SubFormFieldsPerDocumentSignature(
            documentIndex: 0,
            apiId: "uniqueIdHere_2",
            type: "signature",
            required: true,
            signer: "0",
            width: 120,
            height: 30,
            x: 530,
            y: 415,
            name: "",
            page: 1
        );

        var formFieldsPerDocument = new List<SubFormFieldsPerDocumentBase>
        {
            formFieldsPerDocument1,
            formFieldsPerDocument2,
        };

        var unclaimedDraftCreateEmbeddedRequest = new UnclaimedDraftCreateEmbeddedRequest(
            clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
            requesterEmailAddress: "jack@dropboxsign.com",
            testMode: false,
            fileUrls: [
                "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
            ],
            formFieldsPerDocument: formFieldsPerDocument
        );

        try
        {
            var response = new UnclaimedDraftApi(config).UnclaimedDraftCreateEmbedded(
                unclaimedDraftCreateEmbeddedRequest: unclaimedDraftCreateEmbeddedRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling UnclaimedDraftApi#UnclaimedDraftCreateEmbedded: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
