package com.hellosign.openapi;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hellosign.openapi.model.EventCallbackApiAppRequestPayload;
import org.junit.Assert;
import org.junit.Test;

import java.io.FileInputStream;

public class EventCallbackHelperTest {
    public static final String APIKEY = "324e3b0840f065eb51f3fd63231d0d33daa35d4ed10d27718839e81737065782";

    @Test
    public void testIsValid() throws Exception {
        ObjectMapper mapper = JSON.getDefault().getMapper();
        JsonNode content = mapper.readTree(new FileInputStream("test_fixtures/EventCallbackHelper.json"));
        for(JsonNode node : content) {
            EventCallbackApiAppRequestPayload payload = mapper.convertValue(node, EventCallbackApiAppRequestPayload.class);
            Assert.assertTrue(EventCallbackHelper.isValid(APIKEY, payload.getEvent()));
            Assert.assertFalse(EventCallbackHelper.isValid(new StringBuilder(APIKEY).reverse().toString(), payload.getEvent()));
        }
    }
}
