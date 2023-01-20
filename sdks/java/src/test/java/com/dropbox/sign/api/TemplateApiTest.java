package com.dropbox.sign.api;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.TestHelper;
import com.dropbox.sign.model.*;
import com.fasterxml.jackson.databind.JsonNode;
import org.junit.Assert;
import org.junit.Test;

import java.io.File;

public class TemplateApiTest {
    @Test
    public void templateAddUserTest() throws Exception {
        String templateId = "f57db65d3f933b5316d398057a36176831451a35";

        JsonNode expectedResponseData = TestHelper.getJsonContents(TemplateGetResponse.class.getSimpleName());
        TemplateGetResponse expectedResponse = TemplateGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(TemplateAddUserRequest.class.getSimpleName());

        TemplateAddUserRequest request = TemplateAddUserRequest.init(requestData.toString());

        TemplateApi api = new TemplateApi(apiClient);
        TemplateGetResponse response = api.templateAddUser(templateId, request);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void templateCreateEmbeddedDraftTest() throws Exception {
        JsonNode expectedResponseData = TestHelper.getJsonContents(TemplateCreateEmbeddedDraftResponse.class.getSimpleName());
        TemplateCreateEmbeddedDraftResponse expectedResponse = TemplateCreateEmbeddedDraftResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(TemplateCreateEmbeddedDraftRequest.class.getSimpleName());

        TemplateCreateEmbeddedDraftRequest request = TemplateCreateEmbeddedDraftRequest.init(requestData.toString());
        request.addFilesItem(new File("test_fixtures/pdf-sample.pdf"));

        TemplateApi api = new TemplateApi(apiClient);
        TemplateCreateEmbeddedDraftResponse response = api.templateCreateEmbeddedDraft(request);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void templateDeleteTest() {
        //String templateId = null;
        //api.templateDelete(templateId);
        // TODO: test validations
    }

    @Test
    public void templateFilesTest() {
        // TODO: test validations
    }

    @Test
    public void templateGetTest() throws Exception {
        String templateId = "f57db65d3f933b5316d398057a36176831451a35";

        JsonNode expectedResponseData = TestHelper.getJsonContents(TemplateGetResponse.class.getSimpleName());
        TemplateGetResponse expectedResponse = TemplateGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        TemplateApi api = new TemplateApi(apiClient);
        TemplateGetResponse response = api.templateGet(templateId);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void templateListTest() throws Exception {
        String accountId = "all";

        JsonNode expectedResponseData = TestHelper.getJsonContents(TemplateListResponse.class.getSimpleName());
        TemplateListResponse expectedResponse = TemplateListResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        TemplateApi api = new TemplateApi(apiClient);
        TemplateListResponse response = api.templateList(accountId, 1, 20, null);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void templateRemoveUserTest() throws Exception {
        String templateId = "f57db65d3f933b5316d398057a36176831451a35";

        JsonNode expectedResponseData = TestHelper.getJsonContents(TemplateGetResponse.class.getSimpleName());
        TemplateGetResponse expectedResponse = TemplateGetResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(TemplateRemoveUserRequest.class.getSimpleName());

        TemplateRemoveUserRequest request = TemplateRemoveUserRequest.init(requestData.toString());

        TemplateApi api = new TemplateApi(apiClient);
        TemplateGetResponse response = api.templateRemoveUser(templateId, request);

        Assert.assertEquals(expectedResponse, response);
    }

    @Test
    public void templateUpdateFilesTest() throws Exception {
        String templateId = "f57db65d3f933b5316d398057a36176831451a35";

        JsonNode expectedResponseData = TestHelper.getJsonContents(TemplateUpdateFilesResponse.class.getSimpleName());
        TemplateUpdateFilesResponse expectedResponse = TemplateUpdateFilesResponse.init(expectedResponseData.toString());
        ApiClient apiClient = TestHelper.setUpMock(200, expectedResponse);

        JsonNode requestData = TestHelper.getJsonContents(TemplateUpdateFilesRequest.class.getSimpleName());

        TemplateUpdateFilesRequest request = TemplateUpdateFilesRequest.init(requestData.toString());
        request.addFilesItem(new File("test_fixtures/pdf-sample.pdf"));

        TemplateApi api = new TemplateApi(apiClient);
        TemplateUpdateFilesResponse response = api.templateUpdateFiles(templateId, request);

        Assert.assertEquals(expectedResponse, response);
    }
}
