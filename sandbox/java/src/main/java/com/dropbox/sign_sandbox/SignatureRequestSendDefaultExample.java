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

public class SignatureRequestSendDefaultExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        config.setUsername("YOUR_API_KEY");
        // config.setAccessToken("YOUR_ACCESS_TOKEN");

        var fieldOptions = new SubFieldOptions();
        fieldOptions.dateFormat(SubFieldOptions.DateFormatEnum.DD_MM_YYYY);

        var signingOptions = new SubSigningOptions();
        signingOptions.defaultType(SubSigningOptions.DefaultTypeEnum.DRAW);
        signingOptions.draw(true);
        signingOptions.phone(false);
        signingOptions.type(true);
        signingOptions.upload(true);

        var signers1 = new SubSignatureRequestSigner();
        signers1.name("Jack");
        signers1.emailAddress("jack@example.com");
        signers1.order(0);

        var signers2 = new SubSignatureRequestSigner();
        signers2.name("Jill");
        signers2.emailAddress("jill@example.com");
        signers2.order(1);

        var signers = new ArrayList<SubSignatureRequestSigner>(List.of (
            signers1,
            signers2
        ));

        var signatureRequestSendRequest = new SignatureRequestSendRequest();
        signatureRequestSendRequest.message("Please sign this NDA and then we can discuss more. Let me know if you\nhave any questions.");
        signatureRequestSendRequest.subject("The NDA we talked about");
        signatureRequestSendRequest.testMode(true);
        signatureRequestSendRequest.title("NDA with Acme Co.");
        signatureRequestSendRequest.fileUrls(List.of (
            "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
        ));
        signatureRequestSendRequest.ccEmailAddresses(List.of (
            "lawyer1@dropboxsign.com",
            "lawyer2@dropboxsign.com"
        ));
        signatureRequestSendRequest.metadata(Map.of (
            "custom_id", 1234,
            "custom_text", "NDA #9"
        ));
        signatureRequestSendRequest.fieldOptions(fieldOptions);
        signatureRequestSendRequest.signingOptions(signingOptions);
        signatureRequestSendRequest.signers(signers);

        try
        {
            var response = new SignatureRequestApi(config).signatureRequestSend(
                signatureRequestSendRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequest#signatureRequestSend");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
