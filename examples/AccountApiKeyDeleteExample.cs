using System;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class AccountApiKeyDeleteExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        try
        {
            new ApiKeyApi(config).ApiKeyDelete("c3d4e5f6a7b8490c1d2e3f4a5b6c7d8e");
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling ApiKeyApi#ApiKeyDelete: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
