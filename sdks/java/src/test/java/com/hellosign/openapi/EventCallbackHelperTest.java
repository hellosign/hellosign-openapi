package com.hellosign.openapi;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hellosign.openapi.model.EventCallbackRequest;
import org.junit.Assert;
import org.junit.Test;

import java.nio.file.Files;
import java.nio.file.Paths;

public class EventCallbackHelperTest {
    public static final String APIKEY = "324e3b0840f065eb51f3fd63231d0d33daa35d4ed10d27718839e81737065782";

    @Test
    public void testIsValid() throws Exception {
        ObjectMapper mapper = JSON.getDefault().getMapper();
        JsonNode content = mapper.readTree(
            Files.newInputStream(Paths.get("test_fixtures/EventCallbackHelper.json"))
        );

        for (JsonNode node : content) {
            EventCallbackRequest callbackEvent = mapper.convertValue(
                node,
                EventCallbackRequest.class
            );

            Assert.assertTrue(EventCallbackHelper.isValid(APIKEY, callbackEvent));
            Assert.assertFalse(
                EventCallbackHelper.isValid(
                    new StringBuilder(APIKEY).reverse().toString(),
                    callbackEvent
                )
            );
        }
    }
}
