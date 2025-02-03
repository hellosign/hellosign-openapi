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

public class AccountVerifyDefaultExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();

        var accountVerifyRequest = new AccountVerifyRequest();
        accountVerifyRequest.emailAddress("some_user@dropboxsign.com");

        try
        {
            var response = new AccountApi(config).accountVerify(
                accountVerifyRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling Account#accountVerify");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
