using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class TemplateUpdateExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var formFields1 = new SubUpdateFormField(
            apiId: "uniqueIdHere_1",
            name: "New name 1"
        );

        var formFields2 = new SubUpdateFormField(
            apiId: "uniqueIdHere_2",
            name: "New name 2"
        );

        var formFields = new List<SubUpdateFormField>
        {
            formFields1,
            formFields2,
        };

        var templateUpdateRequest = new TemplateUpdateRequest(
            allowFormView: false,
            title: "Test Title",
            subject: "Test Subject",
            message: "Test Message",
            ccRoles: [
                "CC Role 1",
                "CC Role 2",
            ],
            formFields: formFields
        );

        try
        {
            var response = new TemplateApi(config).TemplateUpdate(
                templateId: "f57db65d3f933b5316d398057a36176831451a35",
                templateUpdateRequest: templateUpdateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling TemplateApi#TemplateUpdate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
