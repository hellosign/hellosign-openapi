package com.dropbox.sign;

import com.dropbox.sign.model.ApiAppCreateRequest;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.dropbox.sign.model.EventCallbackRequest;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.List;

public class EventCallbackHelperTest {
    public static final String APIKEY = "324e3b0840f065eb51f3fd63231d0d33daa35d4ed10d27718839e81737065782";

    @Test
    public void testIsValid() throws Exception {
        String reverseApiKey = new StringBuilder(APIKEY).reverse().toString();

        List<String> account_keys = Arrays.asList(
            "base",
            "base_no_metadata",
            "account",
            "account_no_metadata",
            "signature_request",
            "signature_request_no_metadata",
            "template",
            "template_no_metadata"
        );

        for (String key : account_keys) {
            JsonNode content = TestHelper.getJsonContents("EventCallbackHelper_AccountCallbacks", key);

            EventCallbackRequest callbackEvent = EventCallbackRequest.init(content.toString());

            assertTrue(EventCallbackHelper.isValid(APIKEY, callbackEvent));
            assertFalse(EventCallbackHelper.isValid(reverseApiKey, callbackEvent));
            assertEquals(
                EventCallbackHelper.EVENT_TYPE_ACCOUNT_CALLBACK,
                EventCallbackHelper.getCallbackType(callbackEvent)
            );
        }

        List<String> app_keys = Arrays.asList(
            "base",
            "account",
            "signature_request",
            "template"
        );

        for (String key : app_keys) {
            JsonNode content = TestHelper.getJsonContents("EventCallbackHelper_AppCallbacks", key);

            EventCallbackRequest callbackEvent = EventCallbackRequest.init(content.toString());

            assertTrue(EventCallbackHelper.isValid(APIKEY, callbackEvent));
            assertFalse(EventCallbackHelper.isValid(reverseApiKey, callbackEvent));
            assertEquals(
                EventCallbackHelper.EVENT_TYPE_APP_CALLBACK,
                EventCallbackHelper.getCallbackType(callbackEvent)
            );
        }
    }
}
