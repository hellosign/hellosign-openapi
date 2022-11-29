import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.auth.HttpBearerAuth;
import com.hellosign.openapi.model.*;

import java.io.File;
import java.util.Arrays;

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

        SignatureRequestApi api = new SignatureRequestApi(defaultClient);

        SubSignatureRequestSigner signer1 = new SubSignatureRequestSigner()
            .emailAddress("jack@example.com")
            .name("Jack")
            .order(0);

        SubSignatureRequestSigner signer2 = new SubSignatureRequestSigner()
            .emailAddress("jill@example.com")
            .name("Jill")
            .order(1);

        SubSigningOptions signingOptions = new SubSigningOptions()
            .draw(true)
            .type(true)
            .upload(true)
            .phone(true)
            .defaultType(SubSigningOptions.DefaultTypeEnum.DRAW);

        SignatureRequestCreateEmbeddedRequest data = new SignatureRequestCreateEmbeddedRequest()
            .clientId("ec64a202072370a737edf4a0eb7f4437")
            .title("NDA with Acme Co.")
            .subject("The NDA we talked about")
            .message("Please sign this NDA and then we can discuss more. Let me know if you have any questions.")
            .signers(Arrays.asList(signer1, signer2))
            .ccEmailAddresses(Arrays.asList("lawyer@hellosign.com", "lawyer@example.com"))
            .addFileItem(new File("example_signature_request.pdf"));
            .signingOptions(signingOptions)
            .testMode(true);

        try {
            SignatureRequestGetResponse result = api.signatureRequestCreateEmbedded(data);
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
