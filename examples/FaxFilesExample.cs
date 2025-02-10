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

        var faxId = "fa5c8a0b0f492d768749333ad6fcc214c111e967";

        try
        {
            var result = faxApi.FaxFiles(faxId);
            var fileStream = File.Create("file_response.pdf");
            result.Seek(0, SeekOrigin.Begin);
            result.CopyTo(fileStream);
            fileStream.Close();
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Dropbox Sign API: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
