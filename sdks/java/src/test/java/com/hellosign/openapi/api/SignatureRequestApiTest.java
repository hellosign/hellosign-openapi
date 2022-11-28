package com.hellosign.openapi.api;

import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.TestHelper;
import com.hellosign.openapi.model.*;
import org.junit.Assert;
import org.junit.Test;
import org.mockito.Mockito;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;

import java.io.File;

public class SignatureRequestApiTest {
    @Test
    public void signatureRequestBulkCreateEmbeddedWithTemplateTest() throws Exception {
        SignatureRequestBulkCreateEmbeddedWithTemplateRequest request = TestHelper.getFixtureData(
            SignatureRequestBulkCreateEmbeddedWithTemplateRequest.class,
            "default"
        );
        request.signerFile(new File("test_fixtures/bulk-send-sample.csv"));

        BulkSendJobSendResponse expected = TestHelper.getFixtureData(
            BulkSendJobSendResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        BulkSendJobSendResponse actual = api.signatureRequestBulkCreateEmbeddedWithTemplate(request);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void signatureRequestBulkSendWithTemplateTest() throws Exception {
        SignatureRequestBulkSendWithTemplateRequest request = TestHelper.getFixtureData(
            SignatureRequestBulkSendWithTemplateRequest.class,
            "default"
        );
        request.signerFile(new File("test_fixtures/bulk-send-sample.csv"));

        BulkSendJobSendResponse expected = TestHelper.getFixtureData(
            BulkSendJobSendResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        BulkSendJobSendResponse actual = api.signatureRequestBulkSendWithTemplate(request);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void signatureRequestCancelTest() {
        //String signatureRequestId = null;
        //api.signatureRequestCancel(signatureRequestId);
        // TODO: test validations
    }

    @Test
    public void signatureRequestCreateEmbeddedTest() throws Exception {
        SignatureRequestCreateEmbeddedRequest request = TestHelper.getFixtureData(
            SignatureRequestCreateEmbeddedRequest.class,
            "default"
        );
        request.addFileItem(new File("test_fixtures/pdf-sample.pdf"));

        SignatureRequestGetResponse expected = TestHelper.getFixtureData(
            SignatureRequestGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        SignatureRequestGetResponse actual = api.signatureRequestCreateEmbedded(request);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void signatureRequestCreateEmbeddedWithTemplateTest() throws Exception {
        SignatureRequestCreateEmbeddedWithTemplateRequest request = TestHelper.getFixtureData(
            SignatureRequestCreateEmbeddedWithTemplateRequest.class,
            "default"
        );
        request.addFileItem(new File("test_fixtures/pdf-sample.pdf"));

        SignatureRequestGetResponse expected = TestHelper.getFixtureData(
            SignatureRequestGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        SignatureRequestGetResponse actual = api.signatureRequestCreateEmbeddedWithTemplate(request);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void signatureRequestFilesTest() {
        // TODO: test validations
    }

    @Test
    public void signatureRequestGetTest() throws Exception {
        String signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

        SignatureRequestGetResponse expected = TestHelper.getFixtureData(
            SignatureRequestGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        SignatureRequestGetResponse actual = api.signatureRequestGet(signatureRequestId);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void signatureRequestListTest() throws Exception {
        String accountId = "all";
        SignatureRequestListResponse expected = TestHelper.getFixtureData(
            SignatureRequestListResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        SignatureRequestListResponse actual = api.signatureRequestList(
            accountId,
            1,
            20,
            null
        );
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void signatureRequestReleaseHoldTest() throws Exception {
        String signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

        SignatureRequestGetResponse expected = TestHelper.getFixtureData(
            SignatureRequestGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        SignatureRequestGetResponse actual = api.signatureRequestReleaseHold(signatureRequestId);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void signatureRequestRemindTest() throws Exception {
        String signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

        SignatureRequestRemindRequest request = TestHelper.getFixtureData(
            SignatureRequestRemindRequest.class,
            "default"
        );
        SignatureRequestGetResponse expected = TestHelper.getFixtureData(
            SignatureRequestGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        SignatureRequestGetResponse actual = api.signatureRequestRemind(signatureRequestId, request);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void signatureRequestRemoveTest() {
        //String signatureRequestId = null;
        //api.signatureRequestRemove(signatureRequestId);
        // TODO: test validations
    }

    @Test
    public void signatureRequestSendTest() throws Exception {
        SignatureRequestSendRequest request = TestHelper.getFixtureData(
            SignatureRequestSendRequest.class,
            "default"
        );
        request.addFileItem(new File("test_fixtures/pdf-sample.pdf"));

        SignatureRequestGetResponse expected = TestHelper.getFixtureData(
            SignatureRequestGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        SignatureRequestGetResponse actual = api.signatureRequestSend(request);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void signatureRequestSendFileForcesMultipartFormDataTest() throws Exception {
        SignatureRequestSendRequest request = TestHelper.getFixtureData(
            SignatureRequestSendRequest.class,
            "default"
        );
        request.addFileItem(new File("test_fixtures/pdf-sample.pdf"));

        SignatureRequestGetResponse expected = TestHelper.getFixtureData(
            SignatureRequestGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

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
        SignatureRequestSendRequest request = TestHelper.getFixtureData(
            SignatureRequestSendRequest.class,
            "default"
        );
        SignatureRequestGetResponse expected = TestHelper.getFixtureData(
            SignatureRequestGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

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
        SignatureRequestSendWithTemplateRequest request = TestHelper.getFixtureData(
            SignatureRequestSendWithTemplateRequest.class,
            "default"
        );
        SignatureRequestGetResponse expected = TestHelper.getFixtureData(
            SignatureRequestGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        SignatureRequestGetResponse actual = api.signatureRequestSendWithTemplate(request);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void signatureRequestUpdateTest() throws Exception {
        String signatureRequestId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

        SignatureRequestUpdateRequest request = TestHelper.getFixtureData(
            SignatureRequestUpdateRequest.class,
            "default"
        );
        SignatureRequestGetResponse expected = TestHelper.getFixtureData(
            SignatureRequestGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        SignatureRequestApi api = new SignatureRequestApi(apiClient);
        SignatureRequestGetResponse actual = api.signatureRequestUpdate(signatureRequestId, request);
        Assert.assertEquals(expected, actual);
    }
}
