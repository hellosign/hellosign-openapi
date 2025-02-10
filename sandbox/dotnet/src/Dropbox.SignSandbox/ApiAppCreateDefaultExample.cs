using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class ApiAppCreateDefaultExample
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

        var apiAppCreateRequest = new ApiAppCreateRequest(
            name: "My Production App",
            domains: [
                "example.com",
            ],
            oauth: oauth,
            whiteLabelingOptions: whiteLabelingOptions
        );

        try
        {
            var response = new ApiAppApi(config).ApiAppCreate(
                apiAppCreateRequest: apiAppCreateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling ApiApp#ApiAppCreate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
