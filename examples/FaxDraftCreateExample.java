package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.FaxApi;
import com.dropbox.sign.auth.HttpBasicAuth;
import com.dropbox.sign.model.FaxDraftCreateRequest;
import com.dropbox.sign.model.SubEditorPageOptions;

import java.util.List;

public class FaxDraftCreateExample
{
    public static void main(String[] args)
    {
        var config = Configuration.getDefaultApiClient();
        ((HttpBasicAuth) config.getAuthentication("api_key")).setUsername("YOUR_API_KEY");

        var editorOptions = new SubEditorPageOptions();
        editorOptions.forceUploadPage(false);
        editorOptions.forceEditorPage(true);
        editorOptions.forceReviewPage(true);

        var faxDraftCreateRequest = new FaxDraftCreateRequest();
        faxDraftCreateRequest.clientId("b6b8e7deaf8f0b95c029dca049356d4a2cf9710a");
        faxDraftCreateRequest.fileUrls(List.of(
            "https://www.dropbox.com/s/ad9qnhbrjjn64tu/mutual-NDA-example.pdf?dl=1"
        ));
        faxDraftCreateRequest.recipients(List.of("+14155552671"));
        faxDraftCreateRequest.editorOptions(editorOptions);
        faxDraftCreateRequest.testMode(true);

        try
        {
            var response = new FaxApi(config).faxDraftCreate(
                faxDraftCreateRequest
            );

            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling FaxApi#faxDraftCreate");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
