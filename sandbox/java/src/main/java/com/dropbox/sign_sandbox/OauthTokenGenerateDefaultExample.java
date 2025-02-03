package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

import java.io.File;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class OauthTokenGenerateDefaultExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();

        var oauthTokenGenerateRequest = new OAuthTokenGenerateRequest();
        oauthTokenGenerateRequest.clientId("cc91c61d00f8bb2ece1428035716b");
        oauthTokenGenerateRequest.clientSecret("1d14434088507ffa390e6f5528465");
        oauthTokenGenerateRequest.code("1b0d28d90c86c141");
        oauthTokenGenerateRequest.state("900e06e2");
        oauthTokenGenerateRequest.grantType("authorization_code");

        try
        {
            var response = new OAuthApi(config).oauthTokenGenerate(
                oauthTokenGenerateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling Oauth#oauthTokenGenerate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
