import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.model.*;

import java.util.List;
import java.util.Map;

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

        UnclaimedDraftApi api = new UnclaimedDraftApi(defaultClient);

        SubUnclaimedDraftSigner signer1 = new SubUnclaimedDraftSigner()
            .emailAddress("jack@example.com")
            .name("Jack")
            .order(0);

        SubUnclaimedDraftSigner signer2 = new SubUnclaimedDraftSigner()
            .emailAddress("jill@example.com")
            .name("Jill")
            .order(1);

        SubSigningOptions subSigningOptions = new SubSigningOptions()
            .draw(true)
            .type(true)
            .upload(true)
            .phone(false)
            .defaultType(SubSigningOptions.DefaultTypeEnum.DRAW);

        SubFieldOptions subFieldOptions = new SubFieldOptions()
            .dateFormat(SubFieldOptions.DateFormatEnum.DD_MM_YYYY);

        UnclaimedDraftCreateRequest data = new UnclaimedDraftCreateRequest()
            .subject("The NDA we talked about")
            .type(UnclaimedDraftCreateRequest.TypeEnum.REQUEST_SIGNATURE)
            .message("Please sign this NDA and then we can discuss more. Let me know if you have any questions.")
            .signers(List.of(signer1, signer2))
            .ccEmailAddresses(List.of("lawyer@hellosign.com", "lawyer@example.com"))
            .fileUrl(List.of("https://app.hellosign.com/docs/example_signature_request.pdf"))
            .metadata(Map.of("custom_id", 1234, "custom_text", "NDA #9"))
            .signingOptions(subSigningOptions)
            .fieldOptions(subFieldOptions)
            .testMode(true);

        try {
            UnclaimedDraftCreateResponse result = api.unclaimedDraftCreate(data);
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