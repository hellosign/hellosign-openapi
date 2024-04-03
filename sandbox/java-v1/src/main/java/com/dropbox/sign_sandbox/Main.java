package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

public class Main {
    public static void main(String[] args) {
        ApiClient apiClient = Configuration.getDefaultApiClient()
            .setApiKey("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        ApiClient apiClient = Configuration.getDefaultApiClient()
            .setBearerToken("YOUR_ACCESS_TOKEN");
        */

        AccountApi api = new AccountApi(apiClient);

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
