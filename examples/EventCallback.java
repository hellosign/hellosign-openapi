import com.fasterxml.jackson.databind.ObjectMapper;
import com.hellosign.openapi.EventCallbackHelper;
import com.hellosign.openapi.JSON;
import com.hellosign.openapi.model.EventCallbackRequest;

import java.util.HashMap;
import java.util.Map;

public class Example {
    public static void main(String[] args) {
        // use your API key
        String apiKey = "324e3b0840f065eb51f3fd63231d0d33daa35d4ed10d27718839e81737065782";

        // callbackData represents data we send to you
        Map<String, Object> callbackData  = new HashMap<String, Object>() {{
            put("event", new HashMap<String, Object>() {{
                put("event_type", "account_confirmed");
                put("event_time", "1669926463");
                put("event_hash", "ff8b03439122f9160500c3fb855bdee5a9ccba5fff27d3b258745d8f3074832f");
                put("event_metadata", new HashMap<String, Object>() {{
                    put("related_signature_id", null);
                    put("reported_for_account_id", "6421d70b9bd45059fa207d03ab8d1b96515b472c");
                    put("reported_for_app_id", null);
                    put("event_message", null);
                }});
            }});
        }};

        ObjectMapper mapper = JSON.getDefault().getMapper();
        EventCallbackRequest callbackEvent = mapper.convertValue(
            callbackData,
            EventCallbackRequest.class
        );

        // verify that a callback came from HelloSign.com
        if (EventCallbackHelper.isValid(apiKey, callbackEvent)) {
            // one of "account_callback" or "api_app_callback"
            String callbackType = EventCallbackHelper.getCallbackType(callbackEvent);

            // do your magic below!
        }
    }
}
