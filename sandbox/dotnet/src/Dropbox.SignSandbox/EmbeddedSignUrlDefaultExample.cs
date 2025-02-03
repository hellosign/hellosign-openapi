using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class EmbeddedSignUrlDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();

        try
        {
            var response = new EmbeddedApi(config).EmbeddedSignUrl(
                signatureId: "50e3542f738adfa7ddd4cbd4c00d2a8ab6e4194b"
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Embedded#EmbeddedSignUrl: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
