package com.hellosign.openapi.api;

import com.hellosign.openapi.ApiClient;
import com.hellosign.openapi.TestHelper;
import com.hellosign.openapi.model.*;
import org.junit.Assert;
import org.junit.Test;

import java.io.File;

public class TemplateApiTest {
    @Test
    public void templateAddUserTest() throws Exception {
        String templateId = "f57db65d3f933b5316d398057a36176831451a35";

        TemplateAddUserRequest request = TestHelper.getFixtureData(
            TemplateAddUserRequest.class,
            "default"
        );
        TemplateGetResponse expected = TestHelper.getFixtureData(
            TemplateGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        TemplateApi api = new TemplateApi(apiClient);
        TemplateGetResponse actual = api.templateAddUser(templateId, request);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void templateCreateEmbeddedDraftTest() throws Exception {
        TemplateCreateEmbeddedDraftRequest request = TestHelper.getFixtureData(
            TemplateCreateEmbeddedDraftRequest.class,
            "default"
        );
        request.addFileItem(new File("test_fixtures/pdf-sample.pdf"));

        TemplateCreateEmbeddedDraftResponse expected = TestHelper.getFixtureData(
            TemplateCreateEmbeddedDraftResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        TemplateApi api = new TemplateApi(apiClient);
        TemplateCreateEmbeddedDraftResponse actual = api.templateCreateEmbeddedDraft(request);
        Assert.assertEquals(expected, actual);
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

        TemplateGetResponse expected = TestHelper.getFixtureData(
            TemplateGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        TemplateApi api = new TemplateApi(apiClient);
        TemplateGetResponse actual = api.templateGet(templateId);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void templateListTest() throws Exception {
        String accountId = "all";

        TemplateListResponse expected = TestHelper.getFixtureData(
            TemplateListResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        TemplateApi api = new TemplateApi(apiClient);
        TemplateListResponse actual = api.templateList(accountId, 1, 20, null);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void templateRemoveUserTest() throws Exception {
        String templateId = "f57db65d3f933b5316d398057a36176831451a35";

        TemplateRemoveUserRequest request = TestHelper.getFixtureData(
            TemplateRemoveUserRequest.class,
            "default"
        );
        TemplateGetResponse expected = TestHelper.getFixtureData(
            TemplateGetResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        TemplateApi api = new TemplateApi(apiClient);
        TemplateGetResponse actual = api.templateRemoveUser(templateId, request);
        Assert.assertEquals(expected, actual);
    }

    @Test
    public void templateUpdateFilesTest() throws Exception {
        String templateId = "f57db65d3f933b5316d398057a36176831451a35";

        TemplateUpdateFilesRequest request = TestHelper.getFixtureData(
            TemplateUpdateFilesRequest.class,
            "default"
        );
        request.addFileItem(new File("test_fixtures/pdf-sample.pdf"));

        TemplateUpdateFilesResponse expected = TestHelper.getFixtureData(
            TemplateUpdateFilesResponse.class,
            "default"
        );
        ApiClient apiClient = TestHelper.setUpMock(200, expected);

        TemplateApi api = new TemplateApi(apiClient);
        TemplateUpdateFilesResponse actual = api.templateUpdateFiles(templateId, request);
        Assert.assertEquals(expected, actual);
    }
}
