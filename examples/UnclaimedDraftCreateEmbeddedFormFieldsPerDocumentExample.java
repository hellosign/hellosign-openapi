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

public class UnclaimedDraftCreateEmbeddedFormFieldsPerDocumentExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var formFieldsPerDocument1 = new SubFormFieldsPerDocumentText();
        formFieldsPerDocument1.documentIndex(0);
        formFieldsPerDocument1.apiId("uniqueIdHere_1");
        formFieldsPerDocument1.type("text");
        formFieldsPerDocument1.required(true);
        formFieldsPerDocument1.signer("1");
        formFieldsPerDocument1.width(100);
        formFieldsPerDocument1.height(16);
        formFieldsPerDocument1.x(112);
        formFieldsPerDocument1.y(328);
        formFieldsPerDocument1.name("");
        formFieldsPerDocument1.page(1);
        formFieldsPerDocument1.placeholder("");
        formFieldsPerDocument1.validationType(SubFormFieldsPerDocumentText.ValidationTypeEnum.NUMBERS_ONLY);

        var formFieldsPerDocument2 = new SubFormFieldsPerDocumentSignature();
        formFieldsPerDocument2.documentIndex(0);
        formFieldsPerDocument2.apiId("uniqueIdHere_2");
        formFieldsPerDocument2.type("signature");
        formFieldsPerDocument2.required(true);
        formFieldsPerDocument2.signer("0");
        formFieldsPerDocument2.width(120);
        formFieldsPerDocument2.height(30);
        formFieldsPerDocument2.x(530);
        formFieldsPerDocument2.y(415);
        formFieldsPerDocument2.name("");
        formFieldsPerDocument2.page(1);

        var formFieldsPerDocument = new ArrayList<SubFormFieldsPerDocumentBase>(List.of (
            formFieldsPerDocument1,
            formFieldsPerDocument2
        ));

        var unclaimedDraftCreateEmbeddedRequest = new UnclaimedDraftCreateEmbeddedRequest();
        unclaimedDraftCreateEmbeddedRequest.clientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a");
        unclaimedDraftCreateEmbeddedRequest.requesterEmailAddress("jack@dropboxsign.com");
        unclaimedDraftCreateEmbeddedRequest.testMode(false);
        unclaimedDraftCreateEmbeddedRequest.fileUrls(List.of (
            "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
        ));
        unclaimedDraftCreateEmbeddedRequest.formFieldsPerDocument(formFieldsPerDocument);

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
