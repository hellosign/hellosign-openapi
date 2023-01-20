package com.dropbox.sign.api;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.TestHelper;
import com.dropbox.sign.model.*;
import com.fasterxml.jackson.databind.JsonNode;
import org.junit.Assert;
import org.junit.Test;

public class BulkSendJobApiTest {
    @Test
    public void bulkSendJobGetTest() throws Exception {
        String id = "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174";
        JsonNode expectedResponseData = TestHelper.getJsonContents(BulkSendJobGetResponse.class.getSimpleName());
        BulkSendJobGetResponse expectedResponse = BulkSendJobGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        BulkSendJobApi api = new BulkSendJobApi(apiClient);
        BulkSendJobGetResponse response = api.bulkSendJobGet(id);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void bulkSendJobListTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(BulkSendJobListResponse.class.getSimpleName());
        BulkSendJobListResponse expectedResponse = BulkSendJobListResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        BulkSendJobApi api = new BulkSendJobApi(apiClient);
        BulkSendJobListResponse response = api.bulkSendJobList(1, 20);

        Assert.assertEquals(expectedResponse, response);
    }
}
