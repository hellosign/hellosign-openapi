import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.model.*;

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

        TeamApi api = new TeamApi(defaultClient);

        String teamId = "4fea99bfcf2b26bfccf6cea3e127fb8bb74d8d9c";

        try {
            TeamMembersResponse result = api.teamMembers(teamId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling TeamApi#teamMembers");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
