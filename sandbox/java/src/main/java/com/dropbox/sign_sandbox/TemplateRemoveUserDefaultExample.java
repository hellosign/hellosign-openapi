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

public class TemplateRemoveUserDefaultExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();

        var templateRemoveUserRequest = new TemplateRemoveUserRequest();
        templateRemoveUserRequest.emailAddress("george@dropboxsign.com");

        try
        {
            var response = new TemplateApi(config).templateRemoveUser(
                "f57db65d3f933b5316d398057a36176831451a35",
                templateRemoveUserRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling Template#templateRemoveUser");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
