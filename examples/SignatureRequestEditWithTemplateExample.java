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

public class SignatureRequestEditWithTemplateExample
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

        var ccs1 = new SubCC();
        ccs1.role("Accounting");
        ccs1.emailAddress("accounting@example.com");

        var ccs = new ArrayList<SubCC>(List.of (
            ccs1
        ));

        var customFields1 = new SubCustomField();
        customFields1.name("Cost");
        customFields1.editor("Client");
        customFields1.required(true);
        customFields1.value("$20,000");

        var customFields = new ArrayList<SubCustomField>(List.of (
            customFields1
        ));

        var signatureRequestEditWithTemplateRequest = new SignatureRequestEditWithTemplateRequest();
        signatureRequestEditWithTemplateRequest.templateIds(List.of (
            "61a832ff0d8423f91d503e76bfbcc750f7417c78"
        ));
        signatureRequestEditWithTemplateRequest.message("Glad we could come to an agreement.");
        signatureRequestEditWithTemplateRequest.subject("Purchase Order");
        signatureRequestEditWithTemplateRequest.testMode(true);
        signatureRequestEditWithTemplateRequest.signingOptions(signingOptions);
        signatureRequestEditWithTemplateRequest.signers(signers);
        signatureRequestEditWithTemplateRequest.ccs(ccs);
        signatureRequestEditWithTemplateRequest.customFields(customFields);

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestEditWithTemplate(
                "fa5c8a0b0f492d768749333ad6fcc214c111e967", // signatureRequestId
                signatureRequestEditWithTemplateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestEditWithTemplate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
