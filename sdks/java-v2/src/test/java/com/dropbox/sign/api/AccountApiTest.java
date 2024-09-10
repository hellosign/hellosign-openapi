package com.dropbox.sign.api;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiException;
import com.dropbox.sign.TestHelper;
import com.dropbox.sign.model.*;
import com.fasterxml.jackson.databind.JsonNode;
import java.util.stream.IntStream;
import org.junit.jupiter.api.Test;

public class AccountApiTest {
    @Test
    public void accountCreateTest() throws Exception {
        JsonNode expectedResponseData =
                TestHelper.getJsonContents(AccountCreateResponse.class.getSimpleName());
        AccountCreateResponse expectedResponse =
                AccountCreateResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData =
                TestHelper.getJsonContents(AccountCreateRequest.class.getSimpleName());

        AccountCreateRequest request = AccountCreateRequest.init(requestData.toString());

        AccountApi accountApi = new AccountApi(apiClient);
        AccountCreateResponse response = accountApi.accountCreate(request);

        assertEquals(expectedResponse, response);
    }

    @Test
    public void accountGetTest() throws Exception {
        JsonNode expectedResponseData =
                TestHelper.getJsonContents(AccountGetResponse.class.getSimpleName());
        AccountGetResponse expectedResponse =
                AccountGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        AccountApi accountApi = new AccountApi(apiClient);
        AccountGetResponse response = accountApi.accountGet(null, "jack@example.com");

        assertEquals(expectedResponse, response);
    }

    @Test
    public void accountUpdateTest() throws Exception {
        JsonNode expectedResponseData =
                TestHelper.getJsonContents(AccountGetResponse.class.getSimpleName());
        AccountGetResponse expectedResponse =
                AccountGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData =
                TestHelper.getJsonContents(AccountUpdateRequest.class.getSimpleName());

        AccountUpdateRequest request = AccountUpdateRequest.init(requestData.toString());

        AccountApi accountApi = new AccountApi(apiClient);
        AccountGetResponse response = accountApi.accountUpdate(request);

        assertEquals(expectedResponse, response);
    }

    @Test
    public void accountVerifyTest() throws Exception {
        JsonNode expectedResponseData =
                TestHelper.getJsonContents(AccountVerifyResponse.class.getSimpleName());
        AccountVerifyResponse expectedResponse =
                AccountVerifyResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData =
                TestHelper.getJsonContents(AccountVerifyRequest.class.getSimpleName());

        AccountVerifyRequest request = AccountVerifyRequest.init(requestData.toString());

        AccountApi accountApi = new AccountApi(apiClient);
        AccountVerifyResponse response = accountApi.accountVerify(request);

        assertEquals(expectedResponse, response);
    }

    @Test
    public void testHttpCodeRange() throws Exception {
        JsonNode expectedResponseData =
                TestHelper.getJsonContents(ErrorResponse.class.getSimpleName());
        ErrorResponse expectedResponse = ErrorResponse.init(expectedResponseData.toString());

        JsonNode requestData =
                TestHelper.getJsonContents(AccountVerifyRequest.class.getSimpleName());

        AccountVerifyRequest request = AccountVerifyRequest.init(requestData.toString());

        IntStream.range(400, 500)
                .forEach(
                        value -> {
                            try {
                                ApiClient apiClient = TestHelper.setUpMock(value, expectedResponse);
                                AccountApi accountApi = new AccountApi(apiClient);
                                accountApi.accountVerify(request);
                                fail();
                            } catch (ApiException e) {
                                assertEquals(value, e.getCode());
                                assertEquals(expectedResponse, e.getErrorResponse());
                            }
                        });
    }
}
