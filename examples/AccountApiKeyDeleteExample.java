package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

public class AccountApiKeyDeleteExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");

        try
        {
            new ApiKeyApi(config).apiKeyDelete(
                "c3d4e5f6a7b8490c1d2e3f4a5b6c7d8e9f012345" // apiKeyId
            );
        } catch (ApiException e) {
            System.err.println("Exception when calling ApiKeyApi#apiKeyDelete");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
