package com.dropbox.sign.api;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.TestHelper;
import com.dropbox.sign.model.*;
import com.fasterxml.jackson.databind.JsonNode;
import org.junit.Assert;
import org.junit.Test;

import java.io.File;

public class ApiAppApiTest {
    @Test
    public void apiAppCreateTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(ApiAppGetResponse.class.getSimpleName());
        ApiAppGetResponse expectedResponse = ApiAppGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(ApiAppCreateRequest.class.getSimpleName());

        ApiAppCreateRequest request = ApiAppCreateRequest.init(requestData.toString());
        request.customLogoFile(new File("test_fixtures/pdf-sample.pdf"));

        ApiAppApi api = new ApiAppApi(apiClient);
        ApiAppGetResponse response = api.apiAppCreate(request);

        Assert.assertEquals(expectedResponse, response);
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

        JsonNode expectedResponseData = TestHelper.getJsonContents(ApiAppGetResponse.class.getSimpleName());
        ApiAppGetResponse expectedResponse = ApiAppGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        ApiAppApi api = new ApiAppApi(apiClient);
        ApiAppGetResponse response = api.apiAppGet(clientId);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void apiAppListTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(ApiAppListResponse.class.getSimpleName());
        ApiAppListResponse expectedResponse = ApiAppListResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        ApiAppApi api = new ApiAppApi(apiClient);
        ApiAppListResponse response = api.apiAppList(1, 20);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void apiAppUpdateTest() throws Exception {
        String clientId = "0dd3b823a682527788c4e40cb7b6f7e9";

        JsonNode expectedResponseData = TestHelper.getJsonContents(ApiAppGetResponse.class.getSimpleName());
        ApiAppGetResponse expectedResponse = ApiAppGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(ApiAppUpdateRequest.class.getSimpleName());

        ApiAppUpdateRequest request = ApiAppUpdateRequest.init(requestData.toString());
        request.customLogoFile(new File("test_fixtures/pdf-sample.pdf"));

        ApiAppApi api = new ApiAppApi(apiClient);
        ApiAppGetResponse response = api.apiAppUpdate(clientId, request);

        Assert.assertEquals(expectedResponse, response);
    }
}
