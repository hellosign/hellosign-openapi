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

        var data = new FaxCreateRequest(
            file: "<form-data file upload>",
            test_mode: "1",
            to: 16690000001,
            from: 16690000000,
            cover_page_to: "Jill Fax",
            cover_page_message: "I'm sending you a fax!",
            cover_page_from: "Faxer Faxerson",
            title: "This is what the fax is about!"
        );

        try
        {
            var result = faxApi.FaxCreate(data);
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
