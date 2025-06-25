package com.dropbox.sign.api;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.TestHelper;
import com.dropbox.sign.model.*;
import com.fasterxml.jackson.databind.JsonNode;
import org.junit.jupiter.api.Test;

public class FaxLineApiTest {
    @Test
    public void faxLineCreateTest() throws Exception {
        JsonNode expectedResponseData =
                TestHelper.getJsonContents(FaxLineResponse.class.getSimpleName());
        FaxLineResponse expectedResponse = FaxLineResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData =
                TestHelper.getJsonContents(FaxLineCreateRequest.class.getSimpleName());

        FaxLineCreateRequest request = FaxLineCreateRequest.init(requestData.toString());

        FaxLineApi api = new FaxLineApi(apiClient);
        FaxLineResponse response = api.faxLineCreate(request);

        assertEquals(expectedResponse, response);
    }

    @Test
    public void faxLineGetTest() throws Exception {
        String faxLineNumber = "14155557897";

        JsonNode expectedResponseData =
                TestHelper.getJsonContents(FaxLineResponse.class.getSimpleName());
        FaxLineResponse expectedResponse = FaxLineResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        FaxLineApi api = new FaxLineApi(apiClient);
        FaxLineResponse response = api.faxLineGet(faxLineNumber);

        assertEquals(expectedResponse, response);
    }

    @Test
    public void faxLineListTest() throws Exception {
        JsonNode expectedResponseData =
                TestHelper.getJsonContents(FaxLineListResponse.class.getSimpleName());
        FaxLineListResponse expectedResponse =
                FaxLineListResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        FaxLineApi api = new FaxLineApi(apiClient);
        FaxLineListResponse response = api.faxLineList();

        assertEquals(expectedResponse, response);
    }
}
