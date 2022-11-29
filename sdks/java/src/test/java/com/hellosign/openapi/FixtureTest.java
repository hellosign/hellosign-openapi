package com.hellosign.openapi;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Assert;
import org.junit.Test;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;

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

    @Test
    public void testFixture() throws Exception {
        ObjectMapper mapper = JSON.getDefault().getMapper();
        for (String fixtureName : fixtures) {
            JsonNode fixture = mapper.readTree(
                Files.newInputStream(Paths.get("test_fixtures/" + fixtureName + ".json"))
            );

            for (JsonNode expected : fixture) {
                String data = expected.toString();
                String packageNamePrefix = "com.hellosign.openapi.model.";
                Object obj = mapper.readValue(data, Class.forName(packageNamePrefix + fixtureName));
                String serialized = mapper.writeValueAsString(obj);
                JsonNode actual = mapper.readTree(serialized);

                // String comparison doesn't work due to json fields may be out of order
                Assert.assertEquals(expected, actual);
            }
        }
    }
}
