package com.dropbox.sign.api;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.TestHelper;
import com.dropbox.sign.model.*;
import com.fasterxml.jackson.databind.JsonNode;
import org.junit.Assert;
import org.junit.Test;
import org.mockito.Mockito;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;

import java.io.File;
import java.util.Arrays;
import java.util.HashMap;

public class SignatureRequestApiTest {
    @Test
    public void initAcceptsHashMap() throws Exception {
        SignatureRequestSendRequest data = SignatureRequestSendRequest.init(
            new HashMap<String, Object>()  {{
                put("title", "NDA with Acme Co.");
                put("subject", "The NDA we talked about");
                put("message", "Please sign this NDA and then we can discuss more.");
                put("signers", Arrays.asList
                    (
                    new HashMap<String, Object>()  {{
                        put("email_address", "jill@example.com");
                        put("name", "Jill");
                        put("order", 1);
                    }}
                ));
                put("form_fields_per_document", Arrays.asList(
                    new HashMap<String, Object>()  {{
                        put("type", "signature");
                        put("document_index", 0);
                        put("api_id", "4688957689");
                        put("name", "signature1");
                        put("x", 5);
                        put("y", 7);
                        put("width", 60);
                        put("height", 30);
                        put("required", true);
                        put("signer", 0);
                        put("page", 1);
                    }}
                ));
            }}
        );

        assert data.getFormFieldsPerDocument() != null;
        Assert.assertEquals(
            "signature",
            data.getFormFieldsPerDocument().get(0).getType()
        );
    }

    @Test
    public void signatureRequestBulkCreateEmbeddedWithTemplateTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(BulkSendJobSendResponse.class.getSimpleName());
        BulkSendJobSendResponse expectedResponse = BulkSendJobSendResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(SignatureRequestBulkCreateEmbeddedWithTemplateRequest.class.getSimpleName());

        SignatureRequestBulkCreateEmbeddedWithTemplateRequest request = SignatureRequestBulkCreateEmbeddedWithTemplateRequest.init(requestData.toString());
        request.signerFile(new File("test_fixtures/bulk-send-sample.csv"));

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        BulkSendJobSendResponse response = api.signatureRequestBulkCreateEmbeddedWithTemplate(request);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void signatureRequestBulkSendWithTemplateTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(BulkSendJobSendResponse.class.getSimpleName());
        BulkSendJobSendResponse expectedResponse = BulkSendJobSendResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(SignatureRequestBulkSendWithTemplateRequest.class.getSimpleName());

        SignatureRequestBulkSendWithTemplateRequest request = SignatureRequestBulkSendWithTemplateRequest.init(requestData.toString());
        request.signerFile(new File("test_fixtures/bulk-send-sample.csv"));

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        BulkSendJobSendResponse response = api.signatureRequestBulkSendWithTemplate(request);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void signatureRequestCancelTest() {
        //String signatureRequestId = null;
        //api.signatureRequestCancel(signatureRequestId);
        // TODO: test validations
    }

    @Test
    public void signatureRequestCreateEmbeddedTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(SignatureRequestGetResponse.class.getSimpleName());
        SignatureRequestGetResponse expectedResponse = SignatureRequestGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(SignatureRequestCreateEmbeddedRequest.class.getSimpleName());

        SignatureRequestCreateEmbeddedRequest request = SignatureRequestCreateEmbeddedRequest.init(requestData.toString());
        request.addFilesItem(new File("test_fixtures/pdf-sample.pdf"));

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        SignatureRequestGetResponse response = api.signatureRequestCreateEmbedded(request);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void signatureRequestCreateEmbeddedWithTemplateTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(SignatureRequestGetResponse.class.getSimpleName());
        SignatureRequestGetResponse expectedResponse = SignatureRequestGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(SignatureRequestCreateEmbeddedWithTemplateRequest.class.getSimpleName());

        SignatureRequestCreateEmbeddedWithTemplateRequest request = SignatureRequestCreateEmbeddedWithTemplateRequest.init(requestData.toString());
        request.addFilesItem(new File("test_fixtures/pdf-sample.pdf"));

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        SignatureRequestGetResponse response = api.signatureRequestCreateEmbeddedWithTemplate(request);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void signatureRequestFilesTest() {
        // TODO: test validations
    }

