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

        var faxLineApi = new FaxLineApi(config);

        var data = new FaxLineCreateRequest(
            areaCode: 209,
            country: "US"
        );

        try
        {
            var result = faxLineApi.FaxLineCreate(data);
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