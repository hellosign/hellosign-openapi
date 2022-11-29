package com.hellosign.openapi.api;

import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.TestHelper;
import com.hellosign.openapi.model.*;
import org.junit.Assert;
import org.junit.Test;

/**
 * API tests for TeamApi
 */
public class TeamApiTest {
    @Test
    public void teamAddMemberTest() throws Exception {
        TeamAddMemberRequest request = TestHelper.getFixtureData(
            TeamAddMemberRequest.class,
            "default"
        );
        TeamGetResponse expected = TestHelper.getFixtureData(
            TeamGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        TeamApi api = new TeamApi(apiClient);
        TeamGetResponse actual = api.teamAddMember(request, null);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void teamCreateTest() throws Exception {
        TeamCreateRequest request = TestHelper.getFixtureData(
            TeamCreateRequest.class,
            "default"
        );
        TeamGetResponse expected = TestHelper.getFixtureData(
            TeamGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        TeamApi api = new TeamApi(apiClient);
        TeamGetResponse actual = api.teamCreate(request);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void teamDeleteTest() {
        //api.teamDelete();
        // TODO: test validations
    }

    @Test
    public void teamGetTest() throws Exception {
        TeamGetResponse expected = TestHelper.getFixtureData(
            TeamGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        TeamApi api = new TeamApi(apiClient);
        TeamGetResponse actual = api.teamGet();
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void teamRemoveMemberTest() throws Exception {
        TeamRemoveMemberRequest request = TestHelper.getFixtureData(
            TeamRemoveMemberRequest.class,
            "default"
        );
        TeamGetResponse expected = TestHelper.getFixtureData(
            TeamGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        TeamApi api = new TeamApi(apiClient);
        TeamGetResponse actual = api.teamRemoveMember(request);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void teamUpdateTest() throws Exception {
        TeamUpdateRequest request = TestHelper.getFixtureData(
            TeamUpdateRequest.class,
            "default"
        );
        TeamGetResponse expected = TestHelper.getFixtureData(
            TeamGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        TeamApi api = new TeamApi(apiClient);
        TeamGetResponse actual = api.teamUpdate(request);
        Assert.assertEquals(expected, actual);
    }
}
