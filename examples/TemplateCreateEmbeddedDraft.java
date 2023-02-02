import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

import java.io.File;
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

        var templateApi = new TemplateApi(apiClient);

        var role1 = new SubTemplateRole()
            .name("Client")
            .order(0);

        var role2 = new SubTemplateRole()
            .name("Witness")
            .order(1);

        var mergeField1 = new SubMergeField()
            .name("Full Name")
            .type(SubMergeField.TypeEnum.TEXT);

        var mergeField2 = new SubMergeField()
            .name("Is Registered?")
            .type(SubMergeField.TypeEnum.CHECKBOX);

        var subFieldOptions = new SubFieldOptions()
            .dateFormat(SubFieldOptions.DateFormatEnum.DDMMYYYY);

        var data = new TemplateCreateEmbeddedDraftRequest()
            .clientId("37dee8d8440c66d54cfa05d92c160882")
            .addFilesItem(new File("example_signature_request.pdf"))
            .title("Test Template")
            .subject("Please sign this document")
            .message("For your approval")
            .signerRoles(List.of(role1, role2))
            .ccRoles(List.of("Manager"))
            .mergeFields(List.of(mergeField1, mergeField2))
            .fieldOptions(subFieldOptions)
            .testMode(true);

        try {
            TemplateCreateEmbeddedDraftResponse result = templateApi.templateCreateEmbeddedDraft(data);
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
