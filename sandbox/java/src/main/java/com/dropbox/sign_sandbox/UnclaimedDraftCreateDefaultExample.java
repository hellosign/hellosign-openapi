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

public class UnclaimedDraftCreateDefaultExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();

        var signers1 = new SubUnclaimedDraftSigner();
        signers1.name("Jack");
        signers1.emailAddress("jack@example.com");
        signers1.order(0);

        var signers = new ArrayList<SubUnclaimedDraftSigner>(List.of (
            signers1
        ));

        var unclaimedDraftCreateRequest = new UnclaimedDraftCreateRequest();
        unclaimedDraftCreateRequest.type(UnclaimedDraftCreateRequest.TypeEnum.REQUEST_SIGNATURE);
        unclaimedDraftCreateRequest.testMode(true);
        unclaimedDraftCreateRequest.fileUrls(List.of (
            "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
        ));
        unclaimedDraftCreateRequest.signers(signers);

        try
        {
            var response = new UnclaimedDraftApi(config).unclaimedDraftCreate(
                unclaimedDraftCreateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling UnclaimedDraft#unclaimedDraftCreate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
