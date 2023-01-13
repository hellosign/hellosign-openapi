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

        BulkSendJobApi bulkSendJobApi = new BulkSendJobApi(apiClient);

        String bulkSendJobId = "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174";

        try {
            BulkSendJobGetResponse result = bulkSendJobApi.bulkSendJobGet(bulkSendJobId);
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
