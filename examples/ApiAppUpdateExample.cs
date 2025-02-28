using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class ApiAppUpdateExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var oauth = new SubOAuth(
            callbackUrl: "https://example.com/oauth",
            scopes: [
                SubOAuth.ScopesEnum.BasicAccountInfo,
                SubOAuth.ScopesEnum.RequestSignature,
            ]
        );

        var whiteLabelingOptions = new SubWhiteLabelingOptions(
            primaryButtonColor: "#00b3e6",
            primaryButtonTextColor: "#ffffff"
        );

        var apiAppUpdateRequest = new ApiAppUpdateRequest(
            callbackUrl: "https://example.com/dropboxsign",
            name: "New Name",
            domains: [
                "example.com",
            ],
            customLogoFile: new FileStream(
                path: "CustomLogoFile.png",
                mode: FileMode.Open
            ),
            oauth: oauth,
            whiteLabelingOptions: whiteLabelingOptions
        );

        try
        {
            var response = new ApiAppApi(config).ApiAppUpdate(
                clientId: "0dd3b823a682527788c4e40cb7b6f7e9",
                apiAppUpdateRequest: apiAppUpdateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling ApiAppApi#ApiAppUpdate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
