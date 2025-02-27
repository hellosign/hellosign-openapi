using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class FaxSendExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        var faxSendRequest = new FaxSendRequest(
            recipient: "16690000001",
            sender: "16690000000",
            testMode: true,
            coverPageTo: "Jill Fax",
            coverPageFrom: "Faxer Faxerson",
            coverPageMessage: "I'm sending you a fax!",
            title: "This is what the fax is about!",
            files: new List<Stream>
            {
                new FileStream(
                    path: "./example_fax.pdf",
                    mode: FileMode.Open
                ),
            }
        );

        try
        {
            var response = new FaxApi(config).FaxSend(
                faxSendRequest: faxSendRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling FaxApi#FaxSend: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
