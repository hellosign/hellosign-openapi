package com.hellosign.openapi;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.fasterxml.jackson.databind.node.TextNode;
import org.junit.Assert;
import org.junit.Test;

import java.io.FileInputStream;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

public class FixtureTest {

    private final List<String> fixtures = Arrays.asList(
            "AccountCreateRequest",
            "AccountUpdateRequest",
            "AccountVerifyRequest",
            "ApiAppCreateRequest",
            "ApiAppUpdateRequest",
            "EmbeddedEditUrlRequest",
            "OAuthTokenGenerateRequest",
            "OAuthTokenRefreshRequest",
            "ReportCreateRequest",
            "SignatureRequestBulkCreateEmbeddedWithTemplateRequest",
            "SignatureRequestBulkSendWithTemplateRequest",
            "SignatureRequestCreateEmbeddedRequest",
            "SignatureRequestCreateEmbeddedWithTemplateRequest",
            "SignatureRequestRemindRequest",
            "SignatureRequestSendRequest",
            "SignatureRequestSendWithTemplateRequest",
            "SignatureRequestUpdateRequest",
            "TeamAddMemberRequest",
            "TeamCreateRequest",
            "TeamRemoveMemberRequest",
            "TeamUpdateRequest",
            "TemplateAddUserRequest",
            "TemplateCreateEmbeddedDraftRequest",
            "TemplateRemoveUserRequest",
            "TemplateUpdateFilesRequest",
            "UnclaimedDraftCreateEmbeddedRequest",
            "UnclaimedDraftCreateEmbeddedWithTemplateRequest",
            "UnclaimedDraftCreateRequest",
            "UnclaimedDraftEditAndResendRequest");

    private final String packageNamePrefix = "com.hellosign.openapi.model.";

    @Test
    public void testFixture() throws Exception {

        ObjectMapper mapper = JSON.getDefault().getMapper();
        for (String fixtureName : fixtures) {
            JsonNode fixture = mapper.readTree(new FileInputStream("test_fixtures/" + fixtureName + ".json"));

            for (JsonNode expected : fixture) {
                String data = expected.toString();
                Object obj = mapper.readValue(data, Class.forName(packageNamePrefix + fixtureName));
                String serialized = mapper.writeValueAsString(obj);
                JsonNode actual = mapper.readTree(serialized);
                modifyJsonNode(mapper, actual);
                Assert.assertEquals(expected, actual);  // String comparison doesn't work due to json fields may be out of order
            }
        }
    }

    // If the field is File type, absolute path will replace file name during serialization/deserialization,
    // change it back to file name
    private void modifyJsonNode(ObjectMapper mapper, JsonNode jsonNode) {
        ObjectNode node = (ObjectNode) jsonNode;
        List<String> fieldNames = Arrays.asList("custom_logo_file", "file", "signer_file");
        fieldNames.forEach(fieldName -> Optional.ofNullable(node.get(fieldName)).ifPresent(value -> {
            JsonNode newValue = null;
            if (value.isArray()) {
                ArrayNode arrayNode = mapper.createArrayNode();
                for (JsonNode jsonNode1 : value) {
                    arrayNode.add(new TextNode(Paths.get(jsonNode1.asText()).getFileName().toString()));
                    newValue = arrayNode;
                }
            }
            else {
                newValue = new TextNode(Paths.get(value.asText()).getFileName().toString());
            }
            node.replace(fieldName, newValue);
        }));

    }

}
