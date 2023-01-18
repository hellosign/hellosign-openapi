import com.sun.tools.javac.util.List;
import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.HttpBasicAuth;
import com.dropbox.sign.model.*;

import java.io.File;

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

        TemplateApi templateApi = new TemplateApi(apiClient);

        SubTemplateRole role1 = new SubTemplateRole()
            .name("Client")
            .order(0);

        SubTemplateRole role2 = new SubTemplateRole()
            .name("Witness")
            .order(1);

        SubMergeField mergeField1 = new SubMergeField()
            .name("Full Name")
            .type(SubMergeField.TypeEnum.TEXT);

        SubMergeField mergeField2 = new SubMergeField()
            .name("Is Registered?")
            .type(SubMergeField.TypeEnum.CHECKBOX);

        SubFieldOptions subFieldOptions = new SubFieldOptions()
            .dateFormat(SubFieldOptions.DateFormatEnum.DDMMYYYY);

        TemplateCreateEmbeddedDraftRequest data = new TemplateCreateEmbeddedDraftRequest()
            .clientId("37dee8d8440c66d54cfa05d92c160882")
            .addFilesItem(new File("example_signature_request.pdf"));
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
