package com.dropbox.sign.api;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.TestHelper;
import com.dropbox.sign.model.*;
import org.junit.Assert;
import org.junit.Test;

public class OAuthApiTest {
    @Test
    public void oauthTokenGenerateTest() throws Exception {
        OAuthTokenGenerateRequest request = TestHelper.getFixtureData(
            OAuthTokenGenerateRequest.class,
            "default"
        );
        OAuthTokenResponse expected = TestHelper.getFixtureData(
            OAuthTokenResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        OAuthApi api = new OAuthApi(apiClient);
        OAuthTokenResponse actual = api.oauthTokenGenerate(request);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void oauthTokenRefreshTest() throws Exception {
        OAuthTokenRefreshRequest request = TestHelper.getFixtureData(
            OAuthTokenRefreshRequest.class,
            "default"
        );
        OAuthTokenResponse expected = TestHelper.getFixtureData(
            OAuthTokenResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        OAuthApi api = new OAuthApi(apiClient);
        OAuthTokenResponse actual = api.oauthTokenRefresh(request);
        Assert.assertEquals(expected, actual);
    }
}
