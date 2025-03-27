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

public class OauthTokenRefreshExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();

        var oAuthTokenRefreshRequest = new OAuthTokenRefreshRequest();
        oAuthTokenRefreshRequest.grantType("refresh_token");
        oAuthTokenRefreshRequest.refreshToken("hNTI2MTFmM2VmZDQxZTZjOWRmZmFjZmVmMGMyNGFjMzI2MGI5YzgzNmE3");

        try
        {
            var response = new OAuthApi(config).oauthTokenRefresh(
                oAuthTokenRefreshRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling OAuthApi#oauthTokenRefresh");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
