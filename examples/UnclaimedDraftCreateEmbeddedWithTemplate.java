import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.model.*;

import java.util.Arrays;
import java.util.List;

public class Example {
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

        UnclaimedDraftApi api = new UnclaimedDraftApi(defaultClient);

        SubUnclaimedDraftTemplateSigner signer = new SubUnclaimedDraftTemplateSigner()
            .role("Client")
            .name("George")
            .emailAddress("george@example.com");

        SubCC cc1 = new SubCC()
            .role("Accounting")
            .emailAddress("accouting@email.com");

        UnclaimedDraftCreateEmbeddedWithTemplateRequest data = new UnclaimedDraftCreateEmbeddedWithTemplateRequest()
            .clientId("1a659d9ad95bccd307ecad78d72192f8")
            .templateIds(Arrays.asList("c26b8a16784a872da37ea946b9ddec7c1e11dff6"))
            .requesterEmailAddress("jack@hellosign.com")
            .signers(Arrays.asList(signer))
            .ccs(Arrays.asList(cc1))
            .testMode(true);

        try {
            UnclaimedDraftCreateResponse result = api.unclaimedDraftCreateEmbeddedWithTemplate(data);
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
