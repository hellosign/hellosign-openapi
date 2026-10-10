using System;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class TeamSettingsUpdateExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";
        // config.AccessToken = "YOUR_ACCESS_TOKEN";

        var teamSettingsUpdateRequest = new TeamSettingsUpdateRequest(
            dataResidency: new DataResidencySettingUpdate(value: DataResidency.Eu),
            company: new StringSettingUpdate(
                value: "Northwind",
                lockMode: TeamSettingLock.OrganizationAdmins
            )
        );

        try
        {
            var response = new TeamApi(config).TeamSettingsUpdate(
                teamSettingsUpdateRequest: teamSettingsUpdateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling TeamApi#TeamSettingsUpdate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
