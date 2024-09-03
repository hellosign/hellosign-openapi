package com.dropbox.sign_sandbox;

import com.dropbox.sign.ApiClient;
import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.JSON;
import com.dropbox.sign.api.EmbeddedApi;
import com.dropbox.sign.api.SignatureRequestApi;
import com.dropbox.sign.model.*;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectReader;
import org.junit.Assert;
import org.junit.Test;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Paths;

public class SignatureRequestTest {
    public static JsonNode getConfig() throws Exception {
        ObjectMapper objectMapper = JSON.getDefault().getMapper();

        JsonNode configCustom = objectMapper.readTree(Files.newInputStream(
            Paths.get("src/test/com/dropbox/sign_sandbox/.config.json")
        ));
        JsonNode configDist = objectMapper.readTree(Files.newInputStream(
            Paths.get("src/test/com/dropbox/sign_sandbox/.config.dist.json")
        ));

        ObjectReader updater = objectMapper.readerForUpdating(configDist);

        return updater.readValue(configCustom);
    }

    public static JsonNode getJsonContents(String filename) throws Exception {
        ObjectMapper objectMapper = JSON.getDefault().getMapper();
        return objectMapper.readTree(Files.newInputStream(
            Paths.get("test_fixtures/" + filename)
        ));
    }

    @Test
    public void testSend() throws Exception {
        JsonNode config = getConfig();

        ApiClient apiClient = Configuration.getDefaultApiClient()
            .setApiKey(config.findPath("API_KEY").textValue())
            .setBasePath(config.findPath("BASE_URL").textValue());

        SignatureRequestApi signatureRequestApi = new SignatureRequestApi(apiClient);

        JsonNode data = getJsonContents("SignatureRequestSendRequest.json");

        SignatureRequestSendRequest sendRequest = SignatureRequestSendRequest.init(data.toString());
        sendRequest.addFilesItem(new File("test_fixtures/pdf-sample.pdf"));

        SignatureRequestGetResponse sendResponse = signatureRequestApi.signatureRequestSend(sendRequest);

        Assert.assertEquals(
            sendRequest.getFormFieldsPerDocument().get(0).getApiId(),
            sendResponse.getSignatureRequest().getCustomFields().get(0).getApiId()
        );

        Assert.assertEquals(
            sendRequest.getSigners().get(0).getEmailAddress(),
            sendResponse.getSignatureRequest().getSignatures().get(0).getSignerEmailAddress()
        );
        Assert.assertEquals(
            sendRequest.getSigners().get(1).getEmailAddress(),
            sendResponse.getSignatureRequest().getSignatures().get(1).getSignerEmailAddress()
        );
        Assert.assertEquals(
            sendRequest.getSigners().get(2).getEmailAddress(),
            sendResponse.getSignatureRequest().getSignatures().get(2).getSignerEmailAddress()
        );

        SignatureRequestGetResponse getResponse = signatureRequestApi.signatureRequestGet(
            sendResponse.getSignatureRequest().getSignatureRequestId()
        );

        Assert.assertEquals(
            sendResponse.getSignatureRequest().getSignatureRequestId(),
            getResponse.getSignatureRequest().getSignatureRequestId()
        );
    }

    @Test
    public void testCreateEmbedded() throws Exception {
        JsonNode config = getConfig();

        ApiClient apiClient = Configuration.getDefaultApiClient()
            .setApiKey(config.findPath("API_KEY").textValue())
            .setBasePath(config.findPath("BASE_URL").textValue());

        SignatureRequestApi signatureRequestApi = new SignatureRequestApi(apiClient);

        JsonNode data = getJsonContents("SignatureRequestCreateEmbeddedRequest.json");

        SignatureRequestCreateEmbeddedRequest sendRequest = SignatureRequestCreateEmbeddedRequest.init(data.toString());
        sendRequest.addFilesItem(new File("test_fixtures/pdf-sample.pdf"));
        sendRequest.clientId(config.findPath("CLIENT_ID").textValue());

        SignatureRequestGetResponse sendResponse = signatureRequestApi.signatureRequestCreateEmbedded(sendRequest);

        Assert.assertEquals(
            sendRequest.getSigners().get(0).getEmailAddress(),
            sendResponse.getSignatureRequest().getSignatures().get(0).getSignerEmailAddress()
        );
        Assert.assertEquals(
            sendRequest.getSigners().get(1).getEmailAddress(),
            sendResponse.getSignatureRequest().getSignatures().get(1).getSignerEmailAddress()
        );
        Assert.assertEquals(
            sendRequest.getSigners().get(2).getEmailAddress(),
            sendResponse.getSignatureRequest().getSignatures().get(2).getSignerEmailAddress()
        );

        EmbeddedApi embeddedApi = new EmbeddedApi(apiClient);

        EmbeddedSignUrlResponse getResponse = embeddedApi.embeddedSignUrl(
            sendResponse.getSignatureRequest().getSignatures().get(0).getSignatureId()
        );

        Assert.assertNotNull(getResponse.getEmbedded().getSignUrl());
    }

    @Test
    public void testSendWithoutFileError() throws Exception {
        JsonNode config = getConfig();

        ApiClient apiClient = Configuration.getDefaultApiClient()
            .setApiKey(config.findPath("API_KEY").textValue())
            .setBasePath(config.findPath("BASE_URL").textValue());

        SignatureRequestApi signatureRequestApi = new SignatureRequestApi(apiClient);

        JsonNode data = getJsonContents("SignatureRequestSendRequest.json");
        SignatureRequestSendRequest sendRequest = SignatureRequestSendRequest.init(data.toString());

        try {
            signatureRequestApi.signatureRequestSend(sendRequest);
            Assert.fail();
        } catch (ApiException e) {
            Assert.assertEquals("file", e.getErrorResponse().getError().getErrorPath());
        }
    }
}
