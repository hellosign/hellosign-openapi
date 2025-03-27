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

public class UnclaimedDraftCreateEmbeddedExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var unclaimedDraftCreateEmbeddedRequest = new UnclaimedDraftCreateEmbeddedRequest();
        unclaimedDraftCreateEmbeddedRequest.clientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a");
        unclaimedDraftCreateEmbeddedRequest.requesterEmailAddress("jack@dropboxsign.com");
        unclaimedDraftCreateEmbeddedRequest.testMode(true);
        unclaimedDraftCreateEmbeddedRequest.files(List.of (
            new File("./example_signature_request.pdf")
        ));

        try
        {
            var response = new UnclaimedDraftApi(config).unclaimedDraftCreateEmbedded(
                unclaimedDraftCreateEmbeddedRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling UnclaimedDraftApi#unclaimedDraftCreateEmbedded");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
