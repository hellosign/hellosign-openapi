using System;
using System.Collections.Generic;
using System.IO;

using Dropbox.Sign.Api;
using Dropbox.Sign.Client;
using Dropbox.Sign.Model;

namespace Dropbox.SignSandbox;

public class FaxLineCreateDefaultExample
{
    public static void Run()
    {
        var config = new Configuration();

        var faxLineCreateRequest = new FaxLineCreateRequest(
            areaCode: 209,
            country: FaxLineCreateRequest.CountryEnum.US
        );

        try
        {
            var response = new FaxLineApi(config).FaxLineCreate(
                faxLineCreateRequest: faxLineCreateRequest
            );

            Console.WriteLine(response);
        }
        catch (ApiException e)
        {
            Console.WriteLine("Exception when calling FaxLine#FaxLineCreate: " + e.Message);
            Console.WriteLine("Status Code: " + e.ErrorCode);
            Console.WriteLine(e.StackTrace);
        }
    }
}
