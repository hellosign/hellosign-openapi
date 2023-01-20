package com.dropbox.sign.api;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.TestHelper;
import com.dropbox.sign.model.*;
import com.fasterxml.jackson.databind.JsonNode;
import org.junit.Assert;
import org.junit.Test;

/**
 * API tests for TeamApi
 */
public class TeamApiTest {
    @Test
    public void teamAddMemberTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(TeamGetResponse.class.getSimpleName());
        TeamGetResponse expectedResponse = TeamGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(TeamAddMemberRequest.class.getSimpleName());

        TeamAddMemberRequest request = TeamAddMemberRequest.init(requestData.toString());

        TeamApi api = new TeamApi(apiClient);
        TeamGetResponse response = api.teamAddMember(request, null);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void teamCreateTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(TeamGetResponse.class.getSimpleName());
        TeamGetResponse expectedResponse = TeamGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(TeamCreateRequest.class.getSimpleName());

        TeamCreateRequest request = TeamCreateRequest.init(requestData.toString());

        TeamApi api = new TeamApi(apiClient);
        TeamGetResponse response = api.teamCreate(request);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void teamDeleteTest() {
        //api.teamDelete();
        // TODO: test validations
    }

    @Test
    public void teamGetTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(TeamGetResponse.class.getSimpleName());
        TeamGetResponse expectedResponse = TeamGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        TeamApi api = new TeamApi(apiClient);
        TeamGetResponse response = api.teamGet();

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void teamRemoveMemberTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(TeamGetResponse.class.getSimpleName());
        TeamGetResponse expectedResponse = TeamGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(TeamRemoveMemberRequest.class.getSimpleName());

        TeamRemoveMemberRequest request = TeamRemoveMemberRequest.init(requestData.toString());

        TeamApi api = new TeamApi(apiClient);
        TeamGetResponse response = api.teamRemoveMember(request);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void teamUpdateTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(TeamGetResponse.class.getSimpleName());
        TeamGetResponse expectedResponse = TeamGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(TeamUpdateRequest.class.getSimpleName());

        TeamUpdateRequest request = TeamUpdateRequest.init(requestData.toString());

        TeamApi api = new TeamApi(apiClient);
        TeamGetResponse response = api.teamUpdate(request);

        Assert.assertEquals(expectedResponse, response);
    }
}
