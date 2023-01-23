package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.AccountApi;
import com.dropbox.sign.auth.HttpBasicAuth;
import com.dropbox.sign.model.AccountCreateRequest;
import com.dropbox.sign.model.AccountCreateResponse;
import com.dropbox.sign.model.SignatureRequestCreateEmbeddedRequest;

public class Main {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient
            .getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        AccountApi api = new AccountApi(defaultClient);

        SignatureRequestCreateEmbeddedRequest data = new SignatureRequestCreateEmbeddedRequest()
            .clientId("e56f0a209a842cb59f5563adafa95434")
            .title("NDA with Acme Co.")
            .subject("The NDA we talked about")
            .addSignersItem(signer1)
            .files(List.of(f1, f2))
            .addFilesItem(new File("NDA.pdf"))
            .testMode(true);

        AccountCreateRequest data = new AccountCreateRequest()
            .emailAddress("newuser@dropboxsign.com");

        try {
            AccountCreateResponse result = api.accountCreate(data);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling Dropbox Sign API");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
