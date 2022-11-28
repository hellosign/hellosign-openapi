package com.hellosign.openapi.api;

import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.TestHelper;
import com.hellosign.openapi.model.*;
import org.junit.Assert;
import org.junit.Test;

public class ReportApiTest {
    @Test
    public void reportCreateTest() throws Exception {
        ReportCreateRequest request = TestHelper.getFixtureData(
            ReportCreateRequest.class,
            "default"
        );
        ReportCreateResponse expected = TestHelper.getFixtureData(
            ReportCreateResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        ReportApi api = new ReportApi(apiClient);
        ReportCreateResponse actual = api.reportCreate(request);
        Assert.assertEquals(expected, actual);
    }
}
