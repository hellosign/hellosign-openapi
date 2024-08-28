package com.dropbox.sign.api;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.TestHelper;
import com.dropbox.sign.model.*;
import com.fasterxml.jackson.databind.JsonNode;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class ReportApiTest {
    @Test
    public void reportCreateTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(ReportCreateResponse.class.getSimpleName());
        ReportCreateResponse expectedResponse = ReportCreateResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(ReportCreateRequest.class.getSimpleName());

        ReportCreateRequest request = ReportCreateRequest.init(requestData.toString());

        ReportApi api = new ReportApi(apiClient);
        ReportCreateResponse response = api.reportCreate(request);

        assertEquals(expectedResponse, response);
    }
}
