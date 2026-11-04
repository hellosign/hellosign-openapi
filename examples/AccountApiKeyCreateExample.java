package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

public class AccountApiKeyCreateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");

        try
        {

            var request = new AccountApiKeyCreateRequest();
            request.setName("Production");
            var response = new ApiKeyApi(config).apiKeyCreate(
                request
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling ApiKeyApi#apiKeyCreate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
