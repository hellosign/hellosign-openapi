using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class FaxLineListDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();

        try
        {
            var response = new FaxLineApi(config).FaxLineList(
                accountId: "ab55cd14a97219e36b5ff5fe23f2f9329b0c1e97",
                page: 1,
                pageSize: 20,
                showTeamLines: null
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling FaxLine#FaxLineList: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
