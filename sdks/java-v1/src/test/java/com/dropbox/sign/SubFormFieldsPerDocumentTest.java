package com.dropbox.sign;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.dropbox.sign.model.SubFormFieldsPerDocumentBase;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Iterator;
import java.util.Map;
import org.junit.jupiter.api.Test;

public class SubFormFieldsPerDocumentTest {
    public final String packageNamePrefix = "com.dropbox.sign.model.";

    @Test
    public void testSubFormFieldsPerDocumentBase() throws Exception {
        ObjectMapper mapper = JSON.getDefault().getMapper();
        JsonNode content =
                mapper.readTree(
                        Files.newInputStream(
                                Paths.get("test_fixtures//SubFormFieldsPerDocument.json")));
        Iterator<Map.Entry<String, JsonNode>> fields = content.fields();

        while (fields.hasNext()) {
            Map.Entry<String, JsonNode> kv = fields.next();
            String fieldName = kv.getKey();
            JsonNode expected = kv.getValue();

            SubFormFieldsPerDocumentBase base =
                    SubFormFieldsPerDocumentBase.init(expected.toString());

            assertTrue(Class.forName(packageNamePrefix + fieldName).isInstance(base));

            String serialized = mapper.writeValueAsString(base);
            JsonNode actual = mapper.readTree(serialized);

            // String comparison doesn't work due to json fields may be out of order
            assertEquals(expected, actual);
        }
    }

    @Test
    public void testSignersAllowsInt() throws Exception {
        ObjectMapper mapper = JSON.getDefault().getMapper();
        JsonNode content =
                mapper.readTree(
                        Files.newInputStream(
                                Paths.get("test_fixtures//SubFormFieldsPerDocument.json")));
        Iterator<Map.Entry<String, JsonNode>> fields = content.fields();

        while (fields.hasNext()) {
            Map.Entry<String, JsonNode> kv = fields.next();
            JsonNode data = kv.getValue();
            String expected_signer = "1234";

            ((ObjectNode) data).put("signer", 1234);

            SubFormFieldsPerDocumentBase result =
                    SubFormFieldsPerDocumentBase.init(data.toString());

            assertEquals(expected_signer, result.getSigner());
        }
    }

    @Test
    public void testSignersAllowsString() throws Exception {
        ObjectMapper mapper = JSON.getDefault().getMapper();
        JsonNode content =
                mapper.readTree(
                        Files.newInputStream(
                                Paths.get("test_fixtures//SubFormFieldsPerDocument.json")));
        Iterator<Map.Entry<String, JsonNode>> fields = content.fields();

        while (fields.hasNext()) {
            Map.Entry<String, JsonNode> kv = fields.next();
            JsonNode data = kv.getValue();
            String expected_signer = "sender";

            ((ObjectNode) data).put("signer", "sender");

            SubFormFieldsPerDocumentBase result =
                    SubFormFieldsPerDocumentBase.init(data.toString());

            assertEquals(expected_signer, result.getSigner());
        }
    }
}
