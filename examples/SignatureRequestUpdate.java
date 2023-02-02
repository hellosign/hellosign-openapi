import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

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

        var signatureRequestApi = new SignatureRequestApi(apiClient);

        var signatureRequestId = "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f";

        var data = new SignatureRequestUpdateRequest()
            .emailAddress("john@example.com")
            .signatureId("78caf2a1d01cd39cea2bc1cbb340dac3");

        try {
            SignatureRequestGetResponse result = signatureRequestApi.signatureRequestUpdate(signatureRequestId, data);
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
