package com.dropbox.sign.api;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.TestHelper;
import com.dropbox.sign.model.*;
import com.fasterxml.jackson.databind.JsonNode;
import org.junit.Assert;
import org.junit.Test;

import java.io.File;

public class UnclaimedDraftApiTest {
    @Test
    public void unclaimedDraftCreateTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(UnclaimedDraftCreateResponse.class.getSimpleName());
        UnclaimedDraftCreateResponse expectedResponse = UnclaimedDraftCreateResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(UnclaimedDraftCreateRequest.class.getSimpleName());

        UnclaimedDraftCreateRequest request = UnclaimedDraftCreateRequest.init(requestData.toString());
        request.addFilesItem(new File("test_fixtures/pdf-sample.pdf"));

        UnclaimedDraftApi api = new UnclaimedDraftApi(apiClient);
        UnclaimedDraftCreateResponse response = api.unclaimedDraftCreate(request);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void unclaimedDraftCreateEmbeddedTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(UnclaimedDraftCreateResponse.class.getSimpleName());
        UnclaimedDraftCreateResponse expectedResponse = UnclaimedDraftCreateResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(UnclaimedDraftCreateEmbeddedRequest.class.getSimpleName());

        UnclaimedDraftCreateEmbeddedRequest request = UnclaimedDraftCreateEmbeddedRequest.init(requestData.toString());
        request.addFilesItem(new File("test_fixtures/pdf-sample.pdf"));

        UnclaimedDraftApi api = new UnclaimedDraftApi(apiClient);
        UnclaimedDraftCreateResponse response = api.unclaimedDraftCreateEmbedded(request);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void unclaimedDraftCreateEmbeddedWithTemplateTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(UnclaimedDraftCreateResponse.class.getSimpleName());
        UnclaimedDraftCreateResponse expectedResponse = UnclaimedDraftCreateResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(UnclaimedDraftCreateEmbeddedWithTemplateRequest.class.getSimpleName());

        UnclaimedDraftCreateEmbeddedWithTemplateRequest request = UnclaimedDraftCreateEmbeddedWithTemplateRequest.init(requestData.toString());
        request.addFilesItem(new File("test_fixtures/pdf-sample.pdf"));

        UnclaimedDraftApi api = new UnclaimedDraftApi(apiClient);
        UnclaimedDraftCreateResponse response = api.unclaimedDraftCreateEmbeddedWithTemplate(request);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void unclaimedDraftEditAndResendTest() throws Exception {
        String signatureRequestId = "2f9781e1a83jdja934d808c153c2e1d3df6f8f2f";

        JsonNode expectedResponseData = TestHelper.getJsonContents(UnclaimedDraftCreateResponse.class.getSimpleName());
        UnclaimedDraftCreateResponse expectedResponse = UnclaimedDraftCreateResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(UnclaimedDraftEditAndResendRequest.class.getSimpleName());

        UnclaimedDraftEditAndResendRequest request = UnclaimedDraftEditAndResendRequest.init(requestData.toString());

        UnclaimedDraftApi api = new UnclaimedDraftApi(apiClient);
        UnclaimedDraftCreateResponse response = api.unclaimedDraftEditAndResend(signatureRequestId, request);

        Assert.assertEquals(expectedResponse, response);
    }
}
