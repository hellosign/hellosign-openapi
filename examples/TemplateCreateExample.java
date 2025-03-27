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

public class TemplateCreateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var fieldOptions = new SubFieldOptions();
        fieldOptions.dateFormat(SubFieldOptions.DateFormatEnum.DD_MM_YYYY);

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

        var templateCreateRequest = new TemplateCreateRequest();
        templateCreateRequest.clientId("37dee8d8440c66d54cfa05d92c160882");
        templateCreateRequest.message("For your approval");
        templateCreateRequest.subject("Please sign this document");
        templateCreateRequest.testMode(true);
        templateCreateRequest.title("Test Template");
        templateCreateRequest.ccRoles(List.of (
            "Manager"
        ));
        templateCreateRequest.files(List.of (
            new File("./example_signature_request.pdf")
        ));
        templateCreateRequest.fieldOptions(fieldOptions);
        templateCreateRequest.signerRoles(signerRoles);
        templateCreateRequest.formFieldsPerDocument(formFieldsPerDocument);
        templateCreateRequest.mergeFields(mergeFields);

        try
        {
            var response = new TemplateApi(config).templateCreate(
                templateCreateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplateApi#templateCreate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
