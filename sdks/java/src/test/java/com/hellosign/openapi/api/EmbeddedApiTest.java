package com.hellosign.openapi.api;

import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.TestHelper;
import com.hellosign.openapi.model.*;
import org.junit.Assert;
import org.junit.Test;

public class EmbeddedApiTest {
    @Test
    public void embeddedEditUrlTest() throws Exception {
        String templateId = "5de8179668f2033afac48da1868d0093bf133266";

        EmbeddedEditUrlRequest request = TestHelper.getFixtureData(
            EmbeddedEditUrlRequest.class,
            "default"
        );
        EmbeddedEditUrlResponse expected = TestHelper.getFixtureData(
            EmbeddedEditUrlResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        EmbeddedApi api = new EmbeddedApi(apiClient);
        EmbeddedEditUrlResponse actual = api.embeddedEditUrl(templateId, request);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void embeddedSignUrlTest() throws Exception {
        String signatureId = "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b";

        EmbeddedSignUrlResponse expected = TestHelper.getFixtureData(
            EmbeddedSignUrlResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        EmbeddedApi api = new EmbeddedApi(apiClient);
        EmbeddedSignUrlResponse actual = api.embeddedSignUrl(signatureId);
        Assert.assertEquals(expected, actual);
    }
}
