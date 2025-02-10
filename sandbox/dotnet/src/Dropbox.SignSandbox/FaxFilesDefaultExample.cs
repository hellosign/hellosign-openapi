using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class FaxFilesDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();
        config.Username = "YOUR_API_KEY";

        try
        {
            var response = new FaxApi(config).FaxFiles(
                faxId: "fa5c8a0b0f492d768749333ad6fcc214c111e967"
            );
            var fileStream = File.Create("file_response.zip");
            response.Seek(0, SeekOrigin.Begin);
            response.CopyTo(fileStream);
            fileStream.Close();
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Fax#FaxFiles: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
