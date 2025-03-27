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

public class SignatureRequestEditEmbeddedWithTemplateExample
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

        var signers1 = new SubSignatureRequestTemplateSigner();
        signers1.role("Client");
        signers1.name("George");
        signers1.emailAddress("george@example.com");

        var signers = new ArrayList<SubSignatureRequestTemplateSigner>(List.of (
            signers1
        ));

        var signatureRequestEditEmbeddedWithTemplateRequest = new SignatureRequestEditEmbeddedWithTemplateRequest();
        signatureRequestEditEmbeddedWithTemplateRequest.clientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a");
        signatureRequestEditEmbeddedWithTemplateRequest.templateIds(List.of (
            "c26b8a16784a872da37ea946b9ddec7c1e11dff6"
        ));
        signatureRequestEditEmbeddedWithTemplateRequest.message("Glad we could come to an agreement.");
        signatureRequestEditEmbeddedWithTemplateRequest.subject("Purchase Order");
        signatureRequestEditEmbeddedWithTemplateRequest.testMode(true);
        signatureRequestEditEmbeddedWithTemplateRequest.signingOptions(signingOptions);
        signatureRequestEditEmbeddedWithTemplateRequest.signers(signers);

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestEditEmbeddedWithTemplate(
                "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
                signatureRequestEditEmbeddedWithTemplateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestEditEmbeddedWithTemplate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
