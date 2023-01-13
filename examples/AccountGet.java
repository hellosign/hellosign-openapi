import com.hellosign.ApiClient;
import com.hellosign.ApiException;
import com.hellosign.Configuration;
import com.hellosign.api.*;
import com.hellosign.auth.HttpBasicAuth;
import com.hellosign.auth.HttpBearerAuth;
import com.hellosign.model.*;

public class Example {
    public static void main(String[] args) {
        ApiClient apiClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth apiKey = (HttpBasicAuth) apiClient
            .getAuthentication("api_key");
        apiKey.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        HttpBearerAuth oauth2 = (HttpBearerAuth) apiClient
            .getAuthentication("oauth2");

        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        AccountApi accountApi = new AccountApi(apiClient);

        try {
            AccountGetResponse result = accountApi.accountGet(null, "jack@example.com");
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
