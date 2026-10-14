package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.AccountApi;
import com.dropbox.sign.auth.HttpBasicAuth;
import com.dropbox.sign.model.SettingResponse;

public class AccountSettingsGetExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        try
        {
            var response = new AccountApi(config).accountSettingsGet();
            SettingResponse company = response.getSettings().getCompany();

            System.out.println(response);
            System.out.println(response.getAccountId());
            System.out.println(company.getValue());
            System.out.println(company.getIsInherited());
            System.out.println(company.getSource());
            System.out.println(company.getType());
            System.out.println(company.getWritable());
            System.out.println(company.getLock().getMode());
            System.out.println(company.getLock().getSource());
            System.out.println(response.getWarnings());
        } catch (ApiException e) {
            System.err.println("Exception when calling AccountApi#accountSettingsGet");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
