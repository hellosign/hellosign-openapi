import org.hellosign.openapi.ApiClient;
import org.hellosign.openapi.ApiException;
import org.hellosign.openapi.Configuration;
import org.hellosign.openapi.api.*;
import org.hellosign.openapi.auth.HttpBasicAuth;
import org.hellosign.openapi.auth.HttpBearerAuth;
import org.hellosign.openapi.model.*;
import org.hellosign.openapi.model.SubOAuth.ScopesEnum;

import java.io.File;
import java.util.Arrays;
import java.util.Collections;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();

        // Configure HTTP basic authorization: api_key
        HttpBasicAuth api_key = (HttpBasicAuth) defaultClient.getAuthentication("api_key");
        api_key.setUsername("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
/*      HttpBearerAuth oauth2 = (HttpBearerAuth) defaultClient.getAuthentication("oauth2");
        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");*/

        String clientId = "0dd3b823a682527788c4e40cb7b6f7e9";
        
        ApiAppApi apiInstance = new ApiAppApi(defaultClient);
        ApiAppUpdateRequest request = new ApiAppUpdateRequest()
                .name("My Production App")
                .domains(Collections.singletonList("example.com"))
                .oauth(new SubOAuth().callbackUrl("https://example.com/oauth")
                        .scopes(Arrays.asList(ScopesEnum.BASIC_ACCOUNT_INFO, ScopesEnum.REQUEST_SIGNATURE)))
                .whiteLabelingOptions(new SubWhiteLabelingOptions()
                        .primaryButtonColor("#00b3e6").primaryButtonTextColor("#ffffff"))
                .customLogoFile(new File("CustomLogoFile.png"));

        try {
            ApiAppGetResponse result = apiInstance.apiAppUpdate(clientId, request);
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