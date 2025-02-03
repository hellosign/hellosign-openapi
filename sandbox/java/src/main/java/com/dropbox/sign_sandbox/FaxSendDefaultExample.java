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

public class FaxSendDefaultExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();

        var faxSendRequest = new FaxSendRequest();
        faxSendRequest.recipient("16690000001");
        faxSendRequest.sender("16690000000");
        faxSendRequest.testMode(true);
        faxSendRequest.coverPageTo("Jill Fax");
        faxSendRequest.coverPageFrom("Faxer Faxerson");
        faxSendRequest.coverPageMessage("I'm sending you a fax!");
        faxSendRequest.title("This is what the fax is about!");
        faxSendRequest.fileUrls(List.of (
            "https://api.hellosign.com/v3/fax/files/2b388914e3ae3b738bd4e2ee2850c677e6dc53d2"
        ));

        try
        {
            var response = new FaxApi(config).faxSend(
                faxSendRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling Fax#faxSend");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