    @Test
    public void signatureRequestGetTest() throws Exception {
        String signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

        JsonNode expectedResponseData = TestHelper.getJsonContents(SignatureRequestGetResponse.class.getSimpleName());
        SignatureRequestGetResponse expectedResponse = SignatureRequestGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        SignatureRequestGetResponse response = api.signatureRequestGet(signatureRequestId);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void signatureRequestListTest() throws Exception {
        String accountId = "all";

        JsonNode expectedResponseData = TestHelper.getJsonContents(SignatureRequestListResponse.class.getSimpleName());
        SignatureRequestListResponse expectedResponse = SignatureRequestListResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        SignatureRequestListResponse response = api.signatureRequestList(
            accountId,
            1,
            20,
            null
        );

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void signatureRequestReleaseHoldTest() throws Exception {
        String signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

        JsonNode expectedResponseData = TestHelper.getJsonContents(SignatureRequestGetResponse.class.getSimpleName());
        SignatureRequestGetResponse expectedResponse = SignatureRequestGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        SignatureRequestGetResponse response = api.signatureRequestReleaseHold(signatureRequestId);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void signatureRequestRemindTest() throws Exception {
        String signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

        JsonNode expectedResponseData = TestHelper.getJsonContents(SignatureRequestGetResponse.class.getSimpleName());
        SignatureRequestGetResponse expectedResponse = SignatureRequestGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(SignatureRequestRemindRequest.class.getSimpleName());

        SignatureRequestRemindRequest request = SignatureRequestRemindRequest.init(requestData.toString());

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        SignatureRequestGetResponse response = api.signatureRequestRemind(signatureRequestId, request);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void signatureRequestRemoveTest() {
        //String signatureRequestId = null;
        //api.signatureRequestRemove(signatureRequestId);
        // TODO: test validations
    }

    @Test
    public void signatureRequestSendTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(SignatureRequestGetResponse.class.getSimpleName());
        SignatureRequestGetResponse expectedResponse = SignatureRequestGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(SignatureRequestSendRequest.class.getSimpleName());

        SignatureRequestSendRequest request = SignatureRequestSendRequest.init(requestData.toString());
        request.addFilesItem(new File("test_fixtures/pdf-sample.pdf"));

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        SignatureRequestGetResponse response = api.signatureRequestSend(request);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void signatureRequestSendFileForcesMultipartFormDataTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(SignatureRequestGetResponse.class.getSimpleName());
        SignatureRequestGetResponse expectedResponse = SignatureRequestGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(SignatureRequestSendRequest.class.getSimpleName());

        SignatureRequestSendRequest request = SignatureRequestSendRequest.init(requestData.toString());
        request.addFilesItem(new File("test_fixtures/pdf-sample.pdf"));

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        api.signatureRequestSend(request);

        Mockito.verify(apiClient).invokeAPI(
            any(),
            any(),
            any(),
            any(),
            any(),
            any(),
            any(),
            any(),
            any(),
            eq("multipart/form-data"),
            any(),
            any(),
            eq(false)
        );
    }

    @Test
    public void signatureRequestSendNoFileForcesApplicationJsonTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(SignatureRequestGetResponse.class.getSimpleName());
        SignatureRequestGetResponse expectedResponse = SignatureRequestGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(SignatureRequestSendRequest.class.getSimpleName());

        SignatureRequestSendRequest request = SignatureRequestSendRequest.init(requestData.toString());

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        api.signatureRequestSend(request);

        Mockito.verify(apiClient).invokeAPI(
            any(),
            any(),
            any(),
            any(),
            any(),
            any(),
            any(),
            any(),
            any(),
            eq("application/json"),
            any(),
            any(),
            eq(false)
        );
    }

    @Test
    public void signatureRequestSendWithTemplateTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(SignatureRequestGetResponse.class.getSimpleName());
        SignatureRequestGetResponse expectedResponse = SignatureRequestGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(SignatureRequestSendWithTemplateRequest.class.getSimpleName());

        SignatureRequestSendWithTemplateRequest request = SignatureRequestSendWithTemplateRequest.init(requestData.toString());

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        SignatureRequestGetResponse response = api.signatureRequestSendWithTemplate(request);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void signatureRequestUpdateTest() throws Exception {
        String signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

        JsonNode expectedResponseData = TestHelper.getJsonContents(SignatureRequestGetResponse.class.getSimpleName());
        SignatureRequestGetResponse expectedResponse = SignatureRequestGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(SignatureRequestUpdateRequest.class.getSimpleName());

        SignatureRequestUpdateRequest request = SignatureRequestUpdateRequest.init(requestData.toString());

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        SignatureRequestGetResponse response = api.signatureRequestUpdate(signatureRequestId, request);

        Assert.assertEquals(expectedResponse, response);
    }
}
