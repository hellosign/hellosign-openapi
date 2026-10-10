using System;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;

namespace Dropbox.SignSandbox;

public class TeamSettingsGetExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        try
        {
            var response = new TeamApi(config).TeamSettingsGet();
            var company = response.Settings.Company;
            var dataResidency = response.Settings.DataResidency;

            Console.WriteLine(response);
            Console.WriteLine(response.TeamId);
            Console.WriteLine(company.Value);
            Console.WriteLine(company.IsInherited);
            Console.WriteLine(company.Source);
            Console.WriteLine(company.Type);
            Console.WriteLine(company.Writable);
            Console.WriteLine(company.Lock.Mode);
            Console.WriteLine(company.Lock.Source);
            Console.WriteLine(dataResidency.Value);
            Console.WriteLine(dataResidency.Type);
            Console.WriteLine(dataResidency.Lock.Mode);
            Console.WriteLine(dataResidency.Lock.Source);
            Console.WriteLine(response.Warnings);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling TeamApi#TeamSettingsGet: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
