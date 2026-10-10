package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.TeamApi;
import com.dropbox.sign.auth.HttpBasicAuth;
import com.dropbox.sign.model.SettingResponse;

public class TeamSettingsGetExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        try
        {
            var response = new TeamApi(config).teamSettingsGet();
            SettingResponse company = response.getSettings().getCompany();
            SettingResponse dataResidency = response.getSettings().getDataResidency();

            System.out.println(response);
            System.out.println(response.getTeamId());
            System.out.println(company.getValue());
            System.out.println(company.getIsInherited());
            System.out.println(company.getSource());
            System.out.println(company.getType());
            System.out.println(company.getWritable());
            System.out.println(company.getLock().getMode());
            System.out.println(company.getLock().getSource());
            System.out.println(dataResidency.getValue());
            System.out.println(dataResidency.getType());
            System.out.println(dataResidency.getLock().getMode());
            System.out.println(dataResidency.getLock().getSource());
            System.out.println(response.getWarnings());
        } catch (ApiException e) {
            System.err.println("Exception when calling TeamApi#teamSettingsGet");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
