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

public class TemplateCreateEmbeddedDraftExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var fieldOptions = new SubFieldOptions();
        fieldOptions.dateFormat(SubFieldOptions.DateFormatEnum.DD_MM_YYYY);

        var mergeFields1 = new SubMergeField();
        mergeFields1.name("Full Name");
        mergeFields1.type(SubMergeField.TypeEnum.TEXT);

        var mergeFields2 = new SubMergeField();
        mergeFields2.name("Is Registered?");
        mergeFields2.type(SubMergeField.TypeEnum.CHECKBOX);

        var mergeFields = new ArrayList<SubMergeField>(List.of (
            mergeFields1,
            mergeFields2
        ));

        var signerRoles1 = new SubTemplateRole();
        signerRoles1.name("Client");
        signerRoles1.order(0);

        var signerRoles2 = new SubTemplateRole();
        signerRoles2.name("Witness");
        signerRoles2.order(1);

        var signerRoles = new ArrayList<SubTemplateRole>(List.of (
            signerRoles1,
            signerRoles2
        ));

        var templateCreateEmbeddedDraftRequest = new TemplateCreateEmbeddedDraftRequest();
        templateCreateEmbeddedDraftRequest.clientId("37dee8d8440c66d54cfa05d92c160882");
        templateCreateEmbeddedDraftRequest.message("For your approval");
        templateCreateEmbeddedDraftRequest.subject("Please sign this document");
        templateCreateEmbeddedDraftRequest.testMode(true);
        templateCreateEmbeddedDraftRequest.title("Test Template");
        templateCreateEmbeddedDraftRequest.ccRoles(List.of (
            "Manager"
        ));
        templateCreateEmbeddedDraftRequest.files(List.of (
            new File("./example_signature_request.pdf")
        ));
        templateCreateEmbeddedDraftRequest.fieldOptions(fieldOptions);
        templateCreateEmbeddedDraftRequest.mergeFields(mergeFields);
        templateCreateEmbeddedDraftRequest.signerRoles(signerRoles);

        try
        {
            var response = new TemplateApi(config).templateCreateEmbeddedDraft(
                templateCreateEmbeddedDraftRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplateApi#templateCreateEmbeddedDraft");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
