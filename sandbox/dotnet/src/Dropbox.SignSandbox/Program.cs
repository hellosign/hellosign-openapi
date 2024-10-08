﻿using System;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox
{
    public class Example
    {
        public static void Main()
        {
            var config = new Configuration();
            // Configure HTTP basic authorization: api_key
            config.Username = "YOUR_API_KEY";

            // or, configure Bearer (JWT) authorization: oauth2
            // config.AccessToken = "YOUR_BEARER_TOKEN";

            var apiInstance = new AccountApi(config);

            var data = new AccountCreateRequest(
                emailAddress: "newuser@dropboxsign.com"
            );

            try
            {
                var result = apiInstance.AccountCreate(data);
                Console.WriteLine(result);
            }
            catch (ApiException e)
            {
                Console.WriteLine("Exception when calling Dropbox Sign API: " + e.Message);
                Console.WriteLine("Status Code: " + e.ErrorCode);
                Console.WriteLine(e.StackTrace);
            }
        }
    }
}