package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class ApiAppUpdateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var oauth = new SubOAuth();
        oauth.callbackUrl("https://example.com/oauth");
        oauth.scopes(List.of (
            SubOAuth.ScopesEnum.BASIC_ACCOUNT_INFO,
            SubOAuth.ScopesEnum.REQUEST_SIGNATURE
        ));

        var whiteLabelingOptions = new SubWhiteLabelingOptions();
        whiteLabelingOptions.primaryButtonColor("#00b3e6");
        whiteLabelingOptions.primaryButtonTextColor("#ffffff");

        var apiAppUpdateRequest = new ApiAppUpdateRequest();
        apiAppUpdateRequest.callbackUrl("https://example.com/dropboxsign");
        apiAppUpdateRequest.name("New Name");
        apiAppUpdateRequest.domains(List.of (
            "example.com"
        ));
        apiAppUpdateRequest.customLogoFile(new File("CustomLogoFile.png"));
        apiAppUpdateRequest.oauth(oauth);
        apiAppUpdateRequest.whiteLabelingOptions(whiteLabelingOptions);

        try
        {
            var response = new ApiAppApi(config).apiAppUpdate(
                "0dd3b823a682527788c4e40cb7b6f7e9", // clientId
                apiAppUpdateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling ApiAppApi#apiAppUpdate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
