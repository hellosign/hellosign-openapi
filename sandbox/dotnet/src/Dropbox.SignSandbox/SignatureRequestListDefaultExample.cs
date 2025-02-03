using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class SignatureRequestListDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();

        try
        {
            var response = new SignatureRequestApi(config).SignatureRequestList(
                accountId: null,
                page: 1,
                pageSize: 20,
                query: null
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling SignatureRequest#SignatureRequestList: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
