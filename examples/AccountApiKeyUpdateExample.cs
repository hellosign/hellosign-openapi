using System;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class AccountApiKeyUpdateExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        try
        {
            var request = new AccountApiKeyUpdateRequest(
                name: "Billing",
                isPrimary: true
            );
            var response = new ApiKeyApi(config).ApiKeyUpdate("c3d4e5f6a7b8490c1d2e3f4a5b6c7d8e9f012345", request);

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling ApiKeyApi#ApiKeyUpdate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
