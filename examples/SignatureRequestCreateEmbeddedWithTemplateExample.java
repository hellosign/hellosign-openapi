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

public class SignatureRequestCreateEmbeddedWithTemplateExample
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

        var signatureRequestCreateEmbeddedWithTemplateRequest = new SignatureRequestCreateEmbeddedWithTemplateRequest();
        signatureRequestCreateEmbeddedWithTemplateRequest.clientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a");
        signatureRequestCreateEmbeddedWithTemplateRequest.templateIds(List.of (
            "c26b8a16784a872da37ea946b9ddec7c1e11dff6"
        ));
        signatureRequestCreateEmbeddedWithTemplateRequest.message("Glad we could come to an agreement.");
        signatureRequestCreateEmbeddedWithTemplateRequest.subject("Purchase Order");
        signatureRequestCreateEmbeddedWithTemplateRequest.testMode(true);
        signatureRequestCreateEmbeddedWithTemplateRequest.signingOptions(signingOptions);
        signatureRequestCreateEmbeddedWithTemplateRequest.signers(signers);

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestCreateEmbeddedWithTemplate(
                signatureRequestCreateEmbeddedWithTemplateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestCreateEmbeddedWithTemplate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
