import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

import java.util.List;

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

        var signerList1Signer = new SubSignatureRequestTemplateSigner()
            .role("Client")
            .name("George")
            .emailAddress("george@example.com")
            .pin("d79a3td");

        var signerList1CustomFields = new SubBulkSignerListCustomField()
            .name("company")
            .value("ABC Corp");

        var signerList1 = new SubBulkSignerList()
            .signers(List.of(signerList1Signer))
            .customFields(List.of(signerList1CustomFields));

        var signerList2Signer = new SubSignatureRequestTemplateSigner()
            .role("Client")
            .name("Mary")
            .emailAddress("mary@example.com")
            .pin("gd9as5b");

        var signerList2CustomFields = new SubBulkSignerListCustomField()
            .name("company")
            .value("123 Corp");

        var signerList2 = new SubBulkSignerList()
            .signers(List.of(signerList2Signer))
            .customFields(List.of(signerList2CustomFields));

        var cc1 = new SubCC()
            .role("Accounting")
            .emailAddress("accouting@email.com");

        var data = new SignatureRequestBulkSendWithTemplateRequest()
            .templateIds(List.of("c26b8a16784a872da37ea946b9ddec7c1e11dff6"))
            .subject("Purchase Order")
            .message("Glad we could come to an agreement.")
            .signerList(List.of(signerList1, signerList2))
            .ccs(List.of(cc1))
            .testMode(true);

        try {
            BulkSendJobSendResponse result = signatureRequestApi.signatureRequestBulkSendWithTemplate(data);
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
