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

public class UnclaimedDraftCreateFormFieldRulesExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");
        // ((HttpBearerAuth) config.getAuthentication("oauth2")).setBearerToken("YOUR_ACCESS_TOKEN");

        var formFieldRules1Triggers1 = new SubFormFieldRuleTrigger();
        formFieldRules1Triggers1.id("uniqueIdHere_1");
        formFieldRules1Triggers1.operator(SubFormFieldRuleTrigger.OperatorEnum.IS);
        formFieldRules1Triggers1.value("foo");

        var formFieldRules1Triggers = new ArrayList<SubFormFieldRuleTrigger>(List.of (
            formFieldRules1Triggers1
        ));

        var formFieldRules1Actions1 = new SubFormFieldRuleAction();
        formFieldRules1Actions1.hidden(true);
        formFieldRules1Actions1.type(SubFormFieldRuleAction.TypeEnum.CHANGE_FIELD_VISIBILITY);
        formFieldRules1Actions1.fieldId("uniqueIdHere_2");

        var formFieldRules1Actions = new ArrayList<SubFormFieldRuleAction>(List.of (
            formFieldRules1Actions1
        ));

        var formFieldRules1 = new SubFormFieldRule();
        formFieldRules1.id("rule_1");
        formFieldRules1.triggerOperator("AND");
        formFieldRules1.triggers(formFieldRules1Triggers);
        formFieldRules1.actions(formFieldRules1Actions);

        var formFieldRules = new ArrayList<SubFormFieldRule>(List.of (
            formFieldRules1
        ));

        var formFieldsPerDocument1 = new SubFormFieldsPerDocumentText();
        formFieldsPerDocument1.documentIndex(0);
        formFieldsPerDocument1.apiId("uniqueIdHere_1");
        formFieldsPerDocument1.type("text");
        formFieldsPerDocument1.required(true);
        formFieldsPerDocument1.signer("0");
        formFieldsPerDocument1.width(100);
        formFieldsPerDocument1.height(16);
        formFieldsPerDocument1.x(112);
        formFieldsPerDocument1.y(328);
        formFieldsPerDocument1.name("");
        formFieldsPerDocument1.page(1);
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

        var unclaimedDraftCreateRequest = new UnclaimedDraftCreateRequest();
        unclaimedDraftCreateRequest.type(UnclaimedDraftCreateRequest.TypeEnum.REQUEST_SIGNATURE);
        unclaimedDraftCreateRequest.testMode(false);
        unclaimedDraftCreateRequest.fileUrls(List.of (
            "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
        ));
        unclaimedDraftCreateRequest.formFieldRules(formFieldRules);
        unclaimedDraftCreateRequest.formFieldsPerDocument(formFieldsPerDocument);

        try
        {
            var response = new UnclaimedDraftApi(config).unclaimedDraftCreate(
                unclaimedDraftCreateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling UnclaimedDraftApi#unclaimedDraftCreate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
