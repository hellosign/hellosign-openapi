package com.dropbox.sign.api;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.TestHelper;
import com.dropbox.sign.model.*;
import com.fasterxml.jackson.databind.JsonNode;
import org.junit.Assert;
import org.junit.Test;

public class EmbeddedApiTest {
    @Test
    public void embeddedEditUrlTest() throws Exception {
        String templateId = "5de8179668f2033afac48da1868d0093bf133266";

        JsonNode expectedResponseData = TestHelper.getJsonContents(EmbeddedEditUrlResponse.class.getSimpleName());
        EmbeddedEditUrlResponse expectedResponse = EmbeddedEditUrlResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(EmbeddedEditUrlRequest.class.getSimpleName());

        EmbeddedEditUrlRequest request = EmbeddedEditUrlRequest.init(requestData.toString());

        EmbeddedApi api = new EmbeddedApi(apiClient);
        EmbeddedEditUrlResponse response = api.embeddedEditUrl(templateId, request);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void embeddedSignUrlTest() throws Exception {
        String signatureId = "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b";

        JsonNode expectedResponseData = TestHelper.getJsonContents(EmbeddedSignUrlResponse.class.getSimpleName());
        EmbeddedSignUrlResponse expectedResponse = EmbeddedSignUrlResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        EmbeddedApi api = new EmbeddedApi(apiClient);
        EmbeddedSignUrlResponse response = api.embeddedSignUrl(signatureId);

        Assert.assertEquals(expectedResponse, response);
    }
}
