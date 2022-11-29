package com.hellosign.openapi.api;

import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.ApiException;
import com.hellosign.openapi.TestHelper;
import com.hellosign.openapi.model.*;
import org.junit.Assert;
import org.junit.Test;

import java.util.stream.IntStream;

public class AccountApiTest {
    @Test
    public void accountCreateTest() throws Exception {
        AccountCreateRequest request = TestHelper.getFixtureData(
            AccountCreateRequest.class,
            "default"
        );
        AccountCreateResponse expected = TestHelper.getFixtureData(
            AccountCreateResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        AccountApi accountApi = new AccountApi(apiClient);
        AccountCreateResponse actual = accountApi.accountCreate(request);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void accountGetTest() throws Exception {
        AccountGetResponse expected = TestHelper.getFixtureData(
            AccountGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        AccountApi accountApi = new AccountApi(apiClient);
        AccountGetResponse actual = accountApi.accountGet(null, "jack@example.com");
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void accountUpdateTest() throws Exception {
        AccountUpdateRequest request = TestHelper.getFixtureData(
            AccountUpdateRequest.class,
            "default"
        );
        AccountGetResponse expected = TestHelper.getFixtureData(
            AccountGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        AccountApi accountApi = new AccountApi(apiClient);
        AccountGetResponse actual = accountApi.accountUpdate(request);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void accountVerifyTest() throws Exception {
        AccountVerifyRequest request = TestHelper.getFixtureData(
            AccountVerifyRequest.class,
            "default"
        );
        AccountVerifyResponse expected = TestHelper.getFixtureData(
            AccountVerifyResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        AccountApi accountApi = new AccountApi(apiClient);
        AccountVerifyResponse actual = accountApi.accountVerify(request);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void testHttpCodeRange() throws Exception {
        AccountVerifyRequest request = TestHelper.getFixtureData(
            AccountVerifyRequest.class,
            "default"
        );
        ErrorResponse expected = TestHelper.getFixtureData(
            ErrorResponse.class,
            "default"
        );

        IntStream.range(400, 500).forEach(value -> {
            try {
                ApiClient apiClient = TestHelper.setUpMock(value, expected);
                AccountApi accountApi = new AccountApi(apiClient);
                accountApi.accountVerify(request);
                Assert.fail();
            } catch (ApiException e) {
                Assert.assertEquals(value, e.getCode());
                Assert.assertEquals(expected, e.getErrorResponse());
            }
        });
    }
}
