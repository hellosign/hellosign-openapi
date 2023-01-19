import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.HttpBasicAuth;
import com.dropbox.sign.auth.HttpBearerAuth;
import com.dropbox.sign.model.*;

import java.io.File;
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

        SubFieldOptions subFieldOptions = new SubFieldOptions()
            .dateFormat(SubFieldOptions.DateFormatEnum.DDMMYYYY);

        SignatureRequestSendRequest data = new SignatureRequestSendRequest()
            .title("NDA with Acme Co.")
            .subject("The NDA we talked about")
            .message("Please sign this NDA and then we can discuss more. Let me know if you have any questions.")
            .signers(List.of(signer1, signer2))
            .ccEmailAddresses(List.of("lawyer@dropboxsign.com", "lawyer@dropboxsign.com"))
            .addFilesItem(new File("example_signature_request.pdf"));
            .metadata(Map.of("custom_id", 1234, "custom_text", "NDA #9"))
            .signingOptions(signingOptions)
            .fieldOptions(subFieldOptions)
            .testMode(true);

        try {
            SignatureRequestGetResponse result = signatureRequestApi.signatureRequestSend(data);
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
