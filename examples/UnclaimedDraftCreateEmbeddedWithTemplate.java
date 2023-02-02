import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

import java.util.List;

public class Example {
    public static void main(String[] args) {
        var apiClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        var apiKey = (HttpBasicAuth) apiClient
            .getAuthentication("api_key");
        apiKey.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        var oauth2 = (HttpBearerAuth) apiClient
            .getAuthentication("oauth2");
        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        var unclaimedDraftApi = new UnclaimedDraftApi(apiClient);

        var signer = new SubUnclaimedDraftTemplateSigner()
            .role("Client")
            .name("George")
            .emailAddress("george@example.com");

        var cc1 = new SubCC()
            .role("Accounting")
            .emailAddress("accouting@email.com");

        var data = new UnclaimedDraftCreateEmbeddedWithTemplateRequest()
            .clientId("1a659d9ad95bccd307ecad78d72192f8")
            .templateIds(List.of("c26b8a16784a872da37ea946b9ddec7c1e11dff6"))
            .requesterEmailAddress("jack@dropboxsign.com")
            .signers(List.of(signer))
            .ccs(List.of(cc1))
            .testMode(true);

        try {
            UnclaimedDraftCreateResponse result = unclaimedDraftApi.unclaimedDraftCreateEmbeddedWithTemplate(data);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling AccountApi#accountCreate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
