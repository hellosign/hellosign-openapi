package com.hellosign.openapi.api;

import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.TestHelper;
import com.hellosign.openapi.model.*;
import org.junit.Assert;
import org.junit.Test;

import java.io.File;

public class UnclaimedDraftApiTest {
    @Test
    public void unclaimedDraftCreateTest() throws Exception {
        UnclaimedDraftCreateRequest request = TestHelper.getFixtureData(
            UnclaimedDraftCreateRequest.class,
            "default"
        );
        request.addFileItem(new File("test_fixtures/pdf-sample.pdf"));

        UnclaimedDraftCreateResponse expected = TestHelper.getFixtureData(
            UnclaimedDraftCreateResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        UnclaimedDraftApi api = new UnclaimedDraftApi(apiClient);
        UnclaimedDraftCreateResponse actual = api.unclaimedDraftCreate(request);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void unclaimedDraftCreateEmbeddedTest() throws Exception {
        UnclaimedDraftCreateEmbeddedRequest request = TestHelper.getFixtureData(
            UnclaimedDraftCreateEmbeddedRequest.class,
            "default"
        );
        request.addFileItem(new File("test_fixtures/pdf-sample.pdf"));

        UnclaimedDraftCreateResponse expected = TestHelper.getFixtureData(
            UnclaimedDraftCreateResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        UnclaimedDraftApi api = new UnclaimedDraftApi(apiClient);
        UnclaimedDraftCreateResponse actual = api.unclaimedDraftCreateEmbedded(request);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void unclaimedDraftCreateEmbeddedWithTemplateTest() throws Exception {
        UnclaimedDraftCreateEmbeddedWithTemplateRequest request = TestHelper.getFixtureData(
            UnclaimedDraftCreateEmbeddedWithTemplateRequest.class,
            "default"
        );
        request.addFileItem(new File("test_fixtures/pdf-sample.pdf"));

        UnclaimedDraftCreateResponse expected = TestHelper.getFixtureData(
            UnclaimedDraftCreateResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        UnclaimedDraftApi api = new UnclaimedDraftApi(apiClient);
        UnclaimedDraftCreateResponse actual = api.unclaimedDraftCreateEmbeddedWithTemplate(request);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void unclaimedDraftEditAndResendTest() throws Exception {
        String signatureRequestId = "2f9781e1a83jdja934d808c153c2e1d3df6f8f2f";

        UnclaimedDraftEditAndResendRequest request = TestHelper.getFixtureData(
            UnclaimedDraftEditAndResendRequest.class,
            "default"
        );
        UnclaimedDraftCreateResponse expected = TestHelper.getFixtureData(
            UnclaimedDraftCreateResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        UnclaimedDraftApi api = new UnclaimedDraftApi(apiClient);
        UnclaimedDraftCreateResponse actual = api.unclaimedDraftEditAndResend(signatureRequestId, request);
        Assert.assertEquals(expected, actual);
    }
}
