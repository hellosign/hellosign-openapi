using System;
using System.Collections.Generic;
using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

public class Example
{
    public static void Main()
    {
        var config = new Configuration();
        // Configure HTTP basic authorization: api_key
        config.Username = "YOUR_API_KEY";

        // or, configure Bearer (JWT) authorization: oauth2
        // config.AccessToken = "YOUR_BEARER_TOKEN";

        var unclaimedDraftApi = new UnclaimedDraftApi(config);

        var data = new UnclaimedDraftEditAndResendRequest(
            clientId: "1a659d9ad95bccd307ecad78d72192f8",
            testMode: true
        );

        var signatureRequestId = "2f9781e1a83jdja934d808c153c2e1d3df6f8f2f";

        try
        {
            var result = unclaimedDraftApi.UnclaimedDraftEditAndResend(signatureRequestId, data);
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
