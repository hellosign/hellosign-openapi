using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class DocumentDetectFieldsExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var documentFieldDetectionRequest = new DocumentFieldDetectionRequest(
            detectionMode: "annotations",
            file: new FileStream(
                path: "./example_document.pdf",
                mode: FileMode.Open
            ),
            pageRange: "all"
        );

        try
        {
            var response = new DocumentApi(config).DocumentDetectFields(
                documentFieldDetectionRequest: documentFieldDetectionRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling DocumentApi#DocumentDetectFields: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
