import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.Configuration;
import com.hellosign.openapi.api.*;
import com.hellosign.openapi.auth.HttpBasicAuth;
import com.hellosign.openapi.auth.HttpBearerAuth;
import com.hellosign.openapi.model.*;

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

        SubSignatureRequestTemplateSigner signerList1Signer = new SubSignatureRequestTemplateSigner()
            .role("Client")
            .name("George")
            .emailAddress("george@example.com")
            .pin("d79a3td");

        SubBulkSignerListCustomField signerList1CustomFields = new SubBulkSignerListCustomField()
            .name("company")
            .value("ABC Corp");

        SubBulkSignerList signerList1 = new SubBulkSignerList()
            .signers(Arrays.asList(signerList1Signer))
            .customFields(Arrays.asList(signerList1CustomFields));

        SubSignatureRequestTemplateSigner signerList2Signer = new SubSignatureRequestTemplateSigner()
            .role("Client")
            .name("Mary")
            .emailAddress("mary@example.com")
            .pin("gd9as5b");

        SubBulkSignerListCustomField signerList2CustomFields = new SubBulkSignerListCustomField()
            .name("company")
            .value("123 Corp");

        SubBulkSignerList signerList2 = new SubBulkSignerList()
            .signers(Arrays.asList(signerList2Signer))
            .customFields(Arrays.asList(signerList2CustomFields));

        SubCC cc1 = new SubCC().role("Accounting")
            .emailAddress("accouting@email.com");

        SignatureRequestBulkCreateEmbeddedWithTemplateRequest data = new SignatureRequestBulkCreateEmbeddedWithTemplateRequest()
            .clientId("1a659d9ad95bccd307ecad78d72192f8")
            .templateIds(Arrays.asList("c26b8a16784a872da37ea946b9ddec7c1e11dff6"))
            .subject("Purchase Order")
            .message("Glad we could come to an agreement.")
            .signerList(Arrays.asList(signerList1, signerList2))
            .ccs(Arrays.asList(cc1))
            .testMode(true);

        try {
            BulkSendJobSendResponse result = api.signatureRequestBulkCreateEmbeddedWithTemplate(data);
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
