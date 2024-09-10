package com.dropbox.sign.api;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.TestHelper;
import com.dropbox.sign.model.*;
import com.fasterxml.jackson.databind.JsonNode;
import org.junit.jupiter.api.Test;

/** API tests for TeamApi */
public class TeamApiTest {
    @Test
    public void teamAddMemberTest() throws Exception {
        JsonNode expectedResponseData =
                TestHelper.getJsonContents(TeamGetResponse.class.getSimpleName());
        TeamGetResponse expectedResponse = TeamGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData =
                TestHelper.getJsonContents(TeamAddMemberRequest.class.getSimpleName());

        TeamAddMemberRequest request = TeamAddMemberRequest.init(requestData.toString());

        TeamApi api = new TeamApi(apiClient);
        TeamGetResponse response = api.teamAddMember(request, null);

        assertEquals(expectedResponse, response);
    }

    @Test
    public void teamCreateTest() throws Exception {
        JsonNode expectedResponseData =
                TestHelper.getJsonContents(TeamGetResponse.class.getSimpleName());
        TeamGetResponse expectedResponse = TeamGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(TeamCreateRequest.class.getSimpleName());

        TeamCreateRequest request = TeamCreateRequest.init(requestData.toString());

        TeamApi api = new TeamApi(apiClient);
        TeamGetResponse response = api.teamCreate(request);

        assertEquals(expectedResponse, response);
    }

    @Test
    public void teamDeleteTest() {
        // api.teamDelete();
        // TODO: test validations
    }

    @Test
    public void teamGetTest() throws Exception {
        JsonNode expectedResponseData =
                TestHelper.getJsonContents(TeamGetResponse.class.getSimpleName());
        TeamGetResponse expectedResponse = TeamGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        TeamApi api = new TeamApi(apiClient);
        TeamGetResponse response = api.teamGet();

        assertEquals(expectedResponse, response);
    }

    @Test
    public void teamRemoveMemberTest() throws Exception {
        JsonNode expectedResponseData =
                TestHelper.getJsonContents(TeamGetResponse.class.getSimpleName());
        TeamGetResponse expectedResponse = TeamGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData =
                TestHelper.getJsonContents(TeamRemoveMemberRequest.class.getSimpleName());

        TeamRemoveMemberRequest request = TeamRemoveMemberRequest.init(requestData.toString());

        TeamApi api = new TeamApi(apiClient);
        TeamGetResponse response = api.teamRemoveMember(request);

        assertEquals(expectedResponse, response);
    }

    @Test
    public void teamUpdateTest() throws Exception {
        JsonNode expectedResponseData =
                TestHelper.getJsonContents(TeamGetResponse.class.getSimpleName());
        TeamGetResponse expectedResponse = TeamGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(TeamUpdateRequest.class.getSimpleName());

        TeamUpdateRequest request = TeamUpdateRequest.init(requestData.toString());

        TeamApi api = new TeamApi(apiClient);
        TeamGetResponse response = api.teamUpdate(request);

        assertEquals(expectedResponse, response);
    }
}
