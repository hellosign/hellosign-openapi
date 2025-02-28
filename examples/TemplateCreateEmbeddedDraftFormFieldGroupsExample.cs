using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class TemplateCreateEmbeddedDraftFormFieldGroupsExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var fieldOptions = new SubFieldOptions(
            dateFormat: SubFieldOptions.DateFormatEnum.DD_MM_YYYY
        );

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

        var mergeFields1 = new SubMergeField(
            name: "Full Name",
            type: SubMergeField.TypeEnum.Text
        );

        var mergeFields2 = new SubMergeField(
            name: "Is Registered?",
            type: SubMergeField.TypeEnum.Checkbox
        );

        var mergeFields = new List<SubMergeField>
        {
            mergeFields1,
            mergeFields2,
        };

        var signerRoles1 = new SubTemplateRole(
            name: "Client",
            order: 0
        );

        var signerRoles2 = new SubTemplateRole(
            name: "Witness",
            order: 1
        );

        var signerRoles = new List<SubTemplateRole>
        {
            signerRoles1,
            signerRoles2,
        };

        var templateCreateEmbeddedDraftRequest = new TemplateCreateEmbeddedDraftRequest(
            clientId: "37dee8d8440c66d54cfa05d92c160882",
            message: "For your approval",
            subject: "Please sign this document",
            testMode: true,
            title: "Test Template",
            fileUrls: [
                "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
            ],
            ccRoles: [
                "Manager",
            ],
            fieldOptions: fieldOptions,
            formFieldGroups: formFieldGroups,
            formFieldsPerDocument: formFieldsPerDocument,
            mergeFields: mergeFields,
            signerRoles: signerRoles
        );

        try
        {
            var response = new TemplateApi(config).TemplateCreateEmbeddedDraft(
                templateCreateEmbeddedDraftRequest: templateCreateEmbeddedDraftRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling TemplateApi#TemplateCreateEmbeddedDraft: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
