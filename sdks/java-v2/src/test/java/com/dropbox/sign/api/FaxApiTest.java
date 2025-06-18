package com.dropbox.sign.api;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.TestHelper;
import com.dropbox.sign.model.*;
import com.fasterxml.jackson.databind.JsonNode;
import java.io.File;
import java.util.Arrays;
import java.util.HashMap;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class FaxApiTest {
    @Test
    public void faxSendTest() throws Exception {
        JsonNode expectedResponseData =
                TestHelper.getJsonContents(FaxGetResponse.class.getSimpleName());
        FaxGetResponse expectedResponse =
                FaxGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData =
                TestHelper.getJsonContents(
                        FaxSendRequest.class.getSimpleName());

        FaxSendRequest request =
                FaxSendRequest.init(requestData.toString());
        request.addFilesItem(new File("test_fixtures/pdf-sample.pdf"));

        FaxApi api = new FaxApi(apiClient);
        FaxGetResponse response = api.faxSend(request);

        assertEquals(expectedResponse, response);
    }

    @Test
    public void faxGetTest() throws Exception {
        String faxId = "c2e9691c85d9d6fa6ae773842e3680b2b8650f1d";

        JsonNode expectedResponseData =
                TestHelper.getJsonContents(FaxGetResponse.class.getSimpleName());
        FaxGetResponse expectedResponse =
                FaxGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        FaxApi api = new FaxApi(apiClient);
        FaxGetResponse response = api.faxGet(faxId);

        assertEquals(expectedResponse, response);
    }

    @Test
    public void faxListTest() throws Exception {
        JsonNode expectedResponseData =
                TestHelper.getJsonContents(FaxListResponse.class.getSimpleName());
        FaxListResponse expectedResponse =
                FaxListResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        FaxApi api = new FaxApi(apiClient);
        FaxListResponse response = api.faxList();

        assertEquals(expectedResponse, response);
    }
}
