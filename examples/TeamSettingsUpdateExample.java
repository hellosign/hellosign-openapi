package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.TeamApi;
import com.dropbox.sign.auth.HttpBasicAuth;
import com.dropbox.sign.model.DataResidency;
import com.dropbox.sign.model.TeamSettingLock;
import com.dropbox.sign.model.TeamSettingsUpdateRequest;
import java.util.HashMap;
import java.util.Map;

public class TeamSettingsUpdateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        Map<String, Object> set = new HashMap<>();
        set.put("data_residency", DataResidency.EU);
        set.put("company", "Northwind");

        var teamSettingsUpdateRequest = new TeamSettingsUpdateRequest()
            .set(set)
            .lock(Map.of(
                "company", TeamSettingLock.ORGANIZATION_ADMINS
            ));

        try
        {
            var response = new TeamApi(config).teamSettingsUpdate(
                teamSettingsUpdateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling TeamApi#teamSettingsUpdate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
