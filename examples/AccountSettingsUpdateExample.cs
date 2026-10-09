using System;
using System.Collections.Generic;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class AccountSettingsUpdateExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var accountSettingsUpdateRequest = new AccountSettingsUpdateRequest(
            dateFormat: DateFormat.MMDDYYYY,
            requiredSignatureTypes: new List<RequiredSignatureType>()
            {
                RequiredSignatureType.Draw,
                RequiredSignatureType.Type,
            },
            shouldEnableTamperProof: false,
            unset: new List<string>() { "company" }
        );

        try
        {
            var response = new AccountApi(config).AccountSettingsUpdate(
                accountSettingsUpdateRequest: accountSettingsUpdateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling AccountApi#AccountSettingsUpdate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
