using System;
using System.Collections.Generic;
using Org.HelloSign.Api;
using Org.HelloSign.Client;
using Org.HelloSign.Model;

public class Example
{
    public static void Main()
    {
        var config = new Configuration();
        // Configure HTTP basic authorization: api_key
        config.Username = "YOUR_API_KEY";

        // or, configure Bearer (JWT) authorization: oauth2
        // config.AccessToken = "YOUR_BEARER_TOKEN";

        var apiInstance = new SignatureRequestApi(config);

        var signatureRequestId = "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f";

        try
        {
            var result = apiInstance.SignatureRequestReleaseHold(signatureRequestId);
            Console.WriteLine(result);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling HelloSign API: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
