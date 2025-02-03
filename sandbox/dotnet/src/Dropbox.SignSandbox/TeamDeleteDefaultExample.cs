using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class TeamDeleteDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();

        try
        {
            new TeamApi(config).TeamDelete();
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling Team#TeamDelete: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
