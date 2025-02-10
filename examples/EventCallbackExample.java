import com.dropbox.sign.EventCallbackHelper;
import com.dropbox.sign.model.EventCallbackRequest;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.HashMap;

public class Example {
    public static void main(String[] args) throws Exception {
        // use your API key
        var apiKey = "324e3b0840f065eb51f3fd63231d0d33daa35d4ed10d27718839e81737065782";

        // callbackData represents data we send to you
        var callbackData  = new HashMap<>() {{
            put("event", new HashMap<>() {{
                put("event_type", "account_confirmed");
                put("event_time", "1669926463");
                put("event_hash", "ff8b03439122f9160500c3fb855bdee5a9ccba5fff27d3b258745d8f3074832f");
                put("event_metadata", new HashMap<>() {{
                    put("related_signature_id", null);
                    put("reported_for_account_id", "6421d70b9bd45059fa207d03ab8d1b96515b472c");
                    put("reported_for_app_id", null);
                    put("event_message", null);
                }});
            }});
        }};

        var callbackEvent = EventCallbackRequest.init(
            new ObjectMapper().writeValueAsString(callbackData)
        );

        // verify that a callback came from HelloSign.com
        if (EventCallbackHelper.isValid(apiKey, callbackEvent)) {
            // one of "account_callback" or "api_app_callback"
            var callbackType = EventCallbackHelper.getCallbackType(callbackEvent);

            // do your magic below!
        }
    }
}
