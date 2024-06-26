import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;

public class Example {
    public static void main(String[] args) {
        var apiClient = Configuration.getDefaultApiClient()
            .setApiKey("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        var apiClient = Configuration.getDefaultApiClient()
            .setBearerToken("YOUR_ACCESS_TOKEN");
        */

        var apiAppApi = new ApiAppApi(apiClient);

        var clientId = "0dd3b823a682527788c4e40cb7b6f7e9";

        try {
            apiAppApi.apiAppDelete(clientId);
        } catch (ApiException e) {
            System.err.println("Exception when calling AccountApi#accountCreate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
