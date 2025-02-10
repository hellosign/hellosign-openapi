import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

public class Example {
    public static void main(String[] args) {
        var apiClient = Configuration.getDefaultApiClient();

        var oAuthApi = new OAuthApi(apiClient);

        var data = new OAuthTokenGenerateRequest()
            .state("900e06e2")
            .code("1b0d28d90c86c141")
            .clientId("cc91c61d00f8bb2ece1428035716b")
            .clientSecret("1d14434088507ffa390e6f5528465");

        try {
            OAuthTokenResponse result = oAuthApi.oauthTokenGenerate(data);
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
