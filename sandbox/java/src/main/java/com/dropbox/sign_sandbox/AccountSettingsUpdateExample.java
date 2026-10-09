package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.AccountApi;
import com.dropbox.sign.auth.HttpBasicAuth;
import com.dropbox.sign.model.AccountSettingsUpdateRequest;
import com.dropbox.sign.model.DateFormat;
import com.dropbox.sign.model.RequiredSignatureType;
import java.util.List;

public class AccountSettingsUpdateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var accountSettingsUpdateRequest = new AccountSettingsUpdateRequest()
            .dateFormat(DateFormat.MM_DD_YYYY)
            .requiredSignatureTypes(List.of(
                RequiredSignatureType.DRAW,
                RequiredSignatureType.TYPE
            ))
            .shouldEnableTamperProof(false)
            .unset(List.of("company"));

        try
        {
            var response = new AccountApi(config).accountSettingsUpdate(
                accountSettingsUpdateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling AccountApi#accountSettingsUpdate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
