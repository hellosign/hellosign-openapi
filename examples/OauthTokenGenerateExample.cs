using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class OauthTokenGenerateExample
{
    public static void Run()
    {
        var config = new Configuration();

        var oAuthTokenGenerateRequest = new OAuthTokenGenerateRequest(
            clientId: "cc91c61d00f8bb2ece1428035716b",
            clientSecret: "1d14434088507ffa390e6f5528465",
            code: "1b0d28d90c86c141",
            state: "900e06e2",
            grantType: "authorization_code"
        );

        try
        {
            var response = new OAuthApi(config).OauthTokenGenerate(
                oAuthTokenGenerateRequest: oAuthTokenGenerateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling OAuthApi#OauthTokenGenerate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
