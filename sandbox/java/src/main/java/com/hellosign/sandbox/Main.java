package com.hellosign.sandbox;

import com.hellosign.ApiClient;
import com.hellosign.ApiException;
import com.hellosign.Configuration;
import com.hellosign.api.*;
import com.hellosign.auth.HttpBasicAuth;
import com.hellosign.auth.HttpBearerAuth;
import com.hellosign.model.*;

public class Main {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient
            .getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        AccountApi api = new AccountApi(defaultClient);

        AccountCreateRequest data = new AccountCreateRequest()
            .emailAddress("newuser@dropboxsign.com");

        try {
            AccountCreateResponse result = api.accountCreate(data);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling Dropbox Sign API");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
