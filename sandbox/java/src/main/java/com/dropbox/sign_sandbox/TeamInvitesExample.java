package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.JSON;
import com.dropbox.sign.model.*;

import java.io.File;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class TeamInvitesExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        config.setUsername("YOUR_API_KEY");
        // config.setAccessToken("YOUR_ACCESS_TOKEN");

        try
        {
            var response = new TeamApi(config).teamInvites();

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling TeamApi#teamInvites");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
