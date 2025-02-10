using System;
using System.Collections.Generic;
using System.IO;
using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

public class Example
{
    public static void Main()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        var faxApi = new FaxApi(config);

        var files = new List<Stream> {
            new FileStream(
                "./example_fax.pdf",
                FileMode.Open,
                FileAccess.Read,
                FileShare.Read
            )
        };

        var data = new FaxSendRequest(
            files: files,
            testMode: true,
            recipient: "16690000001",
            sender: "16690000000",
            coverPageTo: "Jill Fax",
            coverPageMessage: "I'm sending you a fax!",
            coverPageFrom: "Faxer Faxerson",
            title: "This is what the fax is about!",
        );

        try
        {
            var result = faxApi.FaxSend(data);
            Console.WriteLine(result);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Dropbox Sign API: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
