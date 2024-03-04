package com.dropbox.sign.api;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.TestHelper;
import com.dropbox.sign.model.*;
import com.fasterxml.jackson.databind.JsonNode;
import org.junit.Assert;
import org.junit.Test;

public class OAuthApiTest {
    @Test
    public void oauthTokenGenerateTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(OAuthTokenResponse.class.getSimpleName());
        OAuthTokenResponse expectedResponse = OAuthTokenResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(OAuthTokenGenerateRequest.class.getSimpleName());

        OAuthTokenGenerateRequest request = OAuthTokenGenerateRequest.init(requestData.toString());

        OAuthApi api = new OAuthApi(apiClient);
        OAuthTokenResponse response = api.oauthTokenGenerate(request);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void oauthTokenRefreshTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(OAuthTokenResponse.class.getSimpleName());
        OAuthTokenResponse expectedResponse = OAuthTokenResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(OAuthTokenRefreshRequest.class.getSimpleName());

        OAuthTokenRefreshRequest request = OAuthTokenRefreshRequest.init(requestData.toString());

        OAuthApi api = new OAuthApi(apiClient);
        OAuthTokenResponse response = api.oauthTokenRefresh(request);

        Assert.assertEquals(expectedResponse, response);
    }
}
