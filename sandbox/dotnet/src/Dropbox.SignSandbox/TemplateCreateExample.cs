using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class TemplateCreateExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var fieldOptions = new SubFieldOptions(
            dateFormat: SubFieldOptions.DateFormatEnum.DD_MM_YYYY
        );

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

        var templateCreateRequest = new TemplateCreateRequest(
            clientId: "37dee8d8440c66d54cfa05d92c160882",
            message: "For your approval",
            subject: "Please sign this document",
            testMode: true,
            title: "Test Template",
            ccRoles: [
                "Manager",
            ],
            files: new List<Stream>
            {
                new FileStream(
                    path: "./example_signature_request.pdf",
                    mode: FileMode.Open
                ),
            },
            fieldOptions: fieldOptions,
            signerRoles: signerRoles,
            formFieldsPerDocument: formFieldsPerDocument,
            mergeFields: mergeFields
        );

        try
        {
            var response = new TemplateApi(config).TemplateCreate(
                templateCreateRequest: templateCreateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling TemplateApi#TemplateCreate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
