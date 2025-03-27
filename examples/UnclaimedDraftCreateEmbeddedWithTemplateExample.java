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

public class UnclaimedDraftCreateEmbeddedWithTemplateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var ccs1 = new SubCC();
        ccs1.role("Accounting");
        ccs1.emailAddress("accounting@dropboxsign.com");

        var ccs = new ArrayList<SubCC>(List.of (
            ccs1
        ));

        var signers1 = new SubUnclaimedDraftTemplateSigner();
        signers1.role("Client");
        signers1.name("George");
        signers1.emailAddress("george@example.com");

        var signers = new ArrayList<SubUnclaimedDraftTemplateSigner>(List.of (
            signers1
        ));

        var unclaimedDraftCreateEmbeddedWithTemplateRequest = new UnclaimedDraftCreateEmbeddedWithTemplateRequest();
        unclaimedDraftCreateEmbeddedWithTemplateRequest.clientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a");
        unclaimedDraftCreateEmbeddedWithTemplateRequest.requesterEmailAddress("jack@dropboxsign.com");
        unclaimedDraftCreateEmbeddedWithTemplateRequest.templateIds(List.of (
            "61a832ff0d8423f91d503e76bfbcc750f7417c78"
        ));
        unclaimedDraftCreateEmbeddedWithTemplateRequest.testMode(false);
        unclaimedDraftCreateEmbeddedWithTemplateRequest.ccs(ccs);
        unclaimedDraftCreateEmbeddedWithTemplateRequest.signers(signers);

        try
        {
            var response = new UnclaimedDraftApi(config).unclaimedDraftCreateEmbeddedWithTemplate(
                unclaimedDraftCreateEmbeddedWithTemplateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling UnclaimedDraftApi#unclaimedDraftCreateEmbeddedWithTemplate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
