package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

import java.io.File;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class EmbeddedEditUrlDefaultExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();

        var mergeFields = new ArrayList<SubMergeField>(List.of ());

        var embeddedEditUrlRequest = new EmbeddedEditUrlRequest();
        embeddedEditUrlRequest.ccRoles(List.of (
            ""
        ));
        embeddedEditUrlRequest.mergeFields(mergeFields);

        try
        {
            var response = new EmbeddedApi(config).embeddedEditUrl(
                "f57db65d3f933b5316d398057a36176831451a35",
                embeddedEditUrlRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling Embedded#embeddedEditUrl");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
