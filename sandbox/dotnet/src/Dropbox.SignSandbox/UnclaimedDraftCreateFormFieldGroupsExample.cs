using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class UnclaimedDraftCreateFormFieldGroupsExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var formFieldGroups1 = new SubFormFieldGroup(
            groupId: "RadioItemGroup1",
            groupLabel: "Radio Item Group 1",
            requirement: "require_0-1"
        );

        var formFieldGroups = new List<SubFormFieldGroup>
        {
            formFieldGroups1,
        };

        var formFieldsPerDocument1 = new SubFormFieldsPerDocumentRadio(
            documentIndex: 0,
            apiId: "uniqueIdHere_1",
            type: "radio",
            required: false,
            signer: "0",
            width: 18,
            height: 18,
            x: 112,
            y: 328,
            group: "RadioItemGroup1",
            isChecked: true,
            name: "",
            page: 1
        );

        var formFieldsPerDocument2 = new SubFormFieldsPerDocumentRadio(
            documentIndex: 0,
            apiId: "uniqueIdHere_2",
            type: "radio",
            required: false,
            signer: "0",
            width: 18,
            height: 18,
            x: 112,
            y: 370,
            group: "RadioItemGroup1",
            isChecked: false,
            name: "",
            page: 1
        );

        var formFieldsPerDocument = new List<SubFormFieldsPerDocumentBase>
        {
            formFieldsPerDocument1,
            formFieldsPerDocument2,
        };

        var unclaimedDraftCreateRequest = new UnclaimedDraftCreateRequest(
            type: UnclaimedDraftCreateRequest.TypeEnum.RequestSignature,
            testMode: false,
            fileUrls: [
                "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
            ],
            formFieldGroups: formFieldGroups,
            formFieldsPerDocument: formFieldsPerDocument
        );

        try
        {
            var response = new UnclaimedDraftApi(config).UnclaimedDraftCreate(
                unclaimedDraftCreateRequest: unclaimedDraftCreateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling UnclaimedDraftApi#UnclaimedDraftCreate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
