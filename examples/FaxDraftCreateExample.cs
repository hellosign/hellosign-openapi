using System;
using System.Collections.Generic;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class FaxDraftCreateExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        var editorOptions = new SubEditorPageOptions(
            forceUploadPage: false,
            forceEditorPage: true,
            forceReviewPage: true
        );
        var faxDraftCreateRequest = new FaxDraftCreateRequest(
            clientId: "b6b8e7deaf8f0b95c029dca049356d4a2cf9710a",
            fileUrls: new List<string>
            {
                "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1",
            },
            recipients: new List<string>
            {
                "+14155552671",
            },
            editorOptions: editorOptions,
            testMode: true
        );

        try
        {
            var response = new FaxApi(config).FaxDraftCreate(
                faxDraftCreateRequest: faxDraftCreateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling FaxApi#FaxDraftCreate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
