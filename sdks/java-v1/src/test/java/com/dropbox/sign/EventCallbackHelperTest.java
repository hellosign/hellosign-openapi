package com.dropbox.sign;

import com.dropbox.sign.model.ApiAppCreateRequest;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.dropbox.sign.model.EventCallbackRequest;
import org.junit.Assert;
import org.junit.Test;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;

public class EventCallbackHelperTest {
    public static final String APIKEY = "324e3b0840f065eb51f3fd63231d0d33daa35d4ed10d27718839e81737065782";

    @Test
    public void testIsValid() throws Exception {
        String reverseApiKey = new StringBuilder(APIKEY).reverse().toString();

        List<String> keys = Arrays.asList(
            "base",
            "account",
            "signature_request",
            "template"
        );

        for (String key : keys) {
            JsonNode content = TestHelper.getJsonContents("EventCallbackHelper", key);

            EventCallbackRequest callbackEvent = EventCallbackRequest.init(content.toString());

            Assert.assertTrue(EventCallbackHelper.isValid(APIKEY, callbackEvent));
            Assert.assertFalse(EventCallbackHelper.isValid(reverseApiKey, callbackEvent));
        }
    }
}
