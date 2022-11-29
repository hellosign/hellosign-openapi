package com.hellosign.openapi.api;

import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.TestHelper;
import com.hellosign.openapi.model.*;
import org.junit.Assert;
import org.junit.Test;

public class BulkSendJobApiTest {
    @Test
    public void bulkSendJobGetTest() throws Exception {
        String id = "6e683bc0369ba3d5b6f43c2c22a8031dbf6bd174";
        BulkSendJobGetResponse expected = TestHelper.getFixtureData(
            BulkSendJobGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        BulkSendJobApi api = new BulkSendJobApi(apiClient);
        BulkSendJobGetResponse actual = api.bulkSendJobGet(id);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void bulkSendJobListTest() throws Exception {
        BulkSendJobListResponse expected = TestHelper.getFixtureData(
            BulkSendJobListResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        BulkSendJobApi api = new BulkSendJobApi(apiClient);
        BulkSendJobListResponse actual = api.bulkSendJobList(1, 20);
        Assert.assertEquals(expected, actual);
    }
}
