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

public class SignatureRequestCreateEmbeddedExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var signingOptions = new SubSigningOptions();
        signingOptions.defaultType(SubSigningOptions.DefaultTypeEnum.DRAW);
        signingOptions.draw(true);
        signingOptions.phone(false);
        signingOptions.type(true);
        signingOptions.upload(true);

        var signers1 = new SubSignatureRequestSigner();
        signers1.name("Jack");
        signers1.emailAddress("jack@example.com");
        signers1.order(0);

        var signers2 = new SubSignatureRequestSigner();
        signers2.name("Jill");
        signers2.emailAddress("jill@example.com");
        signers2.order(1);

        var signers = new ArrayList<SubSignatureRequestSigner>(List.of (
            signers1,
            signers2
        ));

        var signatureRequestCreateEmbeddedRequest = new SignatureRequestCreateEmbeddedRequest();
        signatureRequestCreateEmbeddedRequest.clientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a");
        signatureRequestCreateEmbeddedRequest.message("Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.");
        signatureRequestCreateEmbeddedRequest.subject("The NDA we talked about");
        signatureRequestCreateEmbeddedRequest.testMode(true);
        signatureRequestCreateEmbeddedRequest.title("NDA with Acme Co.");
        signatureRequestCreateEmbeddedRequest.ccEmailAddresses(List.of (
            "lawyer1@dropboxsign.com",
            "lawyer2@dropboxsign.com"
        ));
        signatureRequestCreateEmbeddedRequest.files(List.of (
            new File("./example_signature_request.pdf")
        ));
        signatureRequestCreateEmbeddedRequest.signingOptions(signingOptions);
        signatureRequestCreateEmbeddedRequest.signers(signers);

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
