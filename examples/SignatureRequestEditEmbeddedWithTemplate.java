import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

import java.util.List;

public class Example {
    public static void main(String[] args) {
        var apiClient = Configuration.getDefaultApiClient()
            .setApiKey("YOUR_API_KEY");

        // or, configure Bearer (JWT) authorization: oauth2
        /*
        var oauth2 = (HttpBearerAuth) apiClient
            .getAuthentication("oauth2");
        oauth2.setBearerToken("YOUR_ACCESS_TOKEN");
        */

        var signatureRequestApi = new SignatureRequestApi(apiClient);

        var signer1 = new SubSignatureRequestTemplateSigner()
            .role("Client")
            .name("George");

        var subSigningOptions = new SubSigningOptions()
            .draw(true)
            .type(true)
            .upload(true)
            .phone(false)
            .defaultType(SubSigningOptions.DefaultTypeEnum.DRAW);

        var signatureRequestId = "2f9781e1a8e2045224d808c153c2e1d3df6f8f2f";

        var data = new SignatureRequestEditEmbeddedWithTemplateRequest()
            .clientId("ec64a202072370a737edf4a0eb7f4437")
            .templateIds(List.of("c26b8a16784a872da37ea946b9ddec7c1e11dff6"))
            .subject("Purchase Order")
            .message("Glad we could come to an agreement.")
            .signers(List.of(signer1))
            .signingOptions(subSigningOptions)
            .testMode(true);

        try {
            SignatureRequestGetResponse result = signatureRequestApi.signatureRequestEditEmbeddedWithTemplate(
                signatureRequestId,
                data
            );
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling SignatureRequestApi#editEmbeddedWithTemplate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
