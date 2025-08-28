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

public class TemplateUpdateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var signerExperience = new SubSignerExperience();
        signerExperience.formView(SubSignerExperience.FormViewEnum.DISABLED);

        var formFields1 = new SubUpdateFormField();
        formFields1.apiId("uniqueIdHere_1");
        formFields1.name("New name 1");

        var formFields2 = new SubUpdateFormField();
        formFields2.apiId("uniqueIdHere_2");
        formFields2.name("New name 2");

        var formFields = new ArrayList<SubUpdateFormField>(List.of (
            formFields1,
            formFields2
        ));

        var templateUpdateRequest = new TemplateUpdateRequest();
        templateUpdateRequest.title("Test Title");
        templateUpdateRequest.subject("Test Subject");
        templateUpdateRequest.message("Test Message");
        templateUpdateRequest.ccRoles(List.of (
            "CC Role 1",
            "CC Role 2"
        ));
        templateUpdateRequest.signerExperience(signerExperience);
        templateUpdateRequest.formFields(formFields);

        try
        {
            var response = new TemplateApi(config).templateUpdate(
                "f57db65d3f933b5316d398057a36176831451a35", // templateId
                templateUpdateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling TemplateApi#templateUpdate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
