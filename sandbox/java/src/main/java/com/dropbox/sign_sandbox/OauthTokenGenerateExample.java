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

public class OauthTokenGenerateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();

        var oAuthTokenGenerateRequest = new OAuthTokenGenerateRequest();
        oAuthTokenGenerateRequest.clientId("cc91c61d00f8bb2ece1428035716b");
        oAuthTokenGenerateRequest.clientSecret("1d14434088507ffa390e6f5528465");
        oAuthTokenGenerateRequest.code("1b0d28d90c86c141");
        oAuthTokenGenerateRequest.state("900e06e2");
        oAuthTokenGenerateRequest.grantType("authorization_code");

        try
        {
            var response = new OAuthApi(config).oauthTokenGenerate(
                oAuthTokenGenerateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling OAuthApi#oauthTokenGenerate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
