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

public class SignatureRequestBulkCreateEmbeddedWithTemplateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");

        var signerList2CustomFields1 = new SubBulkSignerListCustomField();
        signerList2CustomFields1.name("company");
        signerList2CustomFields1.value("123 LLC");

        var signerList2CustomFields = new ArrayList<SubBulkSignerListCustomField>(List.of (
            signerList2CustomFields1
        ));

        var signerList2Signers1 = new SubSignatureRequestTemplateSigner();
        signerList2Signers1.role("Client");
        signerList2Signers1.name("Mary");
        signerList2Signers1.emailAddress("mary@example.com");
        signerList2Signers1.pin("gd9as5b");

        var signerList2Signers = new ArrayList<SubSignatureRequestTemplateSigner>(List.of (
            signerList2Signers1
        ));

        var signerList1CustomFields1 = new SubBulkSignerListCustomField();
        signerList1CustomFields1.name("company");
        signerList1CustomFields1.value("ABC Corp");

        var signerList1CustomFields = new ArrayList<SubBulkSignerListCustomField>(List.of (
            signerList1CustomFields1
        ));

        var signerList1Signers1 = new SubSignatureRequestTemplateSigner();
        signerList1Signers1.role("Client");
        signerList1Signers1.name("George");
        signerList1Signers1.emailAddress("george@example.com");
        signerList1Signers1.pin("d79a3td");

        var signerList1Signers = new ArrayList<SubSignatureRequestTemplateSigner>(List.of (
            signerList1Signers1
        ));

        var signerList1 = new SubBulkSignerList();
        signerList1.customFields(signerList1CustomFields);
        signerList1.signers(signerList1Signers);

        var signerList2 = new SubBulkSignerList();
        signerList2.customFields(signerList2CustomFields);
        signerList2.signers(signerList2Signers);

        var signerList = new ArrayList<SubBulkSignerList>(List.of (
            signerList1,
            signerList2
        ));

        var ccs1 = new SubCC();
        ccs1.role("Accounting");
        ccs1.emailAddress("accounting@example.com");

        var ccs = new ArrayList<SubCC>(List.of (
            ccs1
        ));

        var signatureRequestBulkCreateEmbeddedWithTemplateRequest = new SignatureRequestBulkCreateEmbeddedWithTemplateRequest();
        signatureRequestBulkCreateEmbeddedWithTemplateRequest.clientId("1a659d9ad95bccd307ecad78d72192f8");
        signatureRequestBulkCreateEmbeddedWithTemplateRequest.templateIds(List.of (
            "c26b8a16784a872da37ea946b9ddec7c1e11dff6"
        ));
        signatureRequestBulkCreateEmbeddedWithTemplateRequest.message("Glad we could come to an agreement.");
        signatureRequestBulkCreateEmbeddedWithTemplateRequest.subject("Purchase Order");
        signatureRequestBulkCreateEmbeddedWithTemplateRequest.testMode(true);
        signatureRequestBulkCreateEmbeddedWithTemplateRequest.signerList(signerList);
        signatureRequestBulkCreateEmbeddedWithTemplateRequest.ccs(ccs);

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestBulkCreateEmbeddedWithTemplate(
                signatureRequestBulkCreateEmbeddedWithTemplateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#signatureRequestBulkCreateEmbeddedWithTemplate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
