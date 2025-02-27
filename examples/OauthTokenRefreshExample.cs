using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class OauthTokenRefreshExample
{
    public static void Run()
    {
        var config = new Configuration();

        var oAuthTokenRefreshRequest = new OAuthTokenRefreshRequest(
            grantType: "refresh_token",
            refreshToken: "hNTI2MTFmM2VmZDQxZTZjOWRmZmFjZmVmMGMyNGFjMzI2MGI5YzgzNmE3"
        );

        try
        {
            var response = new OAuthApi(config).OauthTokenRefresh(
                oAuthTokenRefreshRequest: oAuthTokenRefreshRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling OAuthApi#OauthTokenRefresh: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
