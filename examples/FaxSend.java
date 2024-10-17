import com.dropbox.sign.ApiException;
import com.dropbox.sign.Configuration;
import com.dropbox.sign.api.*;
import com.dropbox.sign.auth.*;
import com.dropbox.sign.model.*;

import java.util.List;

public class Example {
    public static void main(String[] args) {
        var apiClient = Configuration.getDefaultApiClient()
            .setApiKey("YOUR_API_KEY");

        var faxApi = new FaxApi(apiClient);


        var data = new FaxSendRequest()
            .addFilesItem(new File("example_fax.pdf"))
            .testMode(true)
            .recipient("16690000001")
            .sender("16690000000")
            .coverPageTo("Jill Fax")
            .coverPageMessage("I'm sending you a fax!")
            .coverPageFrom("Faxer Faxerson")
            .title("This is what the fax is about!");

        try {
            FaxCreateResponse result = faxApi.faxSend(data);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
