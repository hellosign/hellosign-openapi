import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.HttpBasicAuth;
import com.dropbox.sign.auth.HttpBearerAuth;
import com.dropbox.sign.model.*;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

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

        SignatureRequestApi signatureRequestApi = new SignatureRequestApi(apiClient);

        SubSignatureRequestTemplateSigner signer1 = new SubSignatureRequestTemplateSigner()
            .role("Client")
            .emailAddress("george@example.com")
            .name("George");

        SubCC cc1 = new SubCC()
            .role("Accounting")
            .emailAddress("accouting@emaple.com");

        SubCustomField customField1 = new SubCustomField()
            .name("Cost")
            .value("$20,000")
            .editor("Client")
            .required(true);

        SubSigningOptions signingOptions = new SubSigningOptions()
            .draw(true)
            .type(true)
            .upload(true)
            .phone(false)
            .defaultType(SubSigningOptions.DefaultTypeEnum.DRAW);

        SignatureRequestSendWithTemplateRequest data = new SignatureRequestSendWithTemplateRequest()
            .templateIds(List.of("c26b8a16784a872da37ea946b9ddec7c1e11dff6"))
            .subject("Purchase Order")
            .message("Glad we could come to an agreement.")
            .signers(List.of(signer1))
            .ccs(List.of(cc1))
            .customFields(List.of(customField1))
            .signingOptions(signingOptions)
            .testMode(true);

        try {
            SignatureRequestGetResponse result = signatureRequestApi.signatureRequestSendWithTemplate(data);
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
