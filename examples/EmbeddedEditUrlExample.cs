using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class EmbeddedEditUrlExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var mergeFields = new List<SubMergeField>();

        var embeddedEditUrlRequest = new EmbeddedEditUrlRequest(
            ccRoles: [
                "",
            ],
            mergeFields: mergeFields
        );

        try
        {
            var response = new EmbeddedApi(config).EmbeddedEditUrl(
                templateId: "f57db65d3f933b5316d398057a36176831451a35",
                embeddedEditUrlRequest: embeddedEditUrlRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling EmbeddedApi#EmbeddedEditUrl: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
