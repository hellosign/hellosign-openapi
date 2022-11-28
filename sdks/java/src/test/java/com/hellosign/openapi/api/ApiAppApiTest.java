package com.hellosign.openapi.api;

import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.TestHelper;
import com.hellosign.openapi.model.*;
import org.junit.Assert;
import org.junit.Test;

import java.io.File;

public class ApiAppApiTest {
    @Test
    public void apiAppCreateTest() throws Exception {
        ApiAppCreateRequest request = TestHelper.getFixtureData(
            ApiAppCreateRequest.class,
            "default"
        );
        request.customLogoFile(new File("test_fixtures/pdf-sample.pdf"));

        ApiAppGetResponse expected = TestHelper.getFixtureData(
            ApiAppGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        ApiAppApi api = new ApiAppApi(apiClient);
        ApiAppGetResponse actual = api.apiAppCreate(request);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void apiAppDeleteTest() {
        //String clientId = null;
        //api.apiAppDelete(clientId);
        // TODO: test validations
    }

    @Test
    public void apiAppGetTest() throws Exception {
        String clientId = "0dd3b823a682527788c4e40cb7b6f7e9";

        ApiAppGetResponse expected = TestHelper.getFixtureData(
            ApiAppGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        ApiAppApi api = new ApiAppApi(apiClient);
        ApiAppGetResponse actual = api.apiAppGet(clientId);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void apiAppListTest() throws Exception {
        ApiAppListResponse expected = TestHelper.getFixtureData(
            ApiAppListResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        ApiAppApi api = new ApiAppApi(apiClient);
        ApiAppListResponse actual = api.apiAppList(1, 20);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void apiAppUpdateTest() throws Exception {
        String clientId = "0dd3b823a682527788c4e40cb7b6f7e9";

        ApiAppUpdateRequest request = TestHelper.getFixtureData(
            ApiAppUpdateRequest.class,
            "default"
        );
        request.customLogoFile(new File("test_fixtures/pdf-sample.pdf"));

        ApiAppGetResponse expected = TestHelper.getFixtureData(
            ApiAppGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        ApiAppApi api = new ApiAppApi(apiClient);
        ApiAppGetResponse actual = api.apiAppUpdate(clientId, request);
        Assert.assertEquals(expected, actual);
    }
}
