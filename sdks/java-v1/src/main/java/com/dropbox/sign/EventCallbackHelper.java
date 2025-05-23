/*
 * Dropbox Sign API
 * Dropbox Sign v3 API
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: apisupport@hellosign.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

package com.dropbox.sign;

import com.dropbox.sign.model.EventCallbackRequest;
import com.dropbox.sign.model.EventCallbackRequestEventMetadata;
import org.apache.commons.codec.digest.HmacAlgorithms;
import org.apache.commons.codec.digest.HmacUtils;

@javax.annotation.Generated(
        value = "org.openapitools.codegen.languages.JavaClientCodegen",
        comments = "Generator version: 7.12.0")
public class EventCallbackHelper {
    public static final String EVENT_TYPE_ACCOUNT_CALLBACK = "account_callback";

    public static final String EVENT_TYPE_APP_CALLBACK = "app_callback";

    private EventCallbackHelper() {}

    /**
     * Verify that a callback came from HelloSign.com
     *
     * @param apiKey
     * @param eventCallback
     * @return a boolean value indicating whether the callback event is valid
     */
    public static boolean isValid(String apiKey, EventCallbackRequest eventCallback) {
        return new HmacUtils(HmacAlgorithms.HMAC_SHA_256, apiKey)
                .hmacHex(
                        eventCallback.getEvent().getEventTime()
                                + eventCallback.getEvent().getEventType())
                .equals(eventCallback.getEvent().getEventHash());
    }

    /**
     * Identifies the callback type, one of "account_callback" or "app_callback".
     *
     * <p>"app_callback" will always include a value for "reported_for_app_id"
     *
     * @param eventCallback
     */
    public static String getCallbackType(EventCallbackRequest eventCallback) {
        EventCallbackRequestEventMetadata metadata = eventCallback.getEvent().getEventMetadata();

        if (metadata == null
                || metadata.getReportedForAppId() == null
                || metadata.getReportedForAppId().isEmpty()) {
            return EventCallbackHelper.EVENT_TYPE_ACCOUNT_CALLBACK;
        }

        return EventCallbackHelper.EVENT_TYPE_APP_CALLBACK;
    }
}
