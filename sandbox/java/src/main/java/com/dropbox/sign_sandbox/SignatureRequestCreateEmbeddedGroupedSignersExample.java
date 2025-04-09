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

public class SignatureRequestCreateEmbeddedGroupedSignersExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var groupedSigners2Signers1 = new SubSignatureRequestSigner();
        groupedSigners2Signers1.name("Bob");
        groupedSigners2Signers1.emailAddress("bob@example.com");

        var groupedSigners2Signers2 = new SubSignatureRequestSigner();
        groupedSigners2Signers2.name("Charlie");
        groupedSigners2Signers2.emailAddress("charlie@example.com");

        var groupedSigners2Signers = new ArrayList<SubSignatureRequestSigner>(List.of (
            groupedSigners2Signers1,
            groupedSigners2Signers2
        ));

        var groupedSigners1Signers1 = new SubSignatureRequestSigner();
        groupedSigners1Signers1.name("Jack");
        groupedSigners1Signers1.emailAddress("jack@example.com");

        var groupedSigners1Signers2 = new SubSignatureRequestSigner();
        groupedSigners1Signers2.name("Jill");
        groupedSigners1Signers2.emailAddress("jill@example.com");

        var groupedSigners1Signers = new ArrayList<SubSignatureRequestSigner>(List.of (
            groupedSigners1Signers1,
            groupedSigners1Signers2
        ));

        var signingOptions = new SubSigningOptions();
        signingOptions.defaultType(SubSigningOptions.DefaultTypeEnum.DRAW);
        signingOptions.draw(true);
        signingOptions.phone(false);
        signingOptions.type(true);
        signingOptions.upload(true);

        var groupedSigners1 = new SubSignatureRequestGroupedSigners();
        groupedSigners1.group("Group #1");
        groupedSigners1.order(0);
        groupedSigners1.signers(groupedSigners1Signers);

        var groupedSigners2 = new SubSignatureRequestGroupedSigners();
        groupedSigners2.group("Group #2");
        groupedSigners2.order(1);
        groupedSigners2.signers(groupedSigners2Signers);

        var groupedSigners = new ArrayList<SubSignatureRequestGroupedSigners>(List.of (
            groupedSigners1,
            groupedSigners2
        ));

        var signatureRequestCreateEmbeddedRequest = new SignatureRequestCreateEmbeddedRequest();
        signatureRequestCreateEmbeddedRequest.clientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a");
        signatureRequestCreateEmbeddedRequest.message("Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.");
        signatureRequestCreateEmbeddedRequest.subject("The NDA we talked about");
        signatureRequestCreateEmbeddedRequest.testMode(true);
        signatureRequestCreateEmbeddedRequest.title("NDA with Acme Co.");
        signatureRequestCreateEmbeddedRequest.fileUrls(List.of (
            "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
        ));
        signatureRequestCreateEmbeddedRequest.ccEmailAddresses(List.of (
            "lawyer1@dropboxsign.com",
            "lawyer2@dropboxsign.com"
        ));
        signatureRequestCreateEmbeddedRequest.signingOptions(signingOptions);
        signatureRequestCreateEmbeddedRequest.groupedSigners(groupedSigners);

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestCreateEmbedded(
                signatureRequestCreateEmbeddedRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestCreateEmbedded");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
